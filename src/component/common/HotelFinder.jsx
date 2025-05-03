import { useState, useEffect } from 'react';
import HotelSlider from './HotelSlider';
import { fetchHotelsService } from '../../services/fetchHotelsService';

// Main component that fetches hotels and passes them to the CardSlider
export default function HotelFinder({ latitude = 40.730610, longitude = -73.935242 }) {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Get today and tomorrow's dates for check-in/check-out
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  
  // Format dates as YYYY-MM-DD
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const checkInDate = formatDate(today);
  const checkOutDate = formatDate(tomorrow);

  // Fetch hotels using the API when coordinates change
  useEffect(() => {
    const fetchHotels = async () => {
      setLoading(true);
      try {
        const response = await fetchHotelsService(
          latitude, 
          longitude,
          checkInDate,
          checkOutDate
        );
        
        setHotels(response.data.data)
        setLoading(false);
      } catch (err) {
        console.error('Error fetching hotels:', err);
        setError('Failed to fetch hotels. Please try again later.');
        setLoading(false);
      }
    };

    fetchHotels();
  }, [latitude, longitude, checkInDate, checkOutDate]);

  return (
    <div className="p-4 max-w-6xl mx-auto"> 
      {/* Loading state */}
      {loading && (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      )}
      
      {/* Error state */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      {/* Show CardSlider with hotels */}
      {!loading && hotels.length > 0 && (
        <HotelSlider
          attractions={hotels} 
          title={`Hotels in ${hotels[0]?.location_string || 'This Area'}`}
        />
      )}
      
      {/* No results state */}
      {!loading && !error && hotels.length === 0 && (
        <div className="text-center py-10 bg-gray-50 rounded-lg">
          <p className="text-gray-600">No hotels found in this area. Try a different location.</p>
        </div>
      )}
    </div>
  );
}

