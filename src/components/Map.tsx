import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapComponentProps {
  className?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ className = '' }) => {
  const center: [number, number] = [9.0765, 7.3986];
  const zoom = 2;

  const destinations = [
    { id: 1, name: 'Lagos, Nigeria', lat: 6.5244, lng: 3.3792 },
    { id: 2, name: 'London, UK', lat: 51.5074, lng: -0.1278 },
    { id: 3, name: 'New York, USA', lat: 40.7128, lng: -74.006 },
    { id: 4, name: 'Dubai, UAE', lat: 25.2048, lng: 55.2708 },
    { id: 5, name: 'Paris, France', lat: 48.8566, lng: 2.3522 },
    { id: 6, name: 'Tokyo, Japan', lat: 35.6762, lng: 139.6503 },
    { id: 7, name: 'Sydney, Australia', lat: -33.8688, lng: 151.2093 },
    { id: 8, name: 'Cairo, Egypt', lat: 30.0444, lng: 31.2357 },
    { id: 9, name: 'Mumbai, India', lat: 19.076, lng: 72.8777 },
    { id: 10, name: 'São Paulo, Brazil', lat: -23.5505, lng: -46.6333 },
  ];

  const originIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
    className: 'origin-marker',
  });

  const destinationIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [20, 33],
    iconAnchor: [10, 33],
    popupAnchor: [1, -28],
    shadowSize: [33, 33],
    className: 'destination-marker',
  });

  return (
    <section className={`w-full px-4 md:px-6 lg:px-8 py-0 ${className}`}>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-left mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
            Find flights from Abuja to anywhere
          </h2>
        </div>

        {/* Map Container */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-white" style={{ height: '250px' }}>
          <MapContainer
            center={center}
            zoom={zoom}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={true}
            zoomControl={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Abuja origin marker */}
            <Marker position={[9.0765, 7.3986]} icon={originIcon}>
              <Popup>
                <div className="text-center">
                  <strong>Abuja, Nigeria</strong>
                  <br />
                  <span className="text-sm text-gray-600">Origin</span>
                </div>
              </Popup>
            </Marker>

            {/* Destination markers */}
            {destinations.map((destination) => (
              <Marker
                key={destination.id}
                position={[destination.lat, destination.lng]}
                icon={destinationIcon}
              >
                <Popup>
                  <div className="text-center">
                    <strong>{destination.name}</strong>
                    <br />
                    <span className="text-sm text-blue-600 cursor-pointer hover:underline">
                      Find flights
                    </span>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          {/* Overlay Button */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000]">
            <button className="bg-white hover:bg-gray-50 text-sm sm:text-base md:text-lg text-blue-600 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full shadow-lg font-medium transition-colors border border-blue-200 hover:border-blue-300">
               Explore destinations
            </button>
        </div>


        </div>
      </div>

      {/* Custom Marker Styles */}
      <style jsx>{`
        .origin-marker {
          filter: hue-rotate(120deg) saturate(1.5);
        }
        .destination-marker {
          filter: hue-rotate(200deg) saturate(1.2);
        }
      `}</style>
    </section>
  );
};

export default MapComponent;
