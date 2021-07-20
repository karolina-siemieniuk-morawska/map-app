import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

const Map = ({ coordinates }) => {
  const map = useMap()
  map.setView(coordinates, 15);
  return null
}

export const MapComponent = ({ coordinates }) => {

  return (
    <MapContainer center={[coordinates.lat, coordinates.lng]} zoom={15}>
      <Map coordinates={coordinates}></Map>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[coordinates.lat, coordinates.lng]}>
        <Popup>
          This is the place
        </Popup>
      </Marker>
    </MapContainer>
  )
};