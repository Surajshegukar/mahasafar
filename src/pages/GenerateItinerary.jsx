import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { fetchItinerary } from "../store/itinerarySlice";
import { useDispatch, useSelector } from "react-redux";
import {
  Heart,
  Share,
  MapPin,
  ChevronDown,
  ChevronUp,
  Calendar,
} from "lucide-react";
import DynamicItinerary from "./DynamicItinerary";
import { FetchDetails } from "../services/TravelAdvisor";
import { fetchImagesByCoordinates } from "../services/fetchImagesByCoordinates";
import { fetchSingleImageByLocation } from "../services/fetchSingleImageByLocation";

export default function GenerateItinerary() {
  const location = useLocation();
  const dispatch = useDispatch();
  const searchQuery = location.state?.searchQuery || "";
  const [tripDetails, setTripDetails] = useState(null); // State to hold trip details
  const [tripImages,setTripImages] = useState([]);

  
  async function fetchTripDetails(coordinates) {
    try {
      const TravelAdv = await FetchDetails(coordinates);
      console.log("Trip Details:", TravelAdv); // Log the trip details for debugging
      return TravelAdv;
    } catch (error) {
      console.error("Error fetching trip details:", error);
    }
  }

  // Get state from Redux store - make sure names match what's in the slice
  const { currentItinerary, isLoading, error } = useSelector(
    (state) => state.itinerary
  );

  const params = useParams(); // Get the URL parameters
  const itineraryId = params.id; // Extract the itinerary ID from the URL

  // Fetch the itinerary when component mounts or ID changes
  useEffect(() => {
    console.log("Fetching itinerary with ID:", itineraryId);
    dispatch(fetchItinerary(itineraryId));
  }, [dispatch, itineraryId]);

  const TripAdvisor = async () => {
    if (currentItinerary) {
      const data = typeof currentItinerary === 'string' ? JSON.parse(currentItinerary) : 
      typeof currentItinerary.json === 'string' ? JSON.parse(currentItinerary.json) : 
      currentItinerary;
  
      const tripImages = await fetchSingleImageByLocation(data.destination,10);
      const tripDetails = await fetchTripDetails(data.geoCoordinates);
      setTripImages(tripImages.image_urls);
      setTripDetails(tripDetails); // Set the trip details in state
      

    }
  };
  useEffect(() => {
    TripAdvisor();

  }, [currentItinerary]);



  return (  
    <DynamicItinerary
      itineraryData={currentItinerary}
      searchQuery={searchQuery}
      TraveAdvisor={tripDetails}
      images={tripImages}

      
      isLoading={isLoading}
      error={error}
    />
  );
}