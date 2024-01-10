import { useState } from "react";
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Buy from './components/Buy'
import "./styles.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Purchase" element={<Buy />} />
      
    </Routes>
  );
};

export default App;
