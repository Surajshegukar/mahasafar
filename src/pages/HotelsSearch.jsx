import { useState, useEffect } from 'react';
import RestaurantService from '../services/RestaurantService';
import RestaurantSlider from './RestaurantSlider';
import { Search, Loader } from 'lucide-react';

export default function HotelSearch() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [restaurantData, setRestaurantData] = useState(null);
  const [locationId, setLocationId] = useState('304554'); // Default to New York City
  
  // Load restaurant data
  const loadRestaurants = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await RestaurantService.getRestaurantsByLocation(locationId);
      setRestaurantData(data);
    } catch (err) {
      setError('Failed to load restaurant data. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  
  // Load data on component mount and when locationId changes
  useEffect(() => {
    loadRestaurants();
  }, [locationId]);
  
  // Handle location ID changes
  const handleLocationChange = (e) => {
    setLocationId(e.target.value);
  };
  
  // Handle search button click
  const handleSearch = () => {
    loadRestaurants();
  };
  
  // Process restaurant data for rendering
  const processedRestaurants = restaurantData?.data?.data || [];
  
  // Group restaurants by category if available
  const groupedRestaurants = {};
  
  // If we have cuisine or establishment type info, group by it
  if (processedRestaurants.length > 0) {
    processedRestaurants.forEach(restaurant => {
      if (restaurant.establishmentTypeAndCuisineTagsString) {
        const types = restaurant.establishmentTypeAndCuisineTagsString.split(', ');
        const mainType = types[0] || 'Other';
        
        if (!groupedRestaurants[mainType]) {
          groupedRestaurants[mainType] = [];
        }
        groupedRestaurants[mainType].push(restaurant);
      } else {
        if (!groupedRestaurants['All Restaurants']) {
          groupedRestaurants['All Restaurants'] = [];
        }
        groupedRestaurants['All Restaurants'].push(restaurant);
      }
    });
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">Restaurant Finder</h1>
        
        <div className="flex w-full md:w-auto">
          <div className="relative flex-grow">
            <input
              type="text"
              value={locationId}
              onChange={handleLocationChange}
              placeholder="Enter Location ID (e.g., 304554 for NYC)"
              className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Search size={20} />
          </button>
        </div>
      </div>
      
      {/* Loading state */}
      {loading && (
        <div className="flex justify-center items-center py-12">
          <Loader size={32} className="animate-spin text-orange-500" />
          <span className="ml-2 text-lg">Loading restaurants...</span>
        </div>
      )}
      
      {/* Error state */}
      {error && !loading && (
        <div className="bg-red-50 text-red-700 p-4 rounded-md mb-6">
          <p>{error}</p>
          <button 
            onClick={loadRestaurants} 
            className="mt-2 text-sm font-medium underline"
          >
            Try again
          </button>
        </div>
      )}
      
      {/* No results state */}
      {!loading && !error && processedRestaurants.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg">No restaurants found for this location.</p>
          <p className="mt-2">Try a different location ID or check your connection.</p>
        </div>
      )}
      
      {/* Results */}
      {!loading && !error && processedRestaurants.length > 0 && (
        <div className="space-y-12">
          {/* Display all restaurants */}
          <RestaurantSlider restaurants={processedRestaurants} />
          
          {/* Display grouped restaurants by cuisine type */}
          {Object.entries(groupedRestaurants).map(([category, restaurants]) => (
            <div key={category} className="mt-12">
              <h2 className="text-2xl font-bold mb-6">{category}</h2>
              <RestaurantSlider restaurants={restaurants} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}