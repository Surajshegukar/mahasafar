import React from "react";
import { Calendar, MapPin, Clock, Users } from "lucide-react";

export default function ItineraryCard({ itinerary, onClick }) {
  // Handle different formats of itinerary data
  const trip_id = itinerary._id;
  const tripData =
    typeof itinerary === "string"
      ? JSON.parse(itinerary)
      : typeof itinerary.json === "string"
      ? JSON.parse(itinerary.json)
      : itinerary;

  // Format description to be shorter
  const shortDescription = 
    tripData.description && tripData.description.length > 100 
      ? `${tripData.description.slice(0, 100)}...` 
      : tripData.description;

  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      {/* Colorful header band */}
      <div className="h-2 bg-gradient-to-r from-blue-500 to-orange-400"></div>
      
      <div className="p-6">
        {/* Title and Location */}
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-1">{tripData.tripTitle}</h3>
          <div className="flex items-center text-gray-500">
            <MapPin size={16} className="mr-1" />
            <span className="text-sm">{tripData.location}</span>
          </div>
        </div>
        
        {/* Trip stats */}
        <div className="flex flex-wrap gap-4 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar size={16} className="mr-1 text-orange-500" />
            <span className="text-sm">{tripData.duration} {tripData.duration === 1 ? 'Day' : 'Days'}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Users size={16} className="mr-1 text-orange-500" />
            <span className="text-sm">{tripData.people} {tripData.people === 1 ? 'Person' : 'People'}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Clock size={16} className="mr-1 text-orange-500" />
            <span className="text-sm">{tripData.bestTimeToVisit?.month || "Any time"}</span>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-6">{shortDescription}</p>
        
        {/* Budget indicator */}
        <div className="flex justify-between items-center">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white text-orange-500">
              {tripData.budget || "Mid-Range"}
            </span>
          </div>
          
          <button
            className="flex items-center justify-center px-4 py-2 rounded-lg  text-white font-medium text-sm bg-orange-500 hover:bg-white hover:text-orange-500 hover:border-amber-500 hover:border-1  transition-all duration-300"
            onClick={()=>{
              window.location.href = `/generate-itinerary/${trip_id}`
            }}
          >
            View Itinerary
          </button>
        </div>
      </div>
    </div>
  );
}