import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Buy from './components/Buy';
import Confirmation from './components/Confirmation';

import "./styles.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Purchase" element={<Buy />} />
      <Route path="/Confirmation" element={<Confirmation />} />
    </Routes>
  );
};

export default App;
