// import * as React from 'react';
import Map, {Marker, Popup} from 'react-map-gl';

import React, { useState} from 'react';
import data from "../data.json"
import { FaTrash } from 'react-icons/fa';


function Tap() {
  const [viewport, setViewport] = useState({
    latitude: -1.236561,
    longitude: 36.898133,
    // width: "100vw",
    // height: "100vh",
    // scrollZoom:true,
    minZoom: 10
  })


  const [selectedtrash, setselectedtrash] = useState(null);
  return (
    <Map
    {...viewport}
    style={{width: '100%', height: '100%'}}
    mapStyle="mapbox://styles/elviskim18/cl8y9itdl00re14oblugukpmy"
    mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    
    onViewportChange={(nextviewport) => setViewport(nextviewport)}
    >
      

      {data.features.map((trash)=>(
        <Marker key={trash.id} latitude={trash.location.x} longitude={trash.location.y} >
          <button onClick={(e) =>{
          e.preventDefault();
          console.log("wee")
      
          setselectedtrash(trash)
          console.log("ouut")
         
        }}>
            <FaTrash />
          </button>
        </Marker>
      ))}

      {selectedtrash? (
        <Popup latitude={selectedtrash.location.x} longitude={selectedtrash.location.y}>
          <div>
            trash
          </div>
        </Popup>
      ) : null}
    </Map>
  
  );
}

export default Tap;
