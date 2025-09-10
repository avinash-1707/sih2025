"use client";

import * as React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Import the shared Issue type from your central types file
import { Issue } from "@/types";

// The props now use the imported Issue type, ensuring consistency
type MapComponentProps = {
  issues: Issue[];
  onMarkerClick: (issue: Issue) => void;
};

// --- Custom Icon Creation ---
// Creates visually appealing SVG icons with colors based on priority
const createCustomIcon = (priority: "High" | "Medium" | "Low") => {
  const color =
    priority === "High" ? "#ef4444" : priority === "Medium" ? "#f59e0b" : "#22c55e";

  const iconHtml = `
    <svg viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="rgba(0,0,0,0.3)" />
        </filter>
      </defs>
      <path
        fill="${color}"
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
        filter="url(#shadow)"
      />
      <circle cx="12" cy="9" r="2.5" fill="white" />
    </svg>`;

  return new L.DivIcon({
    html: iconHtml,
    className: "custom-leaflet-icon", // A class for potential CSS overrides
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
};


// --- Map Component ---
export default function MapComponent({ issues, onMarkerClick }: MapComponentProps) {
  // Memoize the map component to prevent re-rendering issues with Leaflet
  // This hook is the key to fixing the runtime errors
  const displayMap = React.useMemo(
    () => (
      <MapContainer
        center={[23.168, 79.932]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%", zIndex: 10 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {issues.map((issue) => (
          <Marker
            key={issue.id}
            position={issue.position}
            icon={createCustomIcon(issue.priority)}
            eventHandlers={{
              click: () => {
                onMarkerClick(issue);
              },
            }}
          >
            <Popup>
              <div className="font-sans">
                <h3 className="font-bold text-base mb-1">{issue.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{issue.category}</p>
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    issue.status === "Open"
                      ? "bg-red-100 text-red-800"
                      : issue.status === "In Progress"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {issue.status}
                </span>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    ),
    // The dependency array ensures the map only re-renders if the issues change
    [issues, onMarkerClick]
  );

  return <>{displayMap}</>;
}
