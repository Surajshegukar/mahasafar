import { useState } from "react";
import {
  Heart,
  Share,
  MapPin,
  ChevronDown,
  ChevronUp,
  Calendar,
  Coffee,
  Car,
} from "lucide-react";
import { FetchDetails } from "../services/TravelAdvisor";
import DynamicDisplay from "./DynamicDisplay";
import CardSlider from "../component/common/CardSlider";
import ItineraryTimeline from "../component/common/ItineraryTimeline";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Gallery from "../component/common/Gallary";

export default function DynamicItinerary({
  itineraryData = null,
  isLoading = false,
  error = null,
  searchQuery = "",
  TraveAdvisor = null,
  images = [],

}) {
  const [expandedDay, setExpandedDay] = useState(null);
  const [expandedSection, setExpandedSection] = useState("itinerary"); // 'itinerary', 'accommodation', 'tips', 'cuisine'

  
  L.Icon.Default.mergeOptions({
    iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
    shadowSize: [41, 41],
  });
  // Handle loading state
  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto my-3 bg-white rounded-lg p-8 text-center">
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
        <p className="mt-4 text-gray-600">Loading itinerary...</p>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="max-w-7xl mx-auto my-3 bg-white rounded-lg p-8">
        <h2 className="text-xl font-medium text-red-600 mb-4">
          Error: {error}
        </h2>
        <p className="text-gray-700">
          Unable to load the itinerary. Please try again later.
        </p>
      </div>
    );
  }

  // Handle no data state
  if (!itineraryData) {
    return (
      <div className="max-w-7xl mx-auto my-3 bg-white rounded-lg p-8">
        <h2 className="text-xl font-medium text-gray-800 mb-4">
          No itinerary found
        </h2>
        <p className="text-gray-700">
          The requested itinerary could not be found.
        </p>
      </div>
    );
  }

  // Parse the JSON if it's a string
  const tripData =
    typeof itineraryData === "string"
      ? JSON.parse(itineraryData)
      : typeof itineraryData.json === "string"
      ? JSON.parse(itineraryData.json)
      : itineraryData;

      const cord = {
        latitude : tripData.geoCoordinates.latitude,
        longitude:tripData.geoCoordinates.longitude
      }

      const extractedDays = tripData.dailyItinerary.map(day => ({
        day: day.day,
        title: day.title,
        geoCoordinates: day.geoCoordinates
      }));
    

  const toggleDay = (dayNumber) => {
    if (expandedDay === dayNumber) {
      setExpandedDay(null);
    } else {
      setExpandedDay(dayNumber);
    }
  };

  const toggleSection = (section) => {
    setExpandedSection(section);
  };

  // Helper function to calculate total trip cost
  const calculateTotalCost = () => {
    if (!tripData.dailyItinerary) return 0;

    return tripData.dailyItinerary.reduce((total, day) => {
      if (!day.estimatedCost) return total;

      const dayTotal =
        (day.estimatedCost.accommodation || 0) +
        (day.estimatedCost.food || 0) +
        (day.estimatedCost.activities || 0) +
        (day.estimatedCost.transport || 0);
      return total + dayTotal;
    }, 0);
  };

  function getRandomNumber() {
    return Math.floor(Math.random() * images.length); // 21 ensures the range includes 20
  }

  // Helper function to render activity (which might be a string or an object)
  const renderActivity = (activity, index) => {
    // Check if activity is an object or a simple string
    if (typeof activity === "object" && activity !== null) {
      return (
        <li key={index} className="mb-3">
          <div className="font-medium">{activity.activity}</div>
          {activity.details && (
            <div className="text-sm text-gray-600 mt-1">{activity.details}</div>
          )}
          {activity.instagramTip && (
            <div className="mt-1 text-sm text-pink-600 italic">
              <span className="font-medium">📸 Instagram Tip:</span>{" "}
              {activity.instagramTip}
            </div>
          )}
        </li>
      );
    }
    // Handle simple string activity
    return (
      <li key={index} className="mb-1">
        {activity}
      </li>
    );
  };

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Left Column */}
      <div className="w-full md:w-2/3 min-h-[600px] space-y-6">
        <div className="max-w-7xl mx-auto my-3 bg-white rounded-lg">
          {/* Header with image */}
          <div className="relative h-80 md:ml-2">
            <img
              src={images[getRandomNumber()]}
              alt={`${tripData.location || "Destination"} landscape`}
              className="w-full h-full object-cover rounded-t-lg"
            />
          </div>

          {/* User info
      <div className="px-6 pt-4 pb-2 flex items-center">
        <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
        <div>
          <p className="text-xs text-gray-600">By TravelExpert</p>
          <p className="text-xs text-gray-500">Apr 2025</p>
        </div>
        <div className="ml-auto flex space-x-4">
          <button className="text-orange-500 flex items-center text-sm">
            <Heart size={16} className="mr-1" />
            Save
          </button>
          <button className="text-orange-500 flex items-center text-sm">
            <Share size={16} className="mr-1" />
            Share
          </button>
        </div>
      </div> */}

          {/* Title */}
          <div className="px-6 py-4">
            <h1 className="text-2xl font-medium text-gray-800">
              {tripData.tripTitle}
            </h1>
          </div>

          {/* Description */}
          <div className="px-6 pb-4">
            <p className="text-gray-700 text-sm">{tripData.description}</p>
          </div>

          {/* Trip info */}
          <div className="px-6 pb-4">
            <div className="flex items-center mb-4">
              <MapPin size={16} className="text-orange-500 mr-2" />
              <span className="text-sm text-gray-700">{tripData.location}</span>
            </div>
            <div className="flex items-center mb-4">
              <Calendar size={16} className="text-orange-500 mr-2" />
              <span className="text-sm text-gray-700">
                {tripData.duration}-Day Trip • {tripData.budget} • Best time:{" "}
                {tripData.bestTimeToVisit?.month || "Not specified"}
              </span>
            </div>
            {tripData.transportation && (
              <div className="flex items-center mb-4">
                <Car size={16} className="text-orange-500 mr-2" />
                <span className="text-sm text-gray-700">
                  Recommended transport: {tripData.transportation.primaryMode}
                </span>
              </div>
            )}
          </div>

          {/* Navigation Tabs */}
          <div className="px-6 border-b border-gray-200">
            <div className="flex space-x-6">
              <button
                className={`py-2 px-1 text-sm font-medium border-b-2 ${
                  expandedSection === "itinerary"
                    ? "border-blue-500 text-orange-600"
                    : "border-transparent text-gray-500"
                }`}
                onClick={() => toggleSection("itinerary")}
              >
                Itinerary
              </button>
              {tripData.accommodationOptions && (
                <button
                  className={`py-2 px-1 text-sm font-medium border-b-2 ${
                    expandedSection === "accommodation"
                      ? "border-blue-500 text-orange-600"
                      : "border-transparent text-gray-500"
                  }`}
                  onClick={() => toggleSection("accommodation")}
                >
                  Accommodation
                </button>
              )}
              {tripData.budgetTips && tripData.budgetTips.length > 0 && (
                <button
                  className={`py-2 px-1 text-sm font-medium border-b-2 ${
                    expandedSection === "tips"
                      ? "border-blue-500 text-orange-600"
                      : "border-transparent text-gray-500"
                  }`}
                  onClick={() => toggleSection("tips")}
                >
                  Budget Tips
                </button>
              )}
              {tripData.localCuisineRecommendations &&
                tripData.localCuisineRecommendations.length > 0 && (
                  <button
                    className={`py-2 px-1 text-sm font-medium border-b-2 ${
                      expandedSection === "cuisine"
                        ? "border-blue-500 text-orange-600"
                        : "border-transparent text-gray-500"
                    }`}
                    onClick={() => toggleSection("cuisine")}
                  >
                    Local Cuisine
                  </button>
                )}
            </div>
          </div>

          {/* Itinerary Section */}
          {expandedSection === "itinerary" && tripData.dailyItinerary && (
            <ItineraryTimeline
              tripData={tripData}
              expandedSection={expandedSection}
            />
          )}

          {/* Accommodation Section */}
          {expandedSection === "accommodation" &&
            tripData.accommodationOptions && (
              <div className="px-6 py-6">
                <h2 className="text-lg font-medium text-gray-800 mb-4">
                  Accommodation Options
                </h2>

                {tripData.accommodationOptions.types &&
                  tripData.accommodationOptions.types.length > 0 && (
                    <div className="mb-4">
                      <h3 className="font-medium text-sm mb-2">
                        Recommended Types:
                      </h3>
                      <ul className="list-disc pl-5 text-sm text-gray-700">
                        {tripData.accommodationOptions.types.map(
                          (type, index) => (
                            <li key={index} className="mb-1">
                              {type}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}

                {tripData.accommodationOptions.recommendations && (
                  <div className="mb-4">
                    <h3 className="font-medium text-sm mb-2">
                      Recommendations:
                    </h3>
                    <p className="text-sm text-gray-700">
                      {tripData.accommodationOptions.recommendations}
                    </p>
                  </div>
                )}

                {tripData.accommodationOptions.estimatedCostPerNightFor4 && (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-medium text-sm mb-2">
                      Estimated Cost Per Night (Group of 4):
                    </h3>
                    <p className="text-sm text-gray-700">
                      Mid-Range:{" "}
                      {
                        tripData.accommodationOptions.estimatedCostPerNightFor4
                          .midRange
                      }
                    </p>
                  </div>
                )}
              </div>
            )}

          {/* Budget Tips Section */}
          {expandedSection === "tips" &&
            tripData.budgetTips &&
            tripData.budgetTips.length > 0 && (
              <div className="px-6 py-6">
                <h2 className="text-lg font-medium text-gray-800 mb-4">
                  Budget Tips
                </h2>

                <ul className="space-y-3">
                  {tripData.budgetTips.map((tip, index) => (
                    <li key={index} className="flex">
                      <span className="text-green-500 mr-2">•</span>
                      <span className="text-sm text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          {/* Local Cuisine Section */}
          {expandedSection === "cuisine" &&
            tripData.localCuisineRecommendations &&
            tripData.localCuisineRecommendations.length > 0 && (
              <div className="px-6 py-6">
                <h2 className="text-lg font-medium text-gray-800 mb-4">
                  Local Cuisine Recommendations
                </h2>

                <div className="grid grid-cols-1 gap-4">
                  {tripData.localCuisineRecommendations.map((item, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-4"
                    >
                      <div className="flex items-start">
                        <div className="mt-1">
                          <Coffee className="text-amber-500" size={16} />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-gray-700">{item}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* Recommended Attractions */}
          {tripData.recommendedAttractions &&
            tripData.recommendedAttractions.length > 0 &&
            expandedSection === "itinerary" && (
              <div className="px-6 pb-8">
                <h2 className="text-lg font-medium text-gray-800 mb-4">
                  Recommended Attractions
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {tripData.recommendedAttractions.map((attraction, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-lg p-4 bg-white"
                    >
                      <div className="h-24 bg-gray-200 rounded-lg mb-2">
                        <img
                          src={`/api/placeholder/200/120`}
                          alt={
                            typeof attraction === "string"
                              ? attraction
                              : attraction.name || "Attraction"
                          }
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <h3 className="font-medium text-sm">
                        {typeof attraction === "string"
                          ? attraction
                          : attraction.name || "Attraction"}
                      </h3>
                      <div className="flex items-center mt-2">
                        <MapPin size={14} className="text-gray-400 mr-1" />
                        <span className="text-xs text-gray-500">
                          Google Maps
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          {/* Notes Section */}
          {tripData.notes && (
            <div className="px-6 py-6 bg-gray-50 mt-4 rounded-b-lg">
              <h2 className="text-sm font-medium text-gray-800 mb-2">Notes:</h2>
              <p className="text-xs text-gray-600">{tripData.notes}</p>
            </div>
          )}

          <Gallery images={images} />

          {TraveAdvisor &&
            TraveAdvisor.places &&
            TraveAdvisor.places.length > 0 && (
              <CardSlider
                attractions={TraveAdvisor.places}
                title={"Places To Visit"}
              />
            )}

          {TraveAdvisor &&
            TraveAdvisor.hotels &&
            TraveAdvisor.hotels.length > 0 && (
              <div className="px-6 py-6 bg-gray-50 mt-4 rounded-b-lg">
                <h2 className="text-sm font-medium text-gray-800 mb-2">
                  Hotels:
                </h2>
                <ul className="list-disc pl-5 text-xs text-gray-600">
                  {TraveAdvisor.hotels.map((hotel, index) => (
                    <li key={index} className="mb-1">
                      {hotel.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}

          {TraveAdvisor &&
            TraveAdvisor.attractions &&
            TraveAdvisor.attractions.length > 0 && (
              <CardSlider
                attractions={TraveAdvisor.attractions}
                title={"Top Attractions"}
              />
            )}
        </div>
      </div>
      <div className="w-full md:w-1/3 bg-gray-100 rounded h-[570px] sticky top-[70px] mr-[40px]">
    
      <MapContainer
  center={[cord.latitude, cord.longitude]}
  zoom={10}
  scrollWheelZoom={false}
  className="h-full w-full rounded"
>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[cord.latitude,cord.longitude]}>
        <Popup>
          You are here! 📍
        </Popup>
      </Marker>

  {extractedDays.map((item, index) => (
    <Marker
      key={index}
      position={[
        item.geoCoordinates.latitude,
        item.geoCoordinates.longitude
      ]}
    >
      <Popup>
        <div className="text-center">
          <h2 className="font-bold">Day {index + 1}</h2>
          <p>{item.title}</p>
        </div>
      </Popup>
    </Marker>
  ))}
</MapContainer>


      </div>
    </div>
  );
}
