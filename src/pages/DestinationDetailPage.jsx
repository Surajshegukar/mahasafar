import { useState } from 'react';
import { ChevronLeft, ChevronRight, Cloud, Thermometer, Car, Plane } from 'lucide-react';
import { forts, beaches, temples, unique_experiences, miscellaneous } from "../api/data"; // Import the fort, beach, and temple data
import { useParams } from 'react-router-dom';

export default function DestinationDetailPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentDishIndex, setCurrentDishIndex] = useState(0);
  const { type, id } = useParams();

  let selectedArray = null;

  if (type === "forts") {
    selectedArray = forts.find((fort) => fort.id === parseInt(id));
  } else if (type === "beaches") {
    selectedArray = beaches.find((beach) => beach.id === parseInt(id));
  } else if (type === "temples") {
    selectedArray = temples.find((temple) => temple.id === parseInt(id));
  }
  else if (type === "unique_experiences") {
    selectedArray = unique_experiences.find((ex) => ex.id === parseInt(id));
  }
  else if (type === "miscellaneous") {
    selectedArray = miscellaneous.find((mis) => mis.id === parseInt(id));
  }

  if (!selectedArray) {
    return <div className="max-w-6xl mx-auto px-4 py-6">Loading destination details...</div>;
  }

  // Placeholder images for demonstration
  const images = [
    `/images/${type}/${selectedArray.title.replaceAll(' ', '_')}/000001.jpg`,
    `/images/${type}/${selectedArray.title.replaceAll(' ', '_')}/000002.jpg`,
    `/images/${type}/${selectedArray.title.replaceAll(' ', '_')}/000003.jpg`,
    `/images/${type}/${selectedArray.title.replaceAll(' ', '_')}/000004.jpg`,
    `/images/${type}/${selectedArray.title.replaceAll(' ', '_')}/000005.jpg`,
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Activities data
  const activities = selectedArray.activities.split(
    ","
  ).map((activity) => activity.trim() // Trim whitespace
  ).filter((activity) => activity !== "" // Filter out empty strings
  ) || ["Trekking", "Historical sightseeing", "Photography"];

  // Shopping items
  const shoppingItems = [
    { name: "Local Handicraft", image: "/api/placeholder/300/200" },
    { name: "Traditional Artifacts", image: "/api/placeholder/300/200" },
    { name: "Historical Souvenirs", image: "/api/placeholder/300/200" },
  ];

  // Local dishes
  const localDishes = [
    { name: "Rice and Curry", image: "/api/placeholder/300/200" },
    { name: "Fish Curry", image: "/api/placeholder/300/200" },
    { name: "Thali", image: "/api/placeholder/300/200" },
    { name: "Sol Kadhi", image: "/api/placeholder/300/200" },
    { name: "Modak", image: "/api/placeholder/300/200" },
  ];

  const nextDish = () => {
    setCurrentDishIndex((prevIndex) => (prevIndex + 1) % localDishes.length);
  };

  const prevDish = () => {
    setCurrentDishIndex((prevIndex) => (prevIndex - 1 + localDishes.length) % localDishes.length);
  };

  // Calculate visible dishes for carousel (show 4 at a time)
  const visibleDishes = [];
  for (let i = 0; i < 4; i++) {
    const index = (currentDishIndex + i) % localDishes.length;
    visibleDishes.push(localDishes[index]);
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Navigation */}
      <div className="text-sm text-gray-600 mb-4">
        <span className="hover:text-orange-500 cursor-pointer">Home</span>
        <span className="mx-2">›</span>
        <span className="hover:text-orange-500 cursor-pointer">Destinations</span>
        <span className="mx-2">›</span>
        <span className="hover:text-orange-500 cursor-pointer">{type}</span>
        <span className="mx-2">›</span>
        <span className="text-orange-500">{selectedArray.title}</span>
      </div>

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-4xl font-bold text-orange-500">{selectedArray.title.toUpperCase()}</h1>
        <p className="text-gray-700">{selectedArray.short_description}</p>
      </div>

      {/* Main Image Carousel */}
      <div className="relative mb-8 rounded-lg overflow-hidden">
        <div className="relative h-96 bg-gray-200">
          <img
            src={images[currentImageIndex]}
            alt={`${selectedArray.title} view`}
            className="w-full h-full object-cover"
          />
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Section */}
        <div className="md:w-2/3">
          <h2 className="text-2xl font-semibold mb-4">About {selectedArray.title}</h2>
          <p className="text-gray-700 mb-8">{selectedArray.description}</p>

          {/* Gallery Section */}
          <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
            {images.map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt={`${selectedArray.title} gallery ${index + 1}`}
                  className="w-full h-48 object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Info Panel */}
        <div className="md:w-1/3">
          <div className="mb-4">
            <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded w-full">
              PLAN YOUR VISIT
            </button>
          </div>

          {/* Transportation */}
          <div className="border-b border-gray-200 py-4 flex items-center">
            <div className="bg-gray-100 rounded-full p-3 mr-4">
              <Plane className="text-gray-500" size={24} />
            </div>
            <div>
              <div className="font-bold">By Air</div>
              <div className="text-gray-600">{selectedArray.transportation?.byAir || "N/A"}</div>
            </div>
          </div>
          <div className="border-b border-gray-200 py-4 flex items-center">
            <div className="bg-gray-100 rounded-full p-3 mr-4">
              <Car className="text-gray-500" size={24} />
            </div>
            <div>
              <div className="font-bold">By Road</div>
              <div className="text-gray-600">{selectedArray.transportation?.byRoad || "N/A"}</div>
            </div>
          </div>

          {/* Location */}
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Location</h3>
            <div className="bg-gray-200 p-4 rounded text-center">
              <p>Latitude: {selectedArray.position?.lat || "N/A"}</p>
              <p>Longitude: {selectedArray.position?.lng || "N/A"}</p>
            </div>
          </div>
        </div>
      </div>
        {/* New Section: Activities */}
        <div className="mb-12 relative mt-8">
        <div className="bg-orange-600 text-white rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Text content */}
            <div className="p-8 md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Activities</h2>
              <p className="mb-6">
                Get the best out of your visit with these activities at {selectedArray.title} and enjoy a worthwhile experience.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {activities.map((activity, index) => (
                  <div 
                    key={index} 
                    className="border-l-2 border-white pl-3 py-1"
                  >
                    {activity}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Image section */}
            <div className="md:w-1/2">
              <img 
                src={`/images/${type}/${selectedArray.title.replaceAll(" ","_")}/000002.jpg`}
                alt={`${selectedArray.title} Activities`} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Decorative dots */}
        <div className="absolute right-0 top-0 h-full">
          <div className="flex flex-col items-center h-full justify-end">
            {Array(8).fill(0).map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-orange-300 my-1"></div>
            ))}
          </div>
        </div>
      </div>
   
      
      
    </div>
  );
}