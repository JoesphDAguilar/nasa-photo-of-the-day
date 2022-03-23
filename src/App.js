import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'

import Nasa from './Nasa'



function App() {
const [photoData, setPhotoData] = useState([]);

useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      photoData(res.data);
    })
    .catch(err => console.error(err))
}, [])

  return (
    <div className="App">
      {photoData && <Nasa />}
    </div>
  );
}

export default App;
