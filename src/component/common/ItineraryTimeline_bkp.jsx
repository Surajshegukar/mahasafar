import { useState } from 'react';
import { ChevronDown, ChevronUp, MapPin, Clock, Coffee, Utensils, Compass, Bed, Activity } from 'lucide-react';

export default function ItineraryTimeline({ tripData, expandedSection }) {
  const [expandedDay, setExpandedDay] = useState(null);

  const toggleDay = (dayNumber) => {
    setExpandedDay(expandedDay === dayNumber ? null : dayNumber);
  };

  const calculateTotalCost = () => {
    if (!tripData.dailyItinerary) return 0;
    
    return tripData.dailyItinerary.reduce((total, day) => {
      if (!day.estimatedCost) return total;
      
      return total + 
        (day.estimatedCost.accommodation || 0) +
        (day.estimatedCost.food || 0) +
        (day.estimatedCost.activities || 0) +
        (day.estimatedCost.transport || 0);
    }, 0);
  };

  const getActivityIcon = (activity) => {
    const lowerActivity = activity.toLowerCase();
    
    if (lowerActivity.includes('check') || lowerActivity.includes('hotel') || lowerActivity.includes('accommodation')) 
      return <Bed size={16} className="text-orange-500" />;
    if (lowerActivity.includes('breakfast') || lowerActivity.includes('lunch') || lowerActivity.includes('dinner') || lowerActivity.includes('restaurant'))
      return <Utensils size={16} className="text-green-500" />;
    if (lowerActivity.includes('drive') || lowerActivity.includes('travel') || lowerActivity.includes('journey'))
      return <Compass size={16} className="text-purple-500" />;
    if (lowerActivity.includes('visit') || lowerActivity.includes('explore'))
      return <MapPin size={16} className="text-red-500" />;
    if (lowerActivity.includes('coffee') || lowerActivity.includes('tea') || lowerActivity.includes('break'))
      return <Coffee size={16} className="text-amber-500" />;
    
    return <Activity size={16} className="text-gray-500" />;
  };

  const renderActivity = (activity, index) => {
    return (
      <li key={index} className="mb-2 flex items-start">
        <div className="mr-2 mt-1">
          {getActivityIcon(activity)}
        </div>
        <span>{activity}</span>
      </li>
    );
  };

  if (expandedSection !== "itinerary" || !tripData.dailyItinerary) {
    return null;
  }

  return (
    <div className="px-6 py-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium text-gray-800">
          Daily Itinerary
        </h2>
        {/* {calculateTotalCost() > 0 && (
          <div className="text-sm bg-blue-50 text-orange-700 px-3 py-1 rounded-full font-medium">
            Total estimate: ₹{calculateTotalCost().toLocaleString()}
          </div>
        )} */}
      </div>

      <div className="relative">
        {/* Timeline connector */}
        <div className="absolute left-6 top-8 bottom-0 w-0.5 bg-gray-200 z-0"></div>

        {tripData.dailyItinerary.map((day, index) => (
          <div
            key={day.day}
            className="relative mb-6 z-10"
          >
            <div className="flex">
              {/* Timeline dot */}
              <div className="flex-shrink-0 relative">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  expandedDay === day.day 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white text-orange-500 border-2 border-blue-500'
                } z-10`}>
                  <span className="font-bold text-sm">D{day.day}</span>
                </div>
              </div>

              {/* Content card */}
              <div className="ml-4 flex-grow">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-300">
                  <div
                    className={`flex justify-between items-center p-4 cursor-pointer transition-colors ${
                      expandedDay === day.day ? 'bg-gray-50' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => toggleDay(day.day)}
                  >
                    <div className="flex-grow">
                      
                      <h3 className="font-medium text-gray-800">{day.title}</h3>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                        {day.description.substring(0, 80)}...
                      </p>
                    </div>
                    <div className="flex items-center ml-4">
                      {/* {day.estimatedCost && (
                        <div className="text-sm text-gray-500 mr-3 bg-gray-100 px-2 py-1 rounded-md">
                          ₹{(
                            (day.estimatedCost.accommodation || 0) +
                            (day.estimatedCost.food || 0) +
                            (day.estimatedCost.activities || 0) +
                            (day.estimatedCost.transport || 0)
                          ).toLocaleString()}
                        </div>
                      )} */}
                      <div className="text-gray-400">
                        {/* {expandedDay === day.day ? (
                          <ChevronUp size={20} />
                        ) : (
                          <ChevronDown size={20} />
                        )} */}
                      </div>
                    </div>
                  </div>

                  {(
                    <div className="p-4 bg-white border-t border-gray-100">
                      <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                        {day.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-medium text-sm mb-3 flex items-center">
                          <Clock size={16} className="mr-2 text-orange-500" />
                          <span>Daily Schedule</span>
                        </h4>
                        <ul className="space-y-1 text-sm text-gray-700 pl-8">
                          {day.activities.map((activity, index) =>
                            renderActivity(activity, index)
                          )}
                        </ul>
                      </div>

                      {/* Food Suggestions if available */}
                      {day.foodSuggestions && day.foodSuggestions.length > 0 && (
                        <div className="mb-6">
                          <h4 className="font-medium text-sm mb-3 flex items-center">
                            <Utensils size={16} className="mr-2 text-green-500" />
                            <span>Food Suggestions</span>
                          </h4>
                          <ul className="space-y-1 text-sm text-gray-700 pl-8">
                            {day.foodSuggestions.map((food, index) => (
                              <li key={index} className="mb-1">
                                {food}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* {day.estimatedCost && (
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-medium text-sm mb-3">
                            Estimated Costs:
                          </h4>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {day.estimatedCost.accommodation !== undefined && (
                              <div className="bg-white p-3 rounded-md shadow-sm">
                                <div className="flex items-center text-gray-500 mb-1">
                                  <Bed size={14} className="mr-1" />
                                  <span className="text-xs">Accommodation</span>
                                </div>
                                <span className="font-medium">₹{day.estimatedCost.accommodation.toLocaleString()}</span>
                              </div>
                            )}
                            {day.estimatedCost.food !== undefined && (
                              <div className="bg-white p-3 rounded-md shadow-sm">
                                <div className="flex items-center text-gray-500 mb-1">
                                  <Utensils size={14} className="mr-1" />
                                  <span className="text-xs">Food</span>
                                </div>
                                <span className="font-medium">₹{day.estimatedCost.food.toLocaleString()}</span>
                              </div>
                            )}
                            {day.estimatedCost.activities !== undefined && (
                              <div className="bg-white p-3 rounded-md shadow-sm">
                                <div className="flex items-center text-gray-500 mb-1">
                                  <Activity size={14} className="mr-1" />
                                  <span className="text-xs">Activities</span>
                                </div>
                                <span className="font-medium">₹{day.estimatedCost.activities.toLocaleString()}</span>
                              </div>
                            )}
                            {day.estimatedCost.transport !== undefined && (
                              <div className="bg-white p-3 rounded-md shadow-sm">
                                <div className="flex items-center text-gray-500 mb-1">
                                  <Compass size={14} className="mr-1" />
                                  <span className="text-xs">Transport</span>
                                </div>
                                <span className="font-medium">₹{day.estimatedCost.transport.toLocaleString()}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      )} */}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile timeline connector, visible on smaller screens */}
            <div className="lg:hidden absolute left-6 top-12 bottom-0 w-0.5 bg-gray-200 z-0"></div>
          </div>
        ))}
      </div>
    </div>
  );
}