import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';
import { base_url } from '../config/config';


const initialState = {
  itineraries: [],
  currentItinerary: null,
  isLoading: false,
  error: null,
};

// Create axios instance with auth header
const api = axios.create({
  baseURL:  base_url,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  // const token = localStorage.getItem('token');
  const default_token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2ZmZTU4NjNmNWRmMmU4ZWMwYTg3OTAiLCJpYXQiOjE3NDUxOTM4MjF9.J3CLniALB9TfeP6vdgVpo5iVngAyMDZoqxe5T0qmSaM`;

  const token = Cookies.get('token') || default_token; // Use the token from cookies or a default token for testing
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});



export const saveItinerary = createAsyncThunk(
  'itinerary/save',
  async (itinerary, { rejectWithValue }) => {
    try {
      const response = await api.post('/itineraries', itinerary);
      return response.data;
    } catch (error) {
      console.error('Error in saveItinerary:', error.response?.data || error.message);
      return rejectWithValue(error.response?.data?.error || 'Failed to save itinerary');
    }
  }
);

export const fetchItineraries = createAsyncThunk(
  'itinerary/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/itineraries');
      return response.data;
    } catch (error) {
      console.error('Error in fetchItineraries:', error.response?.data || error.message);
      return rejectWithValue(error.response?.data?.error || 'Failed to fetch itineraries');
    }
  }
);

export const fetchItinerary = createAsyncThunk(
  'itinerary/fetchOne',
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.get(`/itineraries/${id}`);
      
      return response.data;
    } catch (error) {
      console.error('Error in fetchItinerary:', error.response?.data || error.message);
      return rejectWithValue(error.response?.data?.error || 'Failed to fetch itinerary');
    }
  }
);

export const fetchItineraryById = createAsyncThunk(
  'itinerary/fetchItineraryById',
  async (id, { rejectWithValue }) => {
    try {
      // Validate ID
      if (!id) {
        throw new Error('Itinerary ID is required');
      }

      const response = await fetch(`${import.meta.env.VITE_API_URL}/itineraries/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch itinerary');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error in fetchItineraryById:', error);
      return rejectWithValue(error.message);
    }
  }
);

const itinerarySlice = createSlice({
  name: 'itinerary',
  initialState,
  reducers: {
    clearCurrentItinerary: (state) => {
      state.currentItinerary = null;
    },
    clearError: (state) => {
      state.error = null;
    },
   
  },
  extraReducers: (builder) => {
    builder
      // Generate Itinerary
     
      // Save Itinerary
      .addCase(saveItinerary.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(saveItinerary.fulfilled, (state, action) => {
        state.isLoading = false;
        state.itineraries.push(action.payload);
        state.currentItinerary = null;
      })
      .addCase(saveItinerary.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Fetch All Itineraries
      .addCase(fetchItineraries.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchItineraries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.itineraries = action.payload;
      })
      .addCase(fetchItineraries.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Fetch Single Itinerary
      .addCase(fetchItinerary.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchItinerary.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentItinerary = action.payload;
        console.log('Fetched itinerary:', action.payload);
      })
      .addCase(fetchItinerary.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchItineraryById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchItineraryById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentItinerary = action.payload;
      })
      .addCase(fetchItineraryById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearCurrentItinerary, clearError } = itinerarySlice.actions;
export default itinerarySlice.reducer; 