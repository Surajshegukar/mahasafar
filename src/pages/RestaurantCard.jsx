import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, MapPin, Clock, Phone, ExternalLink } from 'lucide-react';

export default function RestaurantCard({ restaurant }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Handle cases where restaurant might not have all properties
  const images = restaurant.heroImgUrl ? [restaurant.heroImgUrl] : [];
  if (restaurant.heroImgUrl && restaurant.thumbnailUrl && restaurant.heroImgUrl !== restaurant.thumbnailUrl) {
    images.push(restaurant.thumbnailUrl);
  }
  
  // Add placeholder if no images
  if (images.length === 0) {
    images.push("/api/placeholder/400/300");
  }
  
  // Go to next image
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  // Go to previous image
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  
  // Rating stars
  const renderRating = (rating) => {
    const ratingValue = parseFloat(rating) || 0;
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i}
            size={16}
            className={i < Math.floor(ratingValue) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
          />
        ))}
        <span className="ml-2 text-sm font-medium">{ratingValue.toFixed(1)}</span>
      </div>
    );
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md mx-auto my-4">
      {/* Image Slider */}
      <div className="relative h-64">
        <img 
          src={images[currentImageIndex] || "/api/placeholder/400/300"} 
          alt={restaurant.name || "Restaurant"} 
          className="w-full h-full object-cover"
        />
        
        {/* Navigation arrows - only show if multiple images */}
        {images.length > 1 && (
          <>
            <button 
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 p-2 rounded-full"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 p-2 rounded-full"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
            
            {/* Image counter */}
            <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded-full">
              {currentImageIndex + 1}/{images.length}
            </div>
          </>
        )}
      </div>
      
      {/* Restaurant Info */}
      <div className="p-4">
        <h3 className="text-xl font-bold truncate">{restaurant.name || "Unknown Restaurant"}</h3>
        
        <div className="flex items-center mt-1">
          {restaurant.rating && renderRating(restaurant.rating)}
          {restaurant.numReviews && (
            <span className="text-gray-500 text-sm ml-2">({restaurant.numReviews} reviews)</span>
          )}
        </div>
        
        {restaurant.currentOpenStatusText && (
          <div className="flex items-center mt-2 text-sm">
            <Clock size={14} className="mr-1" />
            <span>{restaurant.currentOpenStatusText}</span>
          </div>
        )}
        
        {restaurant.priceTag && (
          <div className="mt-1 text-sm text-gray-700">
            {restaurant.priceTag} • {restaurant.establishmentTypeAndCuisineTagsString || "Restaurant"}
          </div>
        )}
        
        {restaurant.address && (
          <div className="flex items-start mt-2 text-sm">
            <MapPin size={14} className="mr-1 mt-1 flex-shrink-0" />
            <span className="text-gray-700">{restaurant.address}</span>
          </div>
        )}
        
        {restaurant.phone && (
          <div className="flex items-center mt-2 text-sm">
            <Phone size={14} className="mr-1" />
            <span className="text-gray-700">{restaurant.phone}</span>
          </div>
        )}
        
        <div className="flex justify-between items-center mt-4">
          {restaurant.webUrl && (
            <a 
              href={restaurant.webUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-orange-600 text-sm font-medium hover:underline"
            >
              <ExternalLink size={14} className="mr-1" />
              <span>Visit Website</span>
            </a>
          )}
          
          {restaurant.rankingDetailsString && (
            <span className="text-sm text-green-700 font-medium">
              {restaurant.rankingDetailsString}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}