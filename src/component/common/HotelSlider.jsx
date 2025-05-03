import { useState, useRef, useEffect } from "react";

export default function HotelSlider({ attractions, title }) {
  const sliderRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const [cardWidth, setCardWidth] = useState(280); // Default card width + gap
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  console.log(attractions);

  // Calculate maximum scroll width on mount and resize
  useEffect(() => {
    if (sliderRef.current) {
      const calculateValues = () => {
        const slider = sliderRef.current;
        setMaxScroll(slider.scrollWidth - slider.clientWidth);
        // Adjust card width based on viewport
        const newCardWidth = window.innerWidth < 640 ? 260 : 280;
        setCardWidth(newCardWidth);
      };

      calculateValues();
      window.addEventListener("resize", calculateValues);

      return () => {
        window.removeEventListener("resize", calculateValues);
      };
    }
  }, [attractions]);

  // Update scroll position when slider is scrolled
  const handleScroll = () => {
    if (sliderRef.current) {
      setScrollPosition(sliderRef.current.scrollLeft);
    }
  };

  // Scroll to next or previous page
  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const scrollAmount = cardWidth * (direction === "next" ? 2 : -2);
      const newPosition = slider.scrollLeft + scrollAmount;

      slider.scrollTo({
        left: newPosition,
        behavior: "smooth",
      });
    }
  };

  // Mouse events for drag scrolling
  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const distance = (x - startX) * 1.2; // Multiplier for faster scrolling
    sliderRef.current.scrollLeft = scrollLeft - distance;
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    setIsMouseDown(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isMouseDown) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const distance = (x - startX) * 1.2;
    sliderRef.current.scrollLeft = scrollLeft - distance;
  };

  return (
    <div className="px-6 py-6 bg-gray-50 mt-4 rounded-b-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-800">{title}</h2>

        <div className="flex space-x-2">
          <button
            onClick={() => scrollSlider("prev")}
            disabled={scrollPosition <= 0}
            className={`p-2 rounded-full ${
              scrollPosition <= 0
                ? "bg-gray-200 text-gray-400"
                : "bg-white text-gray-800 shadow hover:bg-gray-100"
            }`}
            aria-label="Previous"
          >
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
              className="feather feather-chevron-left"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button
            onClick={() => scrollSlider("next")}
            disabled={scrollPosition >= maxScroll}
            className={`p-2 rounded-full ${
              scrollPosition >= maxScroll
                ? "bg-gray-200 text-gray-400"
                : "bg-white text-gray-800 shadow hover:bg-gray-100"
            }`}
            aria-label="Next"
          >
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
              className="feather feather-chevron-right"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>

      <div
        className="relative overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        <div
          ref={sliderRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
          onScroll={handleScroll}
        >
          {attractions.map((attraction, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 sm:w-72 mr-4 last:mr-0 snap-start"
            >
              <div className="border border-gray-200 rounded-lg p-4 bg-white h-full transition-transform duration-300 hover:shadow-md hover:scale-102 transform">
                <div className="h-40 bg-gray-200 rounded-lg overflow-hidden mb-4">
                  <img
                    src={
                      Array.isArray(attraction.cardPhotos) &&
                      attraction.cardPhotos.length > 0
                        ? attraction.cardPhotos[0].sizes?.urlTemplate
                            ?.replace("{width}", "400")
                            ?.replace("{height}", "300")
                        : "/api/placeholder/200/200"
                    }
                    alt={attraction.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h3 className="font-medium text-sm text-gray-800 line-clamp-1">
                  {attraction.title}
                </h3>
                <p className="text-xs text-gray-600 mt-2 line-clamp-1">
                  {attraction.secondaryInfo}
                </p>
                <div className="flex items-center mt-1">
                  <span className="text-xs text-gray-600">Rating: </span>
                  <span className="text-xs font-medium ml-1">
                    {attraction.bubbleRating?.rating || "N/A"}
                  </span>
                  <span className="text-yellow-500 ml-1">⭐</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  Price: {attraction.priceForDisplay || "N/A"}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {attraction.priceDetails}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {attraction.priceSummary}
                </p>
                <p className="text-[10px] text-gray-400 mt-1 italic">
                  Powered by {attraction.provider}
                </p>
                {/* Optional: dummy link since web_url doesn't exist in original data */}
                <a
                  href={`https://www.google.com/search?q=${encodeURIComponent(
                    attraction.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 text-xs mt-3 inline-block hover:underline"
                >
                  View on Web
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Optional scroll indicators */}
        <div className="flex justify-center mt-4 space-x-1">
          {attractions.length > 0 &&
            Array(Math.min(Math.ceil(attractions.length / 3), 6))
              .fill()
              .map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i * 3 * cardWidth <= scrollPosition &&
                    scrollPosition < (i + 1) * 3 * cardWidth
                      ? "w-4 bg-blue-500"
                      : "w-2 bg-gray-300"
                  }`}
                />
              ))}
        </div>
      </div>
    </div>
  );
}

// Usage example:
export function TopAttractionsSection({ TraveAdvisor }) {
  if (
    !TraveAdvisor ||
    !TraveAdvisor.attractions ||
    TraveAdvisor.attractions.length === 0
  ) {
    return null;
  }

  return <AttractionCardSlider attractions={TraveAdvisor.attractions} />;
}
