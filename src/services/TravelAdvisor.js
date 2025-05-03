import axios from "axios";
const RAPID_API_KEY = import.meta.env.VITE_RAPID_API_KEY
const RAPID_API_HOST =  import.meta.env.VITE_RAPID_API_HOST

export const FetchDetails = async (coordinates) => {
    try {
        
      const sw = {
        lat: coordinates.latitude - 0.1,
        lng: coordinates.longitude - 0.1,
      };
      const ne = {
        lat: coordinates.latitude + 0.1,
        lng: coordinates.longitude + 0.1,
      };

      const places = await getPlacesData("restaurants", sw, ne);
      const attractions = await getPlacesData("attractions", sw, ne);

      return { places, attractions };
 
    } catch (error) {
      console.error("Error fetching trip details:", error);
    }
  };

export const getPlacesData = async (type, sw, ne) => {
    try {
      const {
        data: { data },
      } = await axios.get(
        `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
        {
          params: {
            bl_latitude: sw.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
            tr_latitude: ne.lat,
          },
          headers: {
            "x-rapidapi-key": RAPID_API_KEY,
            "x-rapidapi-host": RAPID_API_HOST,
       
          },
        }
      );
 
      const completeData = data.filter((item) => {
        return (
          item.name &&
          item.location_string &&
          item.latitude &&
          item.longitude &&
          item.num_reviews &&
          item.photo?.images?.small?.url
        );
      });
  
      // Ensure slicing works even when fewer than 10 items are available
      const topResults = completeData.length >= 10 ? completeData.slice(0, 10) : completeData;
  
      return topResults;
    } catch (error) {
      console.error("Error fetching places data:", error.response ? error.response.data : error.message);
    }
  };

 