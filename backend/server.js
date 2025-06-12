const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const connectDB = require('./dbConnect');
const axios = require('axios');
const cheerio = require('cheerio');
const { OAuth2Client } = require('google-auth-library');

// Load environment variables
dotenv.config();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const app = express();

// Middleware
app.use(cors());
app.use(cors({ origin: ["'https://maha-backend.vercel.app",'https://mahasafar.vercel.app/','http://localhost:5001','http://localhost:5173'], credentials: true }));
// app.use(cors({
//   origin: '*', // Allow requests from your frontend
//   methods: ['GET', 'POST', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true
// }));

// app.options('/api/google-login', (req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', 'https://mahasafar.vercel.app');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');
//   res.sendStatus(200);
// });

app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
    next();
});

connectDB();

// User Schema
const userSchema = new mongoose.Schema({
  name:{type: String, required:false},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false }, // Optional for Google users
  googleId: { type: String, unique: true, sparse: true }, // Optional for Google users
  itineraries: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Itinerary' }]
});

const User = mongoose.model('User', userSchema);

const itinerarySchema = new mongoose.Schema({
  json : { type: String, required: true },
  travelAdvisorData : { type: String },
  destination :{ type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }

  
});



const Itinerary = mongoose.model('Itinerary', itinerarySchema);


// Authentication middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) return res.status(401).json({ error: 'Access denied' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
};

// Register endpoint
app.post('/api/register', async (req, res) => {
  try {
    const {name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({ 
      token,
      user: {
        _id: user._id,
        email: user.email,
        name:user.name
      }
    });
  } catch (error) {
    res.status(400).json({ error: 'Registration failed' });
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user) return res.status(400).json({ error: 'User not found' });
    
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ error: 'Invalid password' });
    
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({ 
      token,
      user: {
        _id: user._id,
        email: user.email,
        name : user.name
      }
    });
  } catch (error) {
    res.status(400).json({ error: 'Login failed' });
  }
});


// Save itinerary endpoint
app.post('/api/itineraries',authenticateToken, async (req, res) => {
  try {
    const itinerary = new Itinerary({
      json: JSON.stringify(req.body),
      userId: req.user.userId,
      destination:req.destination
    });
    
    await itinerary.save();

    // Update user's itineraries
    await User.findByIdAndUpdate(req.user.userId, {
      $push: { 
        itineraries: itinerary._id
      }
    });

    res.json(itinerary);
  } catch (error) {
    console.error('Error saving itinerary:', error);
    res.status(500).json({ error: 'Failed to save itinerary' });
  }
});

// Get user's itineraries
app.get('/api/itineraries', authenticateToken, async (req, res) => {
  try {
    const itineraries = await Itinerary.find({ userId: req.user.userId });
    res.json(itineraries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch itineraries' });
  }
});

// Get single itinerary
app.get('/api/itineraries/:id', authenticateToken, async (req, res) => {
  try {
    const itinerary = await Itinerary.findOne({
      _id: req.params.id,
      userId: req.user.userId
    });
    
    if (!itinerary) {
      return res.status(404).json({ error: 'Itinerary not found' });
    }

    // Convert JSON string back to object
    itinerary.json = JSON.parse(itinerary.json);
    // Send the itinerary as a response    
    res.json(itinerary);
    console.log(itinerary);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch itinerary' });
  }
});

app.post('/download_images', async (req, res) => {
  const data = req.body;

  if (!data || Object.keys(data).length !== 1) {
    return res.status(400).json({
      error: "Request JSON must contain exactly one key: the place, with its value = number of images."
    });
  }

  const place = Object.keys(data)[0];
  let num_images = parseInt(data[place], 10);

  if (isNaN(num_images)) {
    return res.status(400).json({ error: "Number of images must be an integer." });
  }

  try {
    const results = await google.scrape(place, num_images);
    const imageUrls = results.map(result => result.url);
    return res.status(200).json({ images: imageUrls });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to fetch images." });
  }
});
// Google Login endpoint
app.post('/api/google-login', async (req, res) => {
  try {
    const { credential } = req.body;
    
    // Verify the Google token
    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    
    const payload = ticket.getPayload();
    const { email, name, sub: googleId } = payload;
    
    // Check if user exists
    let user = await User.findOne({ email });
    
    if (!user) {
      // Create new user if doesn't exist
      user = new User({
        name,
        email,
        googleId,
        // Don't set password for Google users
      });
      await user.save();
    } else if (!user.googleId) {
      // Link existing account with Google
      user.googleId = googleId;
      await user.save();
    }
    
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
      user: {
        _id: user._id,
        email: user.email,
        name: user.name
      }
    });
  } catch (error) {
    console.error('Google login error:', error);
    res.status(400).json({ error: 'Google login failed' });
  }
});

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: 'Something went wrong!' });
// });

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Base URL: http://localhost:${PORT}/api`);
}); 