import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Treinadores";
import { Projects } from "./components/Modulos";
import { Footer } from "./components/Footer";
import React, {useEffect } from 'react';
import { Newsletter } from './components/Newsletter';

function App() {
  useEffect(() =>{
    fetch("/api")
    .then((res) => res.json())
    .then((data) => {console.log(data)})
  }, [])
  
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
