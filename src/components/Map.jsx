import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap, Polygon } from "react-leaflet";

const Map = ({ bounds }) => {
  const map = useMap();
  map.fitBounds(bounds);
  return null;
}

export const MapComponent = ({ coordinates }) => {
  const [map, setMap] = useState([[73, 15], [-40, -75]]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (coordinates.lat !== null || coordinates.lng !== null) {
      setLoading(true);
      fetch(`http://devcube.placeme.pl/api/getGeoJSON?lat=${coordinates.lat}&lng=${coordinates.lng}`)
        .then(response => response.json())
        .then(data => {
          setLoading(false);
          setMap([data.coordinates[0].map(arr => arr.reverse())]);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  }, [coordinates]);

  return (
    <>
      {loading && <div id="loader"></div>}
      <MapContainer bounds={map}>
        <Map bounds={map}></Map>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {coordinates.lat !== null && !loading && <Polygon positions={map} />}
      </MapContainer>
    </>
  )
};