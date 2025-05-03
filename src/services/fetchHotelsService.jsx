const RAPID_HOTELS = import.meta.env.VITE_RAPID_API_KEY_HOTELS


 export const fetchHotelsService = async (latitude, longitude, checkIn, checkOut) => {
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': RAPID_HOTELS,
      'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com'
    }
  };

  const url = `https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotelsByLocation?latitude=${latitude}&longitude=${longitude}&checkIn=${checkIn}&checkOut=${checkOut}&pageNumber=1&currencyCode=USD`;
  
  const response = await fetch(url, options);

  
  console.log("response" , response)
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};