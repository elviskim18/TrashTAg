// import React, { useState } from 'react';

// import Map from './Map';
// import Map from 'react-map-gl';
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Main from "./Components/Main";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";

function App() {
 
  
  return (

    <div className="App">
    
    <Routes>
      <Route path='/' element={<Login/>}>
      <Route path='///' element={<Signin/>}/>
      <Route path='signup' element={<Signup/>}/>
    </Route>
    </Routes>
    <Routes>
    
      <Route path='/login' element={<Login/>}>
      <Route path="signup" element={<Signup/>} />
      <Route path="signin" element={<Signin/>} />
      <Route path="/login/" element={<Signin/>} />
      </Route>

    </Routes>
    <Routes>
      <Route path='/home/*' element={<Main/>}/>
    </Routes>
    
  
   


    </div>
  );
}

export default App;
