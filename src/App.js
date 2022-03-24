import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import NavBar from './content/NavBar';
import Nasa from './content/Nasa';
import Fact from './content/Fact';
import About from './content/About';

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
        <NavBar />
      </div>
      <div id='photo'>
      {photoData && <Nasa photo={photoData} />}
      </div>
      <div id="fact">
        <Fact />
      </div>
      <div id='about'>
        <About />
      </div>
      <div>
        <NavBar />
      </div>
      <br />
    </div>
  );
}

export default App;
