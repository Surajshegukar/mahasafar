import React from "react";
import ItineraryCard from "../component/common/itineraryCard";

export default function SavedItineraries() {
  const savedItineraries = [
    {
      id: 1,
      name: "Trip to Paris",
      description: "A trip to Paris with family",
      date: "2023-10-01",
      duration: 7,
      price: 2000,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Trip to New York",
      description: "A trip to New York with friends",
      date: "2023-11-01",
      duration: 5,
      price: 1500,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Trip to London",
      description: "A trip to London with family",
      date: "2023-12-01",
      duration: 10,
      price: 3000,
      image: "https://via.placeholder.com/150",
    },
  ];
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-12 text-slate-700">
        <div className="text-center mb-16">
          <div className="inline-block bg-amber-200 text-amber-800 px-4 py-2 rounded-full mb-6 font-medium">
            SAVED ITINERARIES
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-600">
            Your Saved Itineraries
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-slate-600">
            Here are the itineraries you have saved.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {savedItineraries.map((itinerary) => (
            <ItineraryCard key={itinerary.id} itinerary={itinerary} />
          ))}
        </div>
      </div>
    </div>
  );
}
