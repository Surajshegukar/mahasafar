import React from "react";
import { MapPin, Clock, Phone, Star, DollarSign, Utensils } from "lucide-react";

export default function PlacesSection({ placeData }) {
  // Function to convert minutes to readable time format (e.g., 390 -> "6:30 AM")
  const formatTime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const period = hours >= 12 ? "PM" : "AM";
    const displayHours = hours % 12 || 12;
    return `${displayHours}:${mins.toString().padStart(2, "0")} ${period}`;
  };

  // Function to render price level with dollar signs
  const renderPriceLevel = (priceLevel) => {
    if (!priceLevel) return null;
    
    const dollarSigns = priceLevel.length;
    return (
      <div className="flex items-center text-gray-600">
        {Array(4).fill().map((_, i) => (
          <DollarSign 
            key={i} 
            size={14} 
            className={i < dollarSigns ? "text-green-600" : "text-gray-300"} 
          />
        ))}
      </div>
    );
  };

  // Check if we have valid place data
  if (!placeData || !placeData.name) {
    return null;
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-6">
      <div className="flex flex-col md:flex-row">
        {/* Image section */}
        {placeData.photo && (
          <div className="w-full md:w-1/3 h-48 md:h-auto relative">
            <img
              src={placeData.photo.images.original?.url || placeData.photo.images.large?.url}
              alt={placeData.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2 bg-white rounded-lg px-2 py-1 flex items-center shadow-md">
              <Star size={16} className="text-yellow-400 mr-1" fill="#FBBF24" />
              <span className="font-semibold">{placeData.rating}</span>
              <span className="text-xs text-gray-500 ml-1">({placeData.num_reviews})</span>
            </div>
          </div>
        )}

        {/* Content section */}
        <div className="flex-1 p-4 md:p-6">
          <div className="flex justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-800">{placeData.name}</h3>
            {renderPriceLevel(placeData.price_level)}
          </div>

          <div className="flex items-center text-gray-600 mb-3">
            <MapPin size={16} className="mr-1 text-orange-500" />
            <span className="text-sm">{placeData.address_obj?.city || placeData.location_string}, {placeData.address_obj?.street1}</span>
          </div>

          {placeData.description && (
            <p className="text-gray-600 text-sm mb-4">{placeData.description.length > 120 ? placeData.description.substring(0, 120) + '...' : placeData.description}</p>
          )}

          {/* Tags row */}
          <div className="flex flex-wrap gap-2 mb-4">
            {placeData.cuisine && placeData.cuisine.map((cuisine, index) => (
              <span key={index} className="px-2 py-1 rounded-full bg-blue-50 text-orange-600 text-xs font-medium flex items-center">
                <Utensils size={12} className="mr-1" />
                {cuisine.name}
              </span>
            ))}
            
            {placeData.dietary_restrictions && placeData.dietary_restrictions.map((diet, index) => (
              <span key={index} className="px-2 py-1 rounded-full bg-green-50 text-green-600 text-xs font-medium">
                {diet.name}
              </span>
            ))}
          </div>

          {/* Hours and contact */}
          <div className="flex flex-col sm:flex-row justify-between pt-3 border-t border-gray-100">
            <div className="flex items-center text-gray-600 mb-2 sm:mb-0">
              <Clock size={16} className="mr-1 text-orange-500" />
              <span className="text-sm">
                {placeData.open_now_text || (placeData.hours?.week_ranges?.[0]?.[0] && 
                  `${formatTime(placeData.hours.week_ranges[0][0].open_time)} - ${formatTime(placeData.hours.week_ranges[0][0].close_time)}`)}
              </span>
            </div>
            
            {placeData.phone && (
              <div className="flex items-center text-gray-600">
                <Phone size={16} className="mr-1 text-orange-500" />
                <span className="text-sm">{placeData.phone}</span>
              </div>
            )}
          </div>
          
          {/* Action button */}
          <div className="mt-4 flex justify-end">
            <a 
              href={placeData.web_url || placeData.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-orange-600 hover:text-orange-800 transition-colors"
            >
              View Details →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}