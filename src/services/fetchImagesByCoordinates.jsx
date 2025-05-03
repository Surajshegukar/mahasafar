// src/services/imageService.js

export async function fetchImagesByCoordinates(placeName) {
    const PIXABAY_API_KEY = '49950026-5e854a6e35786c84020e0d8f6'; // Replace with your key
  
    try {
        
      if (!placeName) {
        throw new Error('Place name not found for given coordinates.');
      }
  
      // 2. Fetch images from Pixabay
      const pixabayRes = await fetch(
        `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(placeName)}&image_type=photo`
      );
      const pixabayData = await pixabayRes.json();
  
      // 3. Return array of image URLs
      return pixabayData.hits.map((img) => img.webformatURL);
  
    } catch (error) {
      console.error('Error fetching images:', error);
      return [];
    }
  }
  
  export async function fetchSingleImageByCoordinates(placeName) {
    const PIXABAY_API_KEY = '49950026-5e854a6e35786c84020e0d8f6'; // Replace with your key
  
    try {
      // 1. Reverse geocode to get place name
      
     
  
      if (!placeName) {
        throw new Error('Place name not found for given coordinates.');
      }
  
      // 2. Fetch images from Pixabay
      const pixabayRes = await fetch(
        `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${encodeURIComponent(placeName)}&image_type=photo`
      );
      const pixabayData = await pixabayRes.json();
  
      // 3. Return array of image URLs
      return pixabayData.hits[0]?.webformatURL;
  
    } catch (error) {
      console.error('Error fetching images:', error);
      return [];
    }
  }