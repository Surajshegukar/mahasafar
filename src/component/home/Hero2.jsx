import { useRef, useState, useEffect } from "react";
import { Clock } from "lucide-react";
import bgvideo from "../../assets/bg-video.mp4"; // Adjust the path as necessary
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveItinerary } from "../../store/itinerarySlice";

import { chatSession } from "../../services/AiModel";
import { FetchDetails } from "../../services/TravelAdvisor";
import PlaneLoader from "../common/PlaneLoader";
import { AIPrompt } from "../../config/AIPrompt";
import axios from "axios";

export default function Hero2(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isGenerating, setIsGenerating] = useState(false);
  const [destination, setDestination] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    destination: "",
    people: 1,
    budget: "moderate",
    days: 1,
  });

  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Debounce function to prevent excessive API calls
  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const fetchSuggestions = async (query) => {
    if (!query || query.length < 2) {
      setSuggestions([]);
      return;
    }

    setIsLoading(true);
    try {
      const options = {
        method: "GET",
        url: "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete",
        params: {
          query: query,
          lang: "en_US",
          units: "km",
        },
        headers: {
          "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);
      const results =
        response.data?.data?.Typeahead_autocomplete?.results || [];

      setSuggestions(results);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
      setIsLoading(false);
    }
  };

  // Create debounced version of fetchSuggestions
  const debouncedFetchSuggestions = useRef(
    debounce(fetchSuggestions, 300)
  ).current;

  const handleInputChange = (e) => {
    const value = e.target.value;
    setDestination(value);
    setShowSuggestions(true);
    debouncedFetchSuggestions(value);
  };

  const handleSelectSuggestion = (suggestion) => {
    // Safe access to nested properties with fallbacks
    const locationName =
      suggestion?.detailsV2?.names?.name || "Unknown Location";
    const locationRegion =
      suggestion?.detailsV2?.names?.longOnlyHierarchyTypeaheadV2 || "";

    setDestination(
      locationRegion ? `${locationName}, ${locationRegion}` : locationName
    );
    setFormData((prevData) => ({
      ...prevData,
      ['destination']: `${locationName}, ${locationRegion}`,
    }));
    setSelectedLocation(suggestion);
    setShowSuggestions(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const budgetOptions = [
    { value: "low", label: "Budget" },
    { value: "moderate", label: "Moderate" },
    { value: "high", label: "Luxury" },
  ];

  const [errors, setErrors] = useState({});
  const { title, subtitle } = props;

  const getResponse = async (data) => {
    try {
      const FinalPrompt = AIPrompt.replace("{destination}", data.destination)
        .replace("{days}", data.days)
        .replace("{peoples}", data.people)
        .replace("{budget}", data.budget);
      console.log(FinalPrompt);

      const result = await chatSession.sendMessage(FinalPrompt);
      console.log(result.candidates);

      const rawText = result.response.candidates[0].content.parts[0].text;

      // Remove the triple backticks and `json` tag
      const jsonString = rawText.replace(/```json|```/g, "").trim();

      try {
        const parsedData = JSON.parse(jsonString);
        console.log("parsing JSON : ", parsedData); // Access your data here
        return parsedData; // Access your data here
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    } catch (error) {
      console.error("Error fetching trip details:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.destination ||
      !formData.days ||
      !formData.people ||
      !formData.budget
    ) {
      alert("Please fill all the fields");
      return;
    }

    try {
      setIsGenerating(true);
      setErrors({});

      const generatedItinerary = await getResponse(formData);
      generatedItinerary.destination = formData.destination;
      console.log("Generated Itinerary:", generatedItinerary.destination);

      if (!generatedItinerary) {
        throw new Error("Failed to generate itinerary");
      }
      // Save itinerary to database
      const result = await dispatch(saveItinerary(generatedItinerary)).unwrap();

      if (result && result._id) {
        navigate(`/generate-itinerary/${result._id}`);
      } else {
        throw new Error("Failed to save itinerary");
      }
    } catch (error) {
      console.error("Error creating itinerary:", error);
      setErrors({
        submit:
          error.message || "Failed to create itinerary. Please try again.",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="relative  text-white w-full mb-3">
      {/* <PlaneLoader/> */}
      {isGenerating && (
        <div className="fixed w-full h-full top-0 left-0 inset-0 flex items-center justify-center z-20">
          <PlaneLoader />
        </div>
      )}
      {errors.submit && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-500 bg-opacity-50 z-20">
          <p className="text-white">{errors.submit}</p>
        </div>
      )}

      {/* Background Overlay */}

      {/* Hot Air Balloon Image */}

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-full p-4 bg-orange-50 rounded-md shadow-md">
            <div onSubmit={() => handleSubmit()}>
              <div className="flex flex-col md:flex-row md:items-center md:space-x-2">
                {/* Destination */}
                <div className="flex-1 mb-2 md:mb-0 relative" ref={dropdownRef}>
                  <div className="flex items-center bg-white rounded p-2">
                    <span className="text-gray-500 mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="destination"
                      value={destination}
                      onChange={handleInputChange}
                      placeholder="Where to? (e.g. Shivneri Fort, Maharashtra)"
                      className="w-full border-0 focus:ring-0 focus:border-orange-400 focus:outline-0 p-1 text-gray-800"
                    />
                    {isLoading && (
                      <span className="text-gray-400">
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      </span>
                    )}
                  </div>

                  {showSuggestions && suggestions.length > 0 && (
                    <div  className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg max-h-60 overflow-auto">
                      {suggestions.map((suggestion) => {
                        // Safe access to nested properties
                        const name = suggestion?.detailsV2?.names?.name || "";
                        const region =
                          suggestion?.detailsV2?.names
                            ?.longOnlyHierarchyTypeaheadV2 || "";
                        const imageUrl =
                          suggestion?.image?.photo?.photoSizes?.[0]?.url ||
                          null;
                        const docId =
                          suggestion?.documentId ||
                          `suggestion-${Math.random()}`;

                        // Skip rendering if both name and region are empty/missing
                        if (!name && !region) {
                          return null;
                        }

                        return (
                          <div
                            key={docId}
                            className="flex items-center p-2 hover:bg-gray-100 cursor-pointer border-b border-gray-100"
                            onClick={() => handleSelectSuggestion(suggestion)}
                          >
                            {imageUrl && (
                              <img
                                src={imageUrl}
                                alt={name || "Location"}
                                className="w-10 h-10 rounded-md object-cover mr-3"
                              />
                            )}
                            <div className="flex-1">
                              {name && (
                                <div className="font-medium text-gray-700 text-left">
                                  {name}
                                </div>
                              )}
                              {region !== "" && (
                                <div className="text-sm text-gray-500 text-left">
                                  {region}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Number of People */}
                <div className="md:w-40 mb-2 md:mb-0">
                  <div className="flex items-center bg-white rounded p-2">
                    <span className="text-gray-500 mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                      </svg>
                    </span>
                    <select
                      name="people"
                      value={formData.people}
                      onChange={handleChange}
                      className="w-full border-0 focus:ring-0 p-1 text-gray-800 bg-transparent"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? "Person" : "People"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Search Button */}
                <div className="md:w-auto">
                  <button
                    onClick={handleSubmit}
                    className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-medium px-3 py-2 rounded transition-colors"
                  >
                    Generate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
