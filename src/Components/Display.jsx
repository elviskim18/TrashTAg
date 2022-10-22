import React from 'react';
import Home from './Home';
import Dispose from './Dispose';
import Notifications from './Notifications';
import About from './About';
import { Routes, Route } from "react-router-dom";


function Display() {
  return (
    <div className="Display">
      <Routes>
        <Route path="/dashboard" element={<Home/>} />

        <Route path="/notifications" element={<Notifications />} />

        <Route path="/dispose" element={<Dispose />} />

        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default Display
