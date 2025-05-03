const IMAGES_IP = import.meta.env.VITE_IMAGES_IP;

export const fetchSingleImageByLocation = async (location, count) => {
  try {

    const response = await fetch(IMAGES_IP, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ [location]: count }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error downloading images:", error.message);
    return null;
  }
};
