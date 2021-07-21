import React, { useState } from "react";
import { Header } from './components/Header';
import { Logo } from './components/Logo';
import { Description } from './components/Description';
import { Form } from './components/Form';
import { MapComponent } from './components/Map';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './App.scss';

function App() {
  const hamburger = <FontAwesomeIcon icon={faBars} />;
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null
  });

  const toggleMenu = () => document.getElementById('sidebar').classList.toggle('collapsed');

  return (
    <div className="app d-flex">
      <aside id="sidebar" className="sidebar">
        <span className="hamburger" onClick={toggleMenu}>{hamburger}</span>
        <Logo />
        <Description />
        <Form setCoordinates={setCoordinates} />
      </aside>
      <main className="content">
        <Header setCoordinates={setCoordinates} />
        <MapComponent coordinates={coordinates} />
      </main>
    </div>
  );
}

export default App;
