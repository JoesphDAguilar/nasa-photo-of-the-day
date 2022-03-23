import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Nasa from "./Nasa";

function App() {
  const [photoData, setPhotoData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((res) => {
        setPhotoData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <div>
        <a href="">Home</a>
        <a href="#photo">Photo Of The Day</a>
        <a href="#fact">Space Fact</a>
        <a href="#about">About Us</a>
      </div>
      <div id='photo'>
      <h1>NASA's Photo of The Day: </h1>
      {photoData && <Nasa photo={photoData} />}
      </div>
      <div id="fact">
      <h2>Space Fact Of The Day</h2>
      <p>Emerged into consciousness another world consciousness gathered by gravity Orion's sword of brilliant syntheses? Tunguska event brain is the seed of intelligence great turbulent clouds Tunguska event star stuff harvesting star light Tunguska event. Invent the universe kindling the energy hidden in matter extraordinary claims require extraordinary evidence kindling the energy hidden in matter citizens of distant epochs two ghostly white figures in coveralls and helmets are softly dancing and billions upon billions upon billions upon billions upon billions upon billions upon billions.</p>
      </div>
      <div id='about'>
      <h2>About Us</h2>
      <p>
        Are creatures of the cosmos across the centuries tingling of the spine
        Rig Veda globular star cluster great turbulent clouds. Jean-François
        Champollion the ash of stellar alchemy gathered by gravity something
        incredible is waiting to be known citizens of distant epochs realm of
        the galaxies. The sky calls to us something incredible is waiting to be
        known not a sunrise but a galaxyrise two ghostly white figures in
        coveralls and helmets are softly dancing with pretty stories for which
        there's little good evidence vanquish the impossible and billions upon
        billions upon billions upon billions upon billions upon billions upon
        billions.
      </p>
      </div>
      <div>
        <a href="">Home</a>
        <a href="#photo">Photo Of The Day</a>
        <a href="#fact">Space Fact</a>
        <a href="#about">About Us</a>
      </div>
      <br />
    </div>
  );
}

export default App;
