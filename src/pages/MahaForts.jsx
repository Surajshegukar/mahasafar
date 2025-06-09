import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  forts,
  beaches,
  temples,
  unique_experiences,
  miscellaneous,
} from "../api/data";
import { useParams } from "react-router-dom";
import Hero2 from "../component/home/HeroMini";
import { Search } from "lucide-react";

// Define default and selected marker icons
const defaultIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const selectedIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

function FlyToFort({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo([position.lat, position.lng], 8);
    }
  }, [position, map]);

  return null;
}

export default function MaharashtraFortsExplorer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFort, setSelectedFort] = useState(null);
  const fortRefs = useRef([]);
  const markerRefs = useRef([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { type } = useParams(); // assuming the route is something like /explore/:type
  let selectedArray = [];
  const [displayArray, setDisplayArray] = useState([]);

  if (type === "forts") {
    selectedArray = forts;
  } else if (type === "beaches") {
    selectedArray = beaches;
  } else if (type === "temples") {
    selectedArray = temples;
  } else if (type === "unique_experiences") {
    selectedArray = unique_experiences;
  } else if (type === "miscellaneous") {
    selectedArray = miscellaneous;
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          const fortId = visibleEntries[0].target.getAttribute("data-id");
          const fort = displayArray.find((f) => f.id === Number(fortId)); // <-- corrected here
          if (fort) {
            setSelectedFort(fort);
          }
        }
      },
      {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: 0.9,
      }
    );

    fortRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      fortRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [selectedArray,displayArray]);

  useEffect(() => {
    if (!searchTerm.trim()) {
      // If search is empty, show all items
      setDisplayArray(selectedArray);
      return;
    }

    // Filter the array based on search term
    const filteredResults = selectedArray.filter(
      (fort) =>
        fort.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        fort.location?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        fort.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setDisplayArray(filteredResults);
  }, [searchTerm, selectedArray, setDisplayArray]);

  useEffect(() => {
    if (selectedFort) {
      const selectedIndex = selectedArray.findIndex(
        (f) => f.id === selectedFort.id
      );
      const marker = markerRefs.current[selectedIndex];
      if (marker) {
        marker.openPopup();
      }
    }
  }, [selectedFort, selectedArray]);

  return (
    <div className="font-sans">
      {/* <div
  style={{
    position: "fixed",
    top: "100px", // <-- match your rootMargin top (-100px)
    left: 0,
    right: 0,
    height: "2px",
    backgroundColor: "red",
    zIndex: 9999,
    pointerEvents: "none",
  }}
></div> */}
      <div className="container mx-auto px-4 py-6">
      <Hero2 />
        <h1 className="text-3xl font-bold text-orange-500 mb-6 capitalize ">
          {type.replace("_", " ")}
        </h1>
       
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column */}
          <div className="w-full md:w-1/2  min-h-[600px] space-y-6">
            <div className="w-full mb-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Search by name, location or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {displayArray.map((fort, index) => (
              <div
                key={fort.id}
                className="flex border border-gray-200 rounded overflow-hidden"
                onClick={() => {
                  window.location.href = `/destinations/${type}/${fort.id}`;
                }}
                data-id={fort.id}
                ref={(el) => (fortRefs.current[index] = el)}
              >
                <div className="w-1/3 max-h-[200px]">
                  <img
                    src={`/images/${type}/${fort.title.replaceAll(
                      " ",
                      "_"
                    )}/000001.jpg`}
                    alt={fort.name}
                    className="w-full h-full object-cover"
                    
                  />
                </div>
                <div className="w-2/3 p-4">
                  <h3 className="text-xl font-semibold">{fort.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{fort.location}</p>
                  <p className="text-sm">{fort.short_description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2 bg-gray-100 rounded h-[600px] sticky top-[70px]">
    
            <MapContainer
              center={[19.5, 75]}
              zoom={6.5}
              scrollWheelZoom={false}
              className="h-full w-full rounded"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {displayArray.map((fort, index) => (
                <Marker
                  key={fort.id}
                  position={[fort.position.lat, fort.position.lng]}
                  icon={
                    selectedFort?.id === fort.id ? selectedIcon : defaultIcon
                  }
                  ref={(el) => (markerRefs.current[index] = el)}
                >
                  <Popup>
                    <div className="text-center">
                      <h2 className="text-lg font-semibold">{fort.title}</h2>
                      {/* <p className="text-sm">{fort.location}</p> */}
                      <p className="text-xs mt-1">{fort.short_description}...</p>
                    </div>
                  </Popup>
                </Marker>
              ))}

              {selectedFort && <FlyToFort position={selectedFort.position} />}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
