import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function MainMap({ tripData, activeDay }) {
   
    const selectedIcon = new L.Icon({
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',  // Highlighted icon
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30],
      
    });
  
    const defaultIcon = new L.Icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
        shadowSize: [41, 41],
      });
  
    return (
        <MapContainer
        center={[tripData.geoCoordinates.latitude, tripData.geoCoordinates.longitude]}  // Assuming you have center coordinates
        zoom={10}
        scrollWheelZoom={false}
        className="h-full w-full rounded"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {tripData.dailyItinerary.map((item, index) => (
          <Marker
            key={index}
            position={[
              item.geoCoordinates.latitude,
              item.geoCoordinates.longitude,
            ]}
            icon={activeDay === item.day ?
              selectedIcon : defaultIcon
            }
          >
            <Popup>
              <div className="text-center">
                <h2 className="font-bold">Day {item.day}</h2>
                <p>{item.title}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    );
  }
  
  
  export default MainMap