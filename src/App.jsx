import React, { useState, useEffect } from "react";
import { Form } from './components/Form';
import { MapComponent } from './components/Map';
import './App.scss'

function App() {
  const [coordinates, setCoordinates] = useState({
    lat: 0,
    lng: 0
  });

  useEffect(() => {
    console.log(coordinates);
  });

  const getCoordinates = (c) => setCoordinates(c);

  return (
    <div className="App">
      <Form coordinates={getCoordinates} />
      <MapComponent coordinates={coordinates} />
    </div>
  );
}

export default App;
