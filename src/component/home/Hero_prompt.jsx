import { useState } from "react";
import { Clock } from "lucide-react";
import bgvideo from "../../assets/bg-video.mp4"; // Adjust the path as necessary
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveItinerary } from "../../store/itinerarySlice";
import { AIPrompt } from "../../services/AIPrompt";
import { chatSession } from "../../services/AiModel";
import { FetchDetails } from "../../services/TravelAdvisor";
import PlaneLoader from "../common/PlaneLoader";

export default function Hero(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isGenerating, setIsGenerating] = useState(false);
  const [coordinates, setCoordinates] = useState({});
  const [errors, setErrors] = useState({});
  const { title, subtitle } = props;

  const getResponse = async (prompt) => {
    try {
      const FinalPrompt = AIPrompt.replace("{prompt}", prompt);
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
    console.log("Searching for:", searchQuery);
    if (!searchQuery) {
      alert("Please enter a prompt.");
      return;
    }

    try {
      setIsGenerating(true);
      setErrors({});

      const generatedItinerary = await getResponse(searchQuery);
      console.log("Generated Itinerary:", generatedItinerary.geoCoordinates);

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
    <section className="relative   text-white py-24">
      {/* <PlaneLoader/> */}
      {isGenerating && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
            <PlaneLoader/>
        </div>
      )}
      {errors.submit && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-500 bg-opacity-50 z-20">
          <p className="text-white">{errors.submit}</p>
        </div>
      )}

      {/* Background Overlay */}

      {/* Hot Air Balloon Image */}

      <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
        <video
          src={bgvideo}
          autoPlay // Corrected `autoplay` to `autoPlay`
          muted // Added `muted` to allow autoplay in modern browsers
          loop // Added `loop` to make the video play continuously
          alt="Hot air balloon"
          className="h-full object-cover w-full"
          style={{ filter: "blur(1px)" }} // Optional: Add a blur effect to the background video
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>

          {/* Subheading */}
          <p className="text-xl mb-12">{subtitle}</p>

          {/* Search Form */}
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="relative flex items-center max-w-2xl mx-auto">
              <input
                type="text"
                className="w-full bg-white text-gray-900 font-medium  px-6 py-4 rounded-full border border-orange-600 focus:border-orange-700 focus:ring focus:ring-orange-200 transition-colors duration-300 shadow-sm"
                style={{
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  paddingRight: "125px",
                }} // Optional: Add a shadow effect to the input field
                placeholder="Where do you want to go?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-2 bg-orange-600 hover:bg-orange-700 text-white font-medium px-6 py-3 rounded-full transition-colors"
              >
                Craft Trip
              </button>
            </div>
          </form>

          {/* Example Search */}
          <div className="flex items-center justify-center text-sm text-white">
            <Clock size={16} className="mr-2" />
            <p>
              Example: 2 days trip to Goa, want to visit places for cool
              instagram photos
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
