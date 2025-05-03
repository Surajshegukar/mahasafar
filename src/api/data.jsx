import beach from "../assets/beach.jpg";
import temple from "../assets/temple.jpg";
import fort_image from "../assets/forts.jpg";
import mplace from "../assets/mplace.jpg";
import uimage from "../assets/uimage.jpg";

export const destinationCategories = [
  
  {
    id: 7,
    name: "TEMPLES",
    images: temple,
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="32"
        height="32"
        stroke="white"
        fill="none"
        strokeWidth="2"
      >
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
        <line x1="12" y1="22" x2="12" y2="15.5"></line>
        <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
      </svg>
    ),
    height: "h-64",
    span: "",
  },
  {
    id: 8,
    name: "FORTS",
    images: fort_image,
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="32"
        height="32"
        stroke="white"
        fill="none"
        strokeWidth="2"
      >
        <rect x="2" y="6" width="20" height="12" rx="2"></rect>
        <path d="M12 12v6"></path>
        <path d="M8 12v6"></path>
        <path d="M16 12v6"></path>
        <path d="M2 12h20"></path>
      </svg>
    ),
    height: "h-64",
    span: "",
  },
  {
    id: 2,
    name: "BEACHES",
    images: beach,
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="32"
        height="32"
        stroke="white"
        fill="none"
        strokeWidth="2"
      >
        <path d="M8 16.5l1-1 1.5 1.5 2-2 1.5 1.5 2-2 1.5 1.5 1.5-1.5 1 1"></path>
        <path d="M20 20c-4.5 0-9-3-9-9 0-3.5 2-6.5 5-8 3 1.5 5 4.5 5 8 0 6-4.5 9-9 9"></path>
        <path d="M4 20c4.5 0 9-3 9-9 0-3.5-2-6.5-5-8-3 1.5-5 4.5-5 8 0 6 4.5 9 9 9"></path>
      </svg>
    ),
    height: "h-80",
    span: "",
  },
  {
    id: 3,
    name: "UNIQUE EXPERIENCES",
    images: uimage,
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="32"
        height="32"
        stroke="white"
        fill="none"
        strokeWidth="2"
      >
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
        <line x1="6" y1="1" x2="6" y2="4"></line>
        <line x1="10" y1="1" x2="10" y2="4"></line>
        <line x1="14" y1="1" x2="14" y2="4"></line>
      </svg>
    ),
    height: "h-72",
    span: "",
  },

  {
    id: 5,
    name: "Miscellaneous",
    images: mplace,
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="32"
        height="32"
        stroke="white"
        fill="none"
        strokeWidth="2"
      >
        <path d="M21 18a9 9 0 0 0-18 0"></path>
        <path d="M3 15a9 9 0 0 1 18 0"></path>
        <path d="M10.5 13.5a2.5 2.5 0 0 0 3 0"></path>
        <path d="M7 16a2.5 2.5 0 0 0 3 0"></path>
        <path d="M14 16a2.5 2.5 0 0 0 3 0"></path>
      </svg>
    ),
    height: "h-64",
    span: "",
  },

];

export const forts = [
  {
    id: 1,
    title: "Raigad Fort",
    short_description: "Historic hill fort and the capital of Chhatrapati Shivaji Maharaj.",
    description: "Raigad Fort is known for its strategic importance, majestic structures, and breathtaking views of the Sahyadri mountains.",
    Transportation: {
      ByAir: "Nearest airport is Pune Airport, around 125 km away.",
      ByRoad: "Well connected by road to Pune and Mumbai.",
    },
    Activities: "Trekking, historical sightseeing, ropeway ride.",
    position: { lat: 18.2345, lng: 73.4427 },
  },
  {
    id: 2,
    title: "Sinhagad Fort",
    short_description: "A popular trekking destination near Pune.",
    description: "Sinhagad Fort is known for its historic battles and scenic trekking trails, offering panoramic views of the region.",
    Transportation: {
      ByAir: "Pune Airport is around 37 km away.",
      ByRoad: "Easily accessible by road from Pune city.",
    },
    Activities: "Trekking, photography, local food tasting.",
    position: { lat: 18.3663, lng: 73.7559 },
  },
  {
    id: 3,
    title: "Pratapgad Fort",
    short_description: "Historic site of the Battle of Pratapgad.",
    description: "Pratapgad Fort, built by Shivaji Maharaj, stands majestically in Satara and offers views of the surrounding valleys.",
    Transportation: {
      ByAir: "Pune Airport is about 150 km away.",
      ByRoad: "Accessible from Mahabaleshwar and Pune.",
    },
    Activities: "Fort exploration, photography, historical tours.",
    position: { lat: 17.927, lng: 73.5824 },
  },
  {
    id: 4,
    title: "Rajgad Fort",
    short_description: "Former capital of the Maratha Empire.",
    description: "Rajgad Fort is a massive fort known for its architecture and stunning trekking routes amidst nature.",
    Transportation: {
      ByAir: "Pune Airport is about 75 km away.",
      ByRoad: "Connected by road from Pune and nearby towns.",
    },
    Activities: "Trekking, camping, historical sightseeing.",
    position: { lat: 18.2446, lng: 73.6762 },
  },
  {
    id: 5,
    title: "Lohagad Fort",
    short_description: "An easy trek fort near Lonavala.",
    description: "Lohagad Fort is a monsoon favorite, with lush greenery and beautiful views from the 'Vinchukada' (Scorpion Tail).",
    Transportation: {
      ByAir: "Pune Airport is 65 km away.",
      ByRoad: "Well connected to Lonavala and Pune.",
    },
    Activities: "Trekking, monsoon hiking, nature photography.",
    position: { lat: 18.71, lng: 73.4803 },
  },
  {
    id: 6,
    title: "Torna Fort",
    short_description: "First fort captured by Shivaji Maharaj.",
    description: "Torna Fort is also called 'Prachandagad' and offers a thrilling trek with historic significance.",
    Transportation: {
      ByAir: "Pune Airport is about 70 km away.",
      ByRoad: "Accessible via private vehicles and local transport from Pune.",
    },
    Activities: "Trekking, historical exploration, camping.",
    position: { lat: 18.2783, lng: 73.6734 },
  },
  {
    id: 7,
    title: "Shivneri Fort",
    short_description: "Birthplace of Chhatrapati Shivaji Maharaj.",
    description: "Located in Junnar, Shivneri Fort is a well-preserved fort with strong historical significance and scenic beauty.",
    Transportation: {
      ByAir: "Pune Airport is around 90 km away.",
      ByRoad: "Good road connectivity from Pune and Junnar.",
    },
    Activities: "Sightseeing, heritage tours, trekking.",
    position: { lat: 19.1952, lng: 73.8656 },
  },
  {
    id: 8,
    title: "Harishchandragad Fort",
    short_description: "A trekker’s paradise with stunning Konkan Kada views.",
    description: "Harishchandragad Fort is famed for its caves, temples, and the dramatic cliff Konkan Kada, offering breathtaking sunsets.",
    Transportation: {
      ByAir: "Mumbai Airport is about 130 km away.",
      ByRoad: "Accessible via road from Mumbai, Pune, and Malshej Ghat.",
    },
    Activities: "Trekking, camping, photography.",
    position: { lat: 19.3886, lng: 73.7665 },
  },
  {
    id: 9,
    title: "Murud-Janjira Fort",
    short_description: "An impressive sea fort near Alibaug.",
    description: "Murud-Janjira is unique for its location on an island and is renowned for being unconquered in history.",
    Transportation: {
      ByAir: "Mumbai Airport is around 140 km away.",
      ByRoad: "Accessible via road from Mumbai and Alibaug.",
    },
    Activities: "Boat rides, fort exploration, photography.",
    position: { lat: 18.2966, lng: 72.9631 },
  },
  {
    id: 10,
    title: "Purandar Fort",
    short_description: "Historic fort associated with Shivaji’s early life.",
    description: "Purandar Fort is known for its picturesque beauty, historic importance, and panoramic views of the countryside.",
    Transportation: {
      ByAir: "Pune Airport is about 45 km away.",
      ByRoad: "Accessible from Pune by private vehicles.",
    },
    Activities: "Trekking, historical tours, photography.",
    position: { lat: 18.2763, lng: 73.9441 },
  },
  {
    id: 11,
    title: "Korigad Fort",
    short_description: "Scenic fort near Lonavala and Aamby Valley.",
    description: "Korigad is an easy trekking destination with beautiful water tanks, temples, and panoramic views.",
    Transportation: {
      ByAir: "Pune Airport is around 95 km away.",
      ByRoad: "Reachable from Lonavala and Pune by road.",
    },
    Activities: "Trekking, sightseeing, camping.",
    position: { lat: 18.5992, lng: 73.4377 },
  },
  {
    id: 12,
    title: "Tikona Fort",
    short_description: "A small pyramid-shaped fort near Pawna Lake.",
    description: "Tikona Fort is perfect for beginners with a simple climb offering spectacular views of Pawna Lake and surrounding forts.",
    Transportation: {
      ByAir: "Pune Airport is about 60 km away.",
      ByRoad: "Connected via Lonavala and Kamshet roads.",
    },
    Activities: "Trekking, photography, fort exploration.",
    position: { lat: 18.5945, lng: 73.4848 },
  },
  {
    id: 13,
    title: "Visapur Fort",
    short_description: "Adjacent to Lohagad, known for its large plateau.",
    description: "Visapur Fort is a popular trekking destination with ruins of ancient buildings, water cisterns, and commanding views.",
    Transportation: {
      ByAir: "Pune Airport is about 70 km away.",
      ByRoad: "Accessible from Lonavala and Malavli station.",
    },
    Activities: "Trekking, photography, monsoon hikes.",
    position: { lat: 18.7385, lng: 73.4923 },
  },
  {
    id: 14,
    title: "Sudhagad Fort",
    short_description: "An ancient fort near Pali famous for its Bhoraidevi temple.",
    description: "Sudhagad Fort is an easy trek offering beautiful scenery, old temples, and a relaxed trekking experience.",
    Transportation: {
      ByAir: "Mumbai Airport is about 110 km away.",
      ByRoad: "Reachable via Khopoli and Pali.",
    },
    Activities: "Trekking, temple visits, camping.",
    position: { lat: 18.4745, lng: 73.3087 },
  },
  {
    id: 15,
    title: "Karnala Fort",
    short_description: "A small fort located inside Karnala Bird Sanctuary.",
    description: "Karnala Fort offers a short trek through a bird sanctuary with rewarding views from the summit.",
    Transportation: {
      ByAir: "Mumbai Airport is about 60 km away.",
      ByRoad: "Well connected by road from Mumbai and Panvel.",
    },
    Activities: "Trekking, bird watching, fort exploration.",
    position: { lat: 18.8902, lng: 73.1115 },
  },
  {
    id: 16,
    title: "Panhala Fort",
    short_description: "A large fort near Kolhapur with historic significance.",
    description: "Panhala Fort was an important Maratha bastion and offers grand ramparts, gateways, and stories of valor.",
    Transportation: {
      ByAir: "Kolhapur Airport is about 30 km away.",
      ByRoad: "Connected by road to Kolhapur city.",
    },
    Activities: "Historical tours, fort walks, photography.",
    position: { lat: 16.8121, lng: 74.1099 },
  }
];


export const beaches =[
  {
    "id": 1,
    "title": "Alibaug Beach",
    "short description": "A popular beach near Mumbai, known for its clean sands and water sports.",
    "description": "Alibaug Beach offers a perfect weekend getaway with its black sand beaches, scenic views, and Kolaba Fort visible offshore.",
    "Transportation": {
      "ByAir": "Nearest airport is Chhatrapati Shivaji Maharaj International Airport, Mumbai, about 100 km away.",
      "ByRoad": "Well connected by buses and private vehicles from Mumbai and Pune."
    },
    "Activities": "Beach walks, water sports, fort visits, sunset views.",
    "position": { "lat": 18.6414, "lng": 72.8722 }
  },
  {
    "id": 2,
    "title": "Kashid Beach",
    "short description": "A serene beach known for its white sands and blue waters.",
    "description": "Located between Alibaug and Murud, Kashid Beach is famous for its tranquility, water activities, and lush surroundings.",
    "Transportation": {
      "ByAir": "Mumbai Airport is about 125 km away.",
      "ByRoad": "Accessible via road from Mumbai, Pune, and Alibaug."
    },
    "Activities": "Water sports, horseback riding, beach camping.",
    "position": { "lat": 18.4366, "lng": 72.9066 }
  },
  {
    "id": 3,
    "title": "Ganpatipule Beach",
    "short description": "A pristine beach famous for its temple of Lord Ganesh.",
    "description": "Ganpatipule Beach is a peaceful coastal town with clear waters, a beautiful shoreline, and a 400-year-old Ganesh temple.",
    "Transportation": {
      "ByAir": "Nearest airport is Ratnagiri Airport, about 30 km away.",
      "ByRoad": "Well connected by buses and private taxis from Ratnagiri and Mumbai."
    },
    "Activities": "Temple visit, beach walks, water sports.",
    "position": { "lat": 17.1484, "lng": 73.2767 }
  },
  {
    "id": 4,
    "title": "Tarkarli Beach",
    "short description": "A paradise for scuba diving and snorkeling enthusiasts.",
    "description": "Tarkarli Beach is renowned for its crystal-clear waters, houseboats, and vibrant marine life, making it ideal for water sports lovers.",
    "Transportation": {
      "ByAir": "Nearest airport is Dabolim Airport, Goa, about 130 km away.",
      "ByRoad": "Buses and private vehicles connect Tarkarli with Malvan and Mumbai."
    },
    "Activities": "Scuba diving, snorkeling, boat rides, dolphin watching.",
    "position": { "lat": 16.0409, "lng": 73.4746 }
  },
  {
    "id": 5,
    "title": "Diveagar Beach",
    "short description": "An offbeat destination known for its peaceful environment and golden sands.",
    "description": "Diveagar Beach, located in the Raigad district, offers a serene coastal escape lined with coconut and betel nut trees.",
    "Transportation": {
      "ByAir": "Mumbai Airport is about 180 km away.",
      "ByRoad": "Easily accessible via road from Mumbai and Pune."
    },
    "Activities": "Swimming, relaxing, photography.",
    "position": { "lat": 18.1806, "lng": 72.9040 }
  },
  {
    "id": 6,
    "title": "Harihareshwar Beach",
    "short description": "Known as the 'Dakshin Kashi', this beach is famous for its temple and spiritual ambiance.",
    "description": "Harihareshwar Beach offers a combination of religious pilgrimage and coastal beauty with scenic hills and tranquil waters.",
    "Transportation": {
      "ByAir": "Mumbai Airport is about 210 km away.",
      "ByRoad": "Good road connectivity from Mumbai and Pune via Shrivardhan."
    },
    "Activities": "Temple visits, boating, beach picnics.",
    "position": { "lat": 18.0830, "lng": 73.0159 }
  },
  {
    "id": 7,
    "title": "Aksa Beach",
    "short description": "A calm and less crowded beach located in Malad, Mumbai.",
    "description": "Aksa Beach is popular among locals for weekend trips and its long shoreline, though swimming is discouraged due to strong currents.",
    "Transportation": {
      "ByAir": "Nearest is Chhatrapati Shivaji Maharaj International Airport, about 20 km away.",
      "ByRoad": "Accessible via Mumbai local transport and private vehicles."
    },
    "Activities": "Relaxing walks, photography, picnics.",
    "position": { "lat": 19.1754, "lng": 72.7951 }
  },
  {
    "id": 8,
    "title": "Juhu Beach",
    "short description": "One of Mumbai’s most famous beaches, known for street food and vibrant atmosphere.",
    "description": "Juhu Beach is a bustling destination famous for its sunset views, food stalls, and celebrity sightings.",
    "Transportation": {
      "ByAir": "Chhatrapati Shivaji Maharaj International Airport is about 6 km away.",
      "ByRoad": "Easily reachable via local trains, buses, and taxis in Mumbai."
    },
    "Activities": "Eating street food, beach walks, enjoying cultural performances.",
    "position": { "lat": 19.1006, "lng": 72.8267 }
  },
  {
    "id": 9,
    "title": "Marve Beach",
    "short description": "A peaceful beach located in the western suburbs of Mumbai.",
    "description": "Marve Beach is relatively less commercialized and offers ferry services to Manori and EsselWorld.",
    "Transportation": {
      "ByAir": "Mumbai International Airport is around 20 km away.",
      "ByRoad": "Accessible by buses, taxis, and autos from Malad and Borivali."
    },
    "Activities": "Ferry rides, relaxing, sunset viewing.",
    "position": { "lat": 19.2153, "lng": 72.7910 }
  },
  {
    "id": 10,
    "title": "Velas Beach",
    "short description": "Famous for the Olive Ridley turtle conservation project.",
    "description": "Velas Beach is a hidden gem in Ratnagiri district, known for turtle hatching events during February and March.",
    "Transportation": {
      "ByAir": "Pune Airport is about 190 km away.",
      "ByRoad": "Private vehicles and buses connect Velas to Pune and Mumbai."
    },
    "Activities": "Turtle festival, beach walks, eco-tourism.",
    "position": { "lat": 17.9997, "lng": 73.0132 }
  },
  {
    "id": 11,
    "title": "Murud Beach",
    "short description": "A clean and beautiful beach near Murud-Janjira Fort.",
    "description": "Murud Beach, with its soft sand and scenic views, is perfect for a quiet retreat and also offers a glimpse of the historic fort offshore.",
    "Transportation": {
      "ByAir": "Mumbai Airport is around 150 km away.",
      "ByRoad": "Connected by road to Mumbai, Pune, and Alibaug."
    },
    "Activities": "Beach walks, fort visits, water sports.",
    "position": { "lat": 18.3281, "lng": 72.9648 }
  },
  {
    "id": 12,
    "title": "Mandwa Beach",
    "short description": "A beach close to Mumbai, known for its ferry services and film shootings.",
    "description": "Mandwa Beach is a favorite spot for Mumbaikars, offering a quick escape with views of the Gateway of India and opportunities for adventure sports.",
    "Transportation": {
      "ByAir": "Mumbai Airport is about 110 km away.",
      "ByRoad": "Accessible via road and ferry from Mumbai's Gateway of India."
    },
    "Activities": "Water sports, ferry rides, beachside cafes.",
    "position": { "lat": 18.7916, "lng": 72.9251 }
  },
  {
    "id": 13,
    "title": "Shrivardhan Beach",
    "short description": "A historic beach town with a serene coastline and ancient temples.",
    "description": "Shrivardhan Beach offers calm waters and is ideal for families looking for a peaceful getaway by the sea.",
    "Transportation": {
      "ByAir": "Mumbai Airport is about 185 km away.",
      "ByRoad": "Well connected via road from Mumbai and Pune."
    },
    "Activities": "Swimming, sightseeing, visiting temples.",
    "position": { "lat": 18.0333, "lng": 73.0167 }
  },
  {
    "id": 14,
    "title": "Vengurla Beach",
    "short description": "A quiet, scenic beach near the Goa border.",
    "description": "Vengurla Beach boasts white sands, lush coconut groves, and a tranquil environment perfect for unwinding away from crowds.",
    "Transportation": {
      "ByAir": "Dabolim Airport, Goa, is about 100 km away.",
      "ByRoad": "Good road connectivity from Goa, Sawantwadi, and Mumbai."
    },
    "Activities": "Swimming, seafood tasting, sightseeing.",
    "position": { "lat": 15.8614, "lng": 73.6341 }
  },
  {
    "id": 15,
    "title": "Madh Island Beach",
    "short description": "A quiet and clean beach located north-west of Mumbai.",
    "description": "Madh Island Beach offers a relaxing environment close to Mumbai and is popular for weekend getaways, parties, and seafood.",
    "Transportation": {
      "ByAir": "Mumbai International Airport is about 25 km away.",
      "ByRoad": "Accessible via ferry services from Versova and by road from Malad."
    },
    "Activities": "Relaxing, party events, beach walks.",
    "position": { "lat": 19.1690, "lng": 72.7897 }
  }
]


export const temples =[
  {
    "id": 1,
    "position": { "lat": 18.516726, "lng": 73.856255 },
    "title": "Dagdusheth Halwai Ganapati Temple",
    "short description": "A famous Ganesha temple in Pune known for its rich history and devotion.",
    "Description": "Dagdusheth Halwai Ganapati Temple is one of the most iconic temples in Pune, Maharashtra. It attracts thousands of devotees daily and is especially vibrant during Ganesh Chaturthi.",
    "Transportation": {
      "ByAir": "Nearest airport is Pune International Airport, approximately 11 km away.",
      "ByRoad": "Well connected by road within Pune city; taxis, buses, and autos are easily available."
    },
    "Activities": "Darshan, attending aarti, photography, shopping at nearby markets."
  },
  {
    "id": 2,
    "position": { "lat": 16.6956, "lng": 74.5642 },
    "title": "Kopeshwar Temple",
    "short description": "A beautiful ancient temple dedicated to Lord Shiva, located in Khidrapur.",
    "Description": "Kopeshwar Temple is an architectural marvel built in the 12th century, featuring stunning stone carvings and sculptures.",
    "Transportation": {
      "ByAir": "Nearest airport is Kolhapur Airport, around 55 km away.",
      "ByRoad": "Accessible by buses and taxis from Kolhapur and Sangli."
    },
    "Activities": "Temple exploration, appreciating ancient architecture, photography."
  },
  {
    "id": 3,
    "position": { "lat": 16.7049, "lng": 74.2433 },
    "title": "Mahalakshmi Temple",
    "short description": "One of the Shakti Peethas, this temple in Kolhapur is dedicated to Goddess Mahalakshmi.",
    "Description": "Mahalakshmi Temple is a major Hindu pilgrimage site in Kolhapur, celebrated for its historical and spiritual significance.",
    "Transportation": {
      "ByAir": "Kolhapur Airport is around 10 km away.",
      "ByRoad": "Kolhapur is well connected by bus and taxi services."
    },
    "Activities": "Darshan, attending religious ceremonies, shopping for souvenirs."
  },
  {
    "id": 4,
    "position": { "lat": 18.8494, "lng": 76.5265 },
    "title": "Parli Vaijnath Temple",
    "short description": "One of the twelve Jyotirlingas of Lord Shiva, located in Beed district.",
    "Description": "Parli Vaijnath Temple is an important Shiva temple, deeply revered for its religious significance and architecture.",
    "Transportation": {
      "ByAir": "Nearest airport is Aurangabad Airport, approximately 200 km away.",
      "ByRoad": "Accessible by buses and taxis from Parli and nearby towns."
    },
    "Activities": "Darshan, Shiva Abhishekam rituals, attending aartis."
  },
  {
    "id": 5,
    "position": { "lat": 19.7667, "lng": 74.4833 },
    "title": "Shani Shingnapur Temple",
    "short description": "Famous for its deity of Shani and the tradition of houses without doors.",
    "Description": "Shani Shingnapur is unique for its devotion to Lord Shani, where the temple houses an imposing black stone idol under open sky.",
    "Transportation": {
      "ByAir": "Aurangabad Airport is the nearest, around 90 km away.",
      "ByRoad": "Frequent buses and taxis from Ahmednagar and Shirdi."
    },
    "Activities": "Offering prayers, experiencing the unique no-doors village."
  },
  {
    "id": 6,
    "position": { "lat": 18.7486, "lng": 73.4787 },
    "title": "Ekvira Aai Temple",
    "short description": "A revered temple near Lonavala, popular among Koli communities.",
    "Description": "Situated near Karla Caves, Ekvira Aai Temple is nestled amidst hills and is a significant pilgrimage spot for devotees.",
    "Transportation": {
      "ByAir": "Pune International Airport is about 60 km away.",
      "ByRoad": "Easily accessible via Mumbai-Pune Expressway."
    },
    "Activities": "Trekking, darshan, sightseeing at Karla Caves."
  },
  {
    "id": 7,
    "position": { "lat": 18.2766, "lng": 74.1607 },
    "title": "Jejuri Khandoba Temple",
    "short description": "Famous temple of Lord Khandoba situated atop a hill in Jejuri.",
    "Description": "Jejuri Temple, also called the 'Khandoba Temple', is known for its turmeric festival and spiritual significance in Maharashtra.",
    "Transportation": {
      "ByAir": "Pune Airport is the nearest, around 50 km away.",
      "ByRoad": "Buses and taxis connect Jejuri from Pune and nearby towns."
    },
    "Activities": "Climbing the temple hill, turmeric rituals, attending festivals."
  },
  {
    "id": 8,
    "position": { "lat": 18.6797, "lng": 73.8806 },
    "title": "Ashtavinayak Temples",
    "short description": "A pilgrimage covering eight ancient temples of Ganesha across Maharashtra.",
    "Description": "The Ashtavinayak Yatra involves visiting eight significant temples, each with its own legend related to Lord Ganesha.",
    "Transportation": {
      "ByAir": "Pune Airport serves as a common starting point.",
      "ByRoad": "Private cabs and tour buses are available for the pilgrimage circuit."
    },
    "Activities": "Pilgrimage, spiritual tours, temple hopping."
  },
  {
    "id": 9,
    "position": { "lat": 18.9477, "lng": 72.8332 },
    "title": "Mumbadevi Temple",
    "short description": "An ancient temple dedicated to Goddess Mumbadevi, the patron deity of Mumbai.",
    "Description": "Located in the heart of Mumbai, Mumbadevi Temple is a vibrant center of faith and one of the oldest shrines in the city.",
    "Transportation": {
      "ByAir": "Chhatrapati Shivaji Maharaj International Airport is about 20 km away.",
      "ByRoad": "Well connected by Mumbai's public transport and taxis."
    },
    "Activities": "Offering prayers, exploring nearby Crawford Market."
  },
  {
    "id": 10,
    "position": { "lat": 19.8762, "lng": 75.3433 },
    "title": "Grishneshwar Temple",
    "short description": "One of the 12 Jyotirlingas located near Ellora Caves.",
    "Description": "Grishneshwar Temple is a sacred site near Aurangabad, known for its stunning architecture and spiritual importance.",
    "Transportation": {
      "ByAir": "Aurangabad Airport is around 30 km away.",
      "ByRoad": "Easily accessible by taxis and buses from Aurangabad."
    },
    "Activities": "Darshan, visiting Ellora Caves, spiritual rituals."
  },
  {
    "id": 11,
    "position": { "lat": 17.6792, "lng": 75.3306 },
    "title": "Pandharpur Vitthal Temple",
    "short description": "A major pilgrimage center dedicated to Lord Vitthal (Krishna).",
    "Description": "Pandharpur Temple attracts millions of devotees, especially during Ashadhi Ekadashi, to worship Lord Vitthal and Rakhumai.",
    "Transportation": {
      "ByAir": "Pune Airport is approximately 205 km away.",
      "ByRoad": "Buses and taxis operate frequently from Pune, Solapur."
    },
    "Activities": "Bhajan-kirtan, darshan, participating in palkhi procession."
  },
  {
    "id": 12,
    "position": { "lat": 19.0728, "lng": 73.5777 },
    "title": "Bhimashankar Temple",
    "short description": "One of the twelve Jyotirlingas, nestled in the Sahyadri hills.",
    "Description": "Bhimashankar is both a sacred Shiva temple and a wildlife sanctuary, known for its serene environment and natural beauty.",
    "Transportation": {
      "ByAir": "Pune Airport is around 110 km away.",
      "ByRoad": "Accessible by road; buses and taxis available from Pune."
    },
    "Activities": "Trekking, darshan, nature walks."
  },
  {
    "id": 13,
    "position": { "lat": 19.9406, "lng": 73.7976 },
    "title": "Trimbakeshwar Temple",
    "short description": "A Jyotirlinga temple located in Nashik district.",
    "Description": "Trimbakeshwar Temple is revered for its sacredness, where the Godavari river originates, and its unique three-faced linga.",
    "Transportation": {
      "ByAir": "Nashik Airport is the nearest, about 30 km away.",
      "ByRoad": "Easily reachable via Nashik city buses and taxis."
    },
    "Activities": "Darshan, kund (sacred tank) visits, rituals for ancestors."
  },
  {
    "id": 14,
    "position": { "lat": 19.0176, "lng": 72.8562 },
    "title": "Siddhivinayak Temple",
    "short description": "The most famous Ganesha temple in Mumbai, attracting celebrities and devotees alike.",
    "Description": "Siddhivinayak Temple in Prabhadevi, Mumbai, is renowned for fulfilling wishes and vibrant celebrations during Ganesh Chaturthi.",
    "Transportation": {
      "ByAir": "Chhatrapati Shivaji Maharaj International Airport is 15 km away.",
      "ByRoad": "Well connected by Mumbai’s public transport and private taxis."
    },
    "Activities": "Offering prayers, attending morning and evening aarti."
  }
]

export const unique_experiences = [
  {
    id: 1,
    title: "Hot Air Balloon Ride over Lonavala",
    short_description: "A serene hot air balloon journey over the hills of Lonavala.",
    description: "Enjoy a magical sunrise or sunset as you float gently above lush valleys, waterfalls, and hilltops of the Western Ghats.",
    Transportation: {
      ByAir: "Pune Airport is the nearest, about 70 km away.",
      ByRoad: "Easily reachable from Pune and Mumbai via expressways.",
    },
    Activities: "Hot air balloon ride, photography, sightseeing.",
    position: { lat: 18.7481, lng: 73.4072 },
  },
  {
    id: 2,
    title: "Scuba Diving at Tarkarli",
    short_description: "Explore vibrant marine life at Tarkarli beach.",
    description: "Experience scuba diving in the clear waters of the Arabian Sea, with colorful corals and exotic fishes waiting to be discovered.",
    Transportation: {
      ByAir: "Nearest airport is Dabolim (Goa), about 130 km away.",
      ByRoad: "Accessible via road from Mumbai and Pune.",
    },
    Activities: "Scuba diving, snorkeling, beach relaxation.",
    position: { lat: 16.0337, lng: 73.4897 },
  },
  {
    id: 3,
    title: "Paragliding at Kamshet",
    short_description: "Soar like a bird over the Sahyadris.",
    description: "Kamshet is a paragliding paradise offering tandem flights and solo courses against beautiful mountainous backdrops.",
    Transportation: {
      ByAir: "Pune Airport is around 55 km away.",
      ByRoad: "Good connectivity from Pune and Lonavala.",
    },
    Activities: "Paragliding, photography, nature tours.",
    position: { lat: 18.7705, lng: 73.5461 },
  },
  {
    id: 4,
    title: "Camping at Bhandardara",
    short_description: "Lakeside camping under a starry sky.",
    description: "Set up your tents by Arthur Lake and enjoy a peaceful night with bonfires, boating, and breathtaking sunrise views.",
    Transportation: {
      ByAir: "Mumbai Airport is about 170 km away.",
      ByRoad: "Reachable via Igatpuri and Ghoti roadways.",
    },
    Activities: "Camping, boating, stargazing, trekking.",
    position: { lat: 19.5361, lng: 73.7732 },
  },
  {
    id: 5,
    title: "Wildlife Safari at Tadoba",
    short_description: "Get close to the majestic Royal Bengal Tiger.",
    description: "Tadoba Andhari Tiger Reserve offers thrilling safaris through dense forests teeming with tigers, leopards, and exotic birds.",
    Transportation: {
      ByAir: "Nagpur Airport is about 140 km away.",
      ByRoad: "Well connected by road from Nagpur and Chandrapur.",
    },
    Activities: "Wildlife safari, birdwatching, nature photography.",
    position: { lat: 20.2434, lng: 79.3745 },
  },
  {
    id: 6,
    title: "River Rafting at Kolad",
    short_description: "Thrill yourself on the rapids of Kundalika River.",
    description: "Kolad offers exciting white water rafting experiences, perfect for adventure enthusiasts seeking adrenaline rushes.",
    Transportation: {
      ByAir: "Mumbai Airport is around 120 km away.",
      ByRoad: "Well connected from Mumbai and Pune.",
    },
    Activities: "River rafting, kayaking, camping.",
    position: { lat: 18.4321, lng: 73.1864 },
  },
  {
    id: 7,
    title: "Wine Tasting at Sula Vineyards",
    short_description: "Taste exquisite Indian wines in Nashik's vineyards.",
    description: "Enjoy a vineyard tour, wine-making process walkthrough, and a wine-tasting session at India's premier winery.",
    Transportation: {
      ByAir: "Ozar Airport, Nashik, is about 25 km away.",
      ByRoad: "Accessible from Mumbai and Pune via Nashik highway.",
    },
    Activities: "Wine tasting, vineyard tour, fine dining.",
    position: { lat: 19.9448, lng: 73.7345 },
  },
  {
    id: 8,
    title: "Fireflies Festival at Purushwadi",
    short_description: "Witness a magical night lit up by thousands of fireflies.",
    description: "Purushwadi lights up during the pre-monsoon season with millions of fireflies creating a surreal experience in the wilderness.",
    Transportation: {
      ByAir: "Mumbai Airport is about 180 km away.",
      ByRoad: "Reachable via road from Mumbai and Nashik.",
    },
    Activities: "Camping, firefly watching, night treks.",
    position: { lat: 19.4621, lng: 73.7912 },
  },
  {
    id: 9,
    title: "Floating Market at Venice Mall, Pune",
    short_description: "India’s first floating market experience inside a mall.",
    description: "Experience the beauty of Thailand-style floating markets while shopping inside the Venice Mall with boats, canals, and themed cafés.",
    Transportation: {
      ByAir: "Pune Airport is around 20 km away.",
      ByRoad: "Easily accessible by road from any part of Pune city.",
    },
    Activities: "Shopping, photography, dining.",
    position: { lat: 18.5204, lng: 73.8567 },
  },
  {
    id: 10,
    title: "Kayaking at Pawna Lake",
    short_description: "Calm kayaking experience with scenic mountain views.",
    description: "Explore Pawna Lake’s serene waters surrounded by Tikona, Lohagad, and Tung forts while enjoying solo or tandem kayaking.",
    Transportation: {
      ByAir: "Pune Airport is about 60 km away.",
      ByRoad: "Reachable via Lonavala and Kamshet.",
    },
    Activities: "Kayaking, lakeside camping, photography.",
    position: { lat: 18.6626, lng: 73.4845 },
  },
];

export const miscellaneous = [
  {
    id: 1,
    title: "Chikhaldara Hill Station",
    short_description: "The only coffee-growing region in Maharashtra.",
    description: "Located in the Amravati district, Chikhaldara offers cool climate, coffee plantations, wildlife, and beautiful viewpoints like Sunset Point and Hurricane Point.",
    Transportation: {
      ByAir: "Nagpur Airport is the nearest, about 230 km away.",
      ByRoad: "Well connected via NH-53 from Nagpur and Amravati.",
    },
    Activities: "Trekking, sightseeing, coffee tasting.",
    position: { lat: 21.4006, lng: 77.3452 },
  },
  {
    id: 2,
    title: "Lonar Crater Lake",
    short_description: "A mysterious meteorite impact lake.",
    description: "Formed 50,000 years ago by a meteor impact, Lonar Lake is one of the only hyper-velocity impact craters in basaltic rock, featuring unique alkaline and saline water.",
    Transportation: {
      ByAir: "Aurangabad Airport is about 145 km away.",
      ByRoad: "Reachable by road from Aurangabad and Jalna.",
    },
    Activities: "Trekking, nature walks, photography.",
    position: { lat: 19.9763, lng: 76.5111 },
  },
  {
    id: 3,
    title: "Lavasa City",
    short_description: "India’s first planned hill city.",
    description: "Inspired by the Italian town Portofino, Lavasa offers colorful buildings, lakeside promenades, and adventure activities amidst scenic hills.",
    Transportation: {
      ByAir: "Pune Airport is about 67 km away.",
      ByRoad: "Good connectivity from Pune and Mumbai.",
    },
    Activities: "Boating, ziplining, hiking, dining.",
    position: { lat: 18.4057, lng: 73.5030 },
  },
  {
    id: 4,
    title: "Ajanta & Ellora Caves",
    short_description: "Ancient rock-cut Buddhist, Hindu, and Jain monuments.",
    description: "UNESCO World Heritage Sites showcasing India's ancient rock-cut architecture, paintings, and sculptures dating back to 2nd century BCE.",
    Transportation: {
      ByAir: "Aurangabad Airport is about 30 km away.",
      ByRoad: "Well connected via road from Aurangabad city.",
    },
    Activities: "Cave exploration, historical photography, guided tours.",
    position: { lat: 20.5515, lng: 75.7030 },
  },
  {
    id: 5,
    title: "Global Vipassana Pagoda",
    short_description: "World's largest stone dome built without supporting pillars.",
    description: "A symbol of peace and harmony, this stunning pagoda in Mumbai offers meditation retreats and a serene atmosphere overlooking Gorai Creek.",
    Transportation: {
      ByAir: "Mumbai International Airport is about 40 km away.",
      ByRoad: "Accessible via ferry from Gorai or road routes.",
    },
    Activities: "Meditation, sightseeing, spiritual learning.",
    position: { lat: 19.2284, lng: 72.7900 },
  },
  {
    id: 6,
    title: "Kaas Plateau (Valley of Flowers of Maharashtra)",
    short_description: "UNESCO World Natural Heritage site famous for seasonal wildflowers.",
    description: "During late monsoon, the plateau blooms with over 850 species of unique and endangered flowers, creating a mesmerizing landscape.",
    Transportation: {
      ByAir: "Pune Airport is around 140 km away.",
      ByRoad: "Accessible via Satara city (22 km).",
    },
    Activities: "Nature walks, botanical tours, photography.",
    position: { lat: 17.7382, lng: 73.8147 },
  },
  {
    id: 7,
    title: "Bhimashankar Jyotirlinga",
    short_description: "One of the twelve sacred Jyotirlingas of Lord Shiva.",
    description: "Nestled in the Sahyadri hills, Bhimashankar Temple is surrounded by dense forests and is a pilgrimage as well as a trekking destination.",
    Transportation: {
      ByAir: "Pune Airport is about 125 km away.",
      ByRoad: "Good road connectivity from Pune and Mumbai.",
    },
    Activities: "Pilgrimage, trekking, forest walks.",
    position: { lat: 19.0701, lng: 73.5523 },
  },
  {
    id: 8,
    title: "Elephanta Caves",
    short_description: "Ancient rock-cut caves located on Elephanta Island near Mumbai.",
    description: "These caves are famous for their impressive sculptures of Hindu deities, especially the massive Trimurti sculpture of Lord Shiva.",
    Transportation: {
      ByAir: "Mumbai International Airport, then a ferry from Gateway of India.",
      ByRoad: "Reach Gateway of India, Mumbai, and take a ferry ride.",
    },
    Activities: "Historical tours, ferry ride, sightseeing.",
    position: { lat: 18.9634, lng: 72.9310 },
  },
  {
    id: 9,
    title: "Ratangad Fort with Natural Rock Eye",
    short_description: "An ancient fort known for the 'Nedhe' or natural rock hole.",
    description: "Ratangad offers a mix of fort exploration and scenic views, with a unique rock formation that looks like a natural window to the sky.",
    Transportation: {
      ByAir: "Mumbai Airport is around 180 km away.",
      ByRoad: "Accessible via Bhandardara and Igatpuri roads.",
    },
    Activities: "Trekking, fort exploration, camping.",
    position: { lat: 19.5275, lng: 73.7492 },
  },
  {
    id: 10,
    title: "Ganpatipule Beach",
    short_description: "A peaceful beach town with a famous Ganesha temple.",
    description: "Ganpatipule is known for its clean beaches, scenic drives, and 400-year-old Swayambhu (self-originated) Ganpati temple.",
    Transportation: {
      ByAir: "Ratnagiri Airport is about 30 km away.",
      ByRoad: "Well connected via Mumbai-Goa Highway.",
    },
    Activities: "Beach walks, temple visits, sunset watching.",
    position: { lat: 17.1468, lng: 73.2768 },
  },
];
