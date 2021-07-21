import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap, Polygon } from "react-leaflet";

const Map = ({ bounds }) => {
  const map = useMap();
  map.fitBounds(bounds);
  return null;
}

export const MapComponent = ({ coordinates }) => {
  const [map, setMap] = useState([[73, 15], [-40, -75]]);
  const [loader, setLoader] = useState(false);
  const initialCoordinates = coordinates.lat === null || coordinates.lng === null;

  const getMap = (coordinates) => {
    fetch(`http://devcube.placeme.pl/api/getGeoJSON?lat=${coordinates.lat}&lng=${coordinates.lng}`)
      .then(response => response.json())
      .then(data => {
        setLoader(false);
        setMap([data.coordinates[0].map(arr => arr.reverse())]);
      })
      .catch((error) => {
        console.error(`Error: ${error.message}`);
      });
  }

  useEffect(() => {
    if (!initialCoordinates) {
      setLoader(true);
      getMap(coordinates);
    }
  }, [coordinates, initialCoordinates]);

  return (
    <>
      {loader && <div id="loader"></div>}
      <MapContainer bounds={map}>
        <Map bounds={map}></Map>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {!initialCoordinates && !loader && <Polygon positions={map} />}
      </MapContainer>
    </>
  )
};