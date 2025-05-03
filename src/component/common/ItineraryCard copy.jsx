import React from "react";

export default function ItineraryCard(props) {
  const { key, itinerary } = props;

  const tripData =
    typeof itinerary === "string"
      ? JSON.parse(itinerary)
      : typeof itinerary.json === "string"
      ? JSON.parse(itinerary.json)
      : itinerary;

      console.log("Trip Data:", tripData); // Log the trip data to check its structure
  return (
    // Card component to display itinerary details

    <div key={key} className="bg-gray-50 p-8 rounded-lg">
      {/* <img
        src={tripData.image}
        alt="Destination"
        className="w-full h-48 object-cover rounded-lg mb-4"
      /> */}
      <h3 className="text-xl font-medium text-slate-700">{tripData.tripTitle}</h3>
      <p className="text-slate-600">{tripData.description.slice(0, 40)}...</p>
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={() => {
            window.location.href = `/generate-itinerary/${tripData._id}`;
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
        >
          View Itinerary
        </button>
        <span className="text-sm text-gray-500">{tripData.date}</span>

        </div>
    </div>
  );
}
