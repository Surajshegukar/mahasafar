import { useState, useEffect, useRef } from "react";
import {
  MapPin,
  Clock,
  Coffee,
  Utensils,
  Compass,
  Bed,
  Activity,
} from "lucide-react";
import { fetchSingleImageByLocation } from "../../services/fetchSingleImageByLocation";
import { fetchSingleImageByCoordinates } from "../../services/fetchImagesByCoordinates";

export default function ItineraryTimeline({
  tripData,
  expandedSection,
  setActiveDay,
  activeDay,
}) {
  const dayRefs = useRef({});

  const calculateTotalCost = () => {
    if (!tripData.dailyItinerary) return 0;
    return tripData.dailyItinerary.reduce((total, day) => {
      if (!day.estimatedCost) return total;
      return (
        total +
        (day.estimatedCost.accommodation || 0) +
        (day.estimatedCost.food || 0) +
        (day.estimatedCost.activities || 0) +
        (day.estimatedCost.transport || 0)
      );
    }, 0);
  };

  const getActivityIcon = (activity) => {
    const lowerActivity = activity.toLowerCase();
    if (
      lowerActivity.includes("check") ||
      lowerActivity.includes("hotel") ||
      lowerActivity.includes("accommodation")
    )
      return <Bed size={16} className="text-orange-500" />;
    if (
      lowerActivity.includes("breakfast") ||
      lowerActivity.includes("lunch") ||
      lowerActivity.includes("dinner") ||
      lowerActivity.includes("restaurant")
    )
      return <Utensils size={16} className="text-green-500" />;
    if (
      lowerActivity.includes("drive") ||
      lowerActivity.includes("travel") ||
      lowerActivity.includes("journey")
    )
      return <Compass size={16} className="text-purple-500" />;
    if (lowerActivity.includes("visit") || lowerActivity.includes("explore"))
      return <MapPin size={16} className="text-red-500" />;
    if (
      lowerActivity.includes("coffee") ||
      lowerActivity.includes("tea") ||
      lowerActivity.includes("break")
    )
      return <Coffee size={16} className="text-amber-500" />;

    return <Activity size={16} className="text-gray-500" />;
  };

  const renderActivity = (activity, index) => {
    return (
      <li key={index} className="mb-2 flex items-start">
        <div className="mr-2 mt-1">{getActivityIcon(activity)}</div>
        <span>{activity}</span>
      </li>
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!tripData.dailyItinerary) return;

      const dayPositions = tripData.dailyItinerary
        .map((day) => {
          const el = dayRefs.current[day.day];
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return { day: day.day, top: rect.top };
        })
        .filter(Boolean);

      const middle = window.innerHeight / 2;
      let closestDay = null;
      let minDistance = Infinity;

      for (const pos of dayPositions) {
        const distance = Math.abs(pos.top - middle);
        if (distance < minDistance) {
          minDistance = distance;
          closestDay = pos.day;
        }
      }

      // Debug log to see what day is closest
      console.log("Closest Day to Middle:", closestDay);

      if (closestDay !== null) {
        setActiveDay(closestDay); // Ensure this updates the state
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [tripData, setActiveDay]);

  if (expandedSection !== "itinerary" || !tripData.dailyItinerary) {
    return null;
  }

  return (
    <div className="px-6 py-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium text-gray-800">Daily Itinerary</h2>
      </div>

      <div className="relative">
      <div className="absolute left-6 top-8 bottom-0 w-0.5 bg-gray-200 z-0"></div>

      {tripData.dailyItinerary.map((day, index) => {
        // Move hooks outside of the map function
        const [imageUrl, setImageUrl] = useState("");

        useEffect(() => {
          async function fetchImage() {
            try {
              // Replace this with your actual API call
              const url = await fetchSingleImageByLocation(
                day.geoCoordinates.placeName,1
      
              );
              setImageUrl(url.image_urls[0] || "/no-image.jpg"); // Fallback to a placeholder image
            } catch (error) {
              console.error("Error fetching image:", error);
              setImageUrl("/no-image.jpg"); // Fallback to a placeholder image
            }
          }
          fetchImage();
          console.log(imageUrl);
        }, [day.geoCoordinates.placeName]);

        return (
          <div
            key={day.day}
            ref={(el) => (dayRefs.current[day.day] = el)}
            className="relative mb-6 z-10"
          >
            <div className="flex">
              {/* Timeline dot */}
              <div className="flex-shrink-0 relative">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    activeDay === day.day
                      ? "bg-orange-500 text-white"
                      : "bg-white text-orange-500 border-2 border-blue-500"
                  } z-10`}
                >
                  <span className="font-bold text-sm">D{day.day}</span>
                </div>
              </div>

              {/* Content card */}
              <div className="ml-4 flex-grow">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="flex justify-between items-center p-4">
                    <div className="flex-grow">
                      <h3 className="font-medium text-gray-800">{day.title}</h3>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                        {day.description.substring(0, 80)}...
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-white border-t border-gray-100">
                    <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                      {day.description}
                    </p>

                    <div className="w-full h-full flex">
                      <div className="mb-6 w-1/2">
                        <h4 className="font-medium text-sm mb-3 flex items-center">
                          <Clock size={16} className="mr-2 text-orange-500" />
                          <span>Daily Schedule</span>
                        </h4>
                        <ul className="space-y-1 text-sm text-gray-700 pl-8">
                          {day.activities.map((activity, index) => (
                            <li key={index} className="mb-1">
                              {activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mb-6 w-1/2">
                        <img
                          src={imageUrl}
                          alt={`Image for ${day.title}`}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>

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
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:hidden absolute left-6 top-12 bottom-0 w-0.5 bg-gray-200 z-0"></div>
          </div>
        );
      })}
    </div>
    </div>
          
      
    
  );
}
