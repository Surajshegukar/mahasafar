import React, { use } from "react";
import ItineraryCard from "../component/common/ItineraryCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchItineraries } from "../store/itinerarySlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function MyItineraries() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { itineraries, loading, error } = useSelector(
    (state) => state.itinerary
  );

  useEffect(() => {
    // Fetch itineraries if authenticated
    console.log("Fetching itineraries...");
    dispatch(fetchItineraries());
  }, [dispatch]);

  console.log(itineraries);

  return (
    <div>
      {/* COMMING SOON */}
   
  
      <div className="max-w-6xl mx-auto px-4 py-12 text-slate-700">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full mb-6 font-medium">
            MY ITINERARIES
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-600">
            Your Itineraries
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-slate-600">
            Here are the itineraries you have created and saved.
          </p>
        </div>
        <div>
        
      </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {itineraries.map((itinerary) => (
            <ItineraryCard key={itinerary.id} itinerary={itinerary} />
          ))}
        </div>
      </div>
    </div>
  );
}
