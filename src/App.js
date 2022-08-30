import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
import teslajson from './tesla.json';

console.log(teslajson);

const center = [1.3411547188393913, 103.81687980973597];
const filtered = teslajson.filter(tsla => tsla.address.country === "Singapore")

export default function App() {
  return (
    <MapContainer center={center} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {filtered.map(tsla => (
        <Marker         
        key = {tsla.id}
        position={[tsla.gps.latitude, tsla.gps.longitude]}>
        </Marker>
      ))}

    </MapContainer>
  );
}


