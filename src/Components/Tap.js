
import Map, {Marker, Popup, GeolocateControl } from 'react-map-gl';

import React, { useState, useEffect} from 'react';
import data from "../data.json"
import { FaTrash } from 'react-icons/fa';


function Tap({setformdata, formdata}) {
  const [viewport, setViewport] = useState({})
  // latitude: -1.236561,
    // longitude: 36.898133,
  
 
    

    useEffect(() => {
      
      navigator.geolocation.getCurrentPosition((pos) => {
       

        console.log(pos.coords.latitude)
        // setformdata({...formdata,latitude:'877', longitude:'979'})

        setViewport({
          ...viewport,
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          minZoom: 10
        });
      });
    }, []);





  const [selectedtrash, setselectedtrash] = useState(null);
  return (
    <Map
    {...viewport}
    style={{width: '100%', height: '100%'}}
    mapStyle="mapbox://styles/elviskim18/cl8y9itdl00re14oblugukpmy"
    mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    
    // onViewportChange={(nextviewport) => setViewport(nextviewport)}
    >
      <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />

      {data.features.map((trash)=>(
        <Marker key={trash.id} latitude={trash.location.x} longitude={trash.location.y} >
          {/* longitude ={viewport.longitude}
          latitude ={viewport.latitude} */}
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
