import React, { useState } from "react";
import { Header } from './components/Header';
import { Logo } from './components/Logo';
import { Description } from './components/Description';
import { Form } from './components/Form';
import { MapComponent } from './components/Map';
import './App.scss';

function App() {
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null
  }); // https://code-boxx.com/javascript-null-vs-undefined-vs-empty/

  // I haven't seen a statment like below before. Not saying it's invalid but it's not clear for me what's the purpose
  const getCoordinates = (c) => setCoordinates(c);

  return (
    <div className="app d-flex">
      <aside className="sidebar">
        <Logo />
        <Description />
        <Form coordinates={getCoordinates} />
      </aside>
      <main className="content">
        <Header coordinates={getCoordinates} />
        <MapComponent coordinates={coordinates} />
      </main>
    </div>
  );
}

export default App;
