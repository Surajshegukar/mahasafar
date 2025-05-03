import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Heart, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { forts } from '../api/data';

// Fix leaflet's marker issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

function FlyToFort({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.flyTo([position.lat, position.lng], 8); // Smooth fly animation
    }
  }, [position, map]);

  return null;
}

export default function MaharashtraFortsExplorer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFort, setSelectedFort] = useState(null);
  
  const [favorites, setFavorites] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const fortsPerPage = 5;

  const fortRefs = useRef([]);

  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const fortId = entry.target.getAttribute('data-id');
            const fort = forts.find(f => f.id === Number(fortId));
            if (fort) {
              setSelectedFort(fort);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // half visible
      }
    );

    fortRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      fortRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [forts]);

  return (
    <div className="font-sans">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-orange-500 mb-6">FORTS</h1>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column - Listings */}
          <div className="w-full md:w-1/2 overflow-y-auto h-[600px]">
            {/* Search Form */}
            <div className="mb-6">
              <form onSubmit={handleSearch} className="flex">
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="w-full px-4 py-2 border border-gray-300 rounded-l"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded-r text-sm">
                  SEARCH
                </button>
              </form>
            </div>

            {/* Fort Listings */}
            <div className="space-y-6">
              {forts.map((fort, index) => (
                <div
                  key={fort.id}
                  className="flex border border-gray-200 rounded overflow-hidden"
                  data-id={fort.id}
                  ref={el => fortRefs.current[index] = el}
                >
                  <div className="w-1/3">
                    <img src={fort.image} alt={fort.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="w-2/3 p-4 relative">
                    <button 
                      className="absolute top-2 right-2" 
                      onClick={() => toggleFavorite(fort.id)}
                    >
                      <Heart 
                        size={20} 
                        className={favorites[fort.id] ? "fill-red-500 text-red-500" : "text-gray-400"}
                      />
                    </button>
                    <h3 className="text-xl font-semibold">{fort.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{fort.location}</p>
                    <p className="text-sm">{fort.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {/* (You can improve this later) */}
          </div>

          {/* Right Column - Map */}
          <div className="w-full md:w-1/2 bg-gray-100 rounded min-h-[600px]">
            <MapContainer center={[19.5, 75]} zoom={6.5} scrollWheelZoom={false} className="h-full w-full rounded">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {forts.map(fort => (
                <Marker key={fort.id} position={[fort.position.lat, fort.position.lng]}>
                  <Popup autoOpen={selectedFort?.id === fort.id}>
                    <div className="text-center">
                      <h2 className="text-lg font-semibold">{fort.name}</h2>
                      <p className="text-sm">{fort.location}</p>
                      <p className="text-xs mt-1">{fort.description.slice(0, 60)}...</p>
                    </div>
                  </Popup>
                </Marker>
              ))}

              {/* When fort changes, fly to its location */}
              {selectedFort && <FlyToFort position={selectedFort.position} />}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
