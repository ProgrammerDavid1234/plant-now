import { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Advert from "./components/Advert";
import Form from "./components/Form";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Advert />
      <Form />
      <Footer />
    </div>
  );
};

export default App;
