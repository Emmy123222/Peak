import React, { useEffect, useRef } from "react";
import L from "leaflet";

const imageUrls = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces&auto=format&q=60",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces&auto=format&q=60",
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&crop=faces&auto=format&q=60",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces&auto=format&q=60",
  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&h=200&fit=crop&crop=faces&auto=format&q=60",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces&auto=format&q=60",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=faces&auto=format&q=60",
];

const generateRandomMarkers = (count: number) => {
  const markers = [];
  for (let i = 0; i < count; i++) {
    const lat = Math.random() * 180 - 90; // Latitude between -90 and +90
    const lng = Math.random() * 360 - 180; // Longitude between -180 and +180
    const image = imageUrls[Math.floor(Math.random() * imageUrls.length)];
    markers.push({ lat, lng, image });
  }
  return markers;
};

const WorldMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || mapInstance.current) return;

    const map = L.map(mapContainer.current, {
      center: [20, 0],
      zoom: 2,
      minZoom: 1,
      maxZoom: 5,
      zoomControl: false,
      attributionControl: false,
    });

    L.control.zoom({ position: "topright" }).addTo(map);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    const markers = generateRandomMarkers(80); // You can increase this to add more

    markers.forEach((marker) => {
      const icon = L.divIcon({
        className: "custom-marker",
        html: `
          <div class="marker-container">
            <img src="${marker.image}" class="marker-image" />
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 20],
      });

      L.marker([marker.lat, marker.lng], { icon }).addTo(map);
    });

    mapInstance.current = map;

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[500px] bg-[#FDF4FF] rounded-xl overflow-hidden">
      <div ref={mapContainer} className="w-full h-full" />
      <style>
        {`
          .custom-marker {
            background: none;
            border: none;
          }

          .marker-container {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            overflow: hidden;
            border: 3px solid #6B21A8;
            box-shadow: 0 4px 6px rgba(0,0,0,0.2);
            animation: pulse 2s infinite;
          }

          .marker-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          @keyframes pulse {
            0% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(107, 33, 168, 0.7);
            }
            70% {
              transform: scale(1.05);
              box-shadow: 0 0 0 12px rgba(107, 33, 168, 0);
            }
            100% {
              transform: scale(1);
              box-shadow: 0 0 0 0 rgba(107, 33, 168, 0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default WorldMap;
