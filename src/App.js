import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';

const center = [1.3411547188393913, 103.81687980973597];

export default function App() {
  return (
<MapContainer center={center} zoom={13}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={center}>
      <Popup>
        {center}
      </Popup>
    </Marker>
  </MapContainer>
  );
}


