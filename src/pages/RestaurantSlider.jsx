import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import RestaurantCard from './RestaurantCard';

export default function RestaurantSlider({ restaurants }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const sliderRef = useRef(null);
  
  // Scroll left
  const scrollLeft = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.firstChild?.offsetWidth + 16; // card width + margin
      const newPosition = Math.max(scrollPosition - cardWidth, 0);
      setScrollPosition(newPosition);
      sliderRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };
  
  // Scroll right
  const scrollRight = () => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.firstChild?.offsetWidth + 16; // card width + margin
      const maxScroll = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
      const newPosition = Math.min(scrollPosition + cardWidth, maxScroll);
      setScrollPosition(newPosition);
      sliderRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };
  
  // Handle scroll events to update the scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        setScrollPosition(sliderRef.current.scrollLeft);
      }
    };
    
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener('scroll', handleScroll);
      return () => slider.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  // Check if we have restaurants to display
  if (!restaurants || restaurants.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No restaurants found. Try another location.
      </div>
    );
  }
  
  return (
    <div className="relative w-full py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Restaurants Near You</h2>
        <div className="flex space-x-2">
          <button 
            onClick={scrollLeft}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={scrollRight}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div 
        ref={sliderRef}
        className="flex overflow-x-auto scrollbar-hide pb-6 gap-4 snap-x"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {restaurants.map((restaurant, index) => (
          <div key={restaurant.restaurantsId || index} className="flex-shrink-0 w-80 snap-start">
            <RestaurantCard restaurant={restaurant} />
          </div>
        ))}
      </div>
    </div>
  );
}