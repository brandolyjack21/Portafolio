import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Portafolio from "./components/Portafolio";
import Contac from "./components/Contac";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Application/> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Application() {

  return(
    <>
      <header>
        <Nav/>
      </header>
      <main>
        <Home id='home'/>
        <About id='about'/>
        <Portafolio id='portafolio'/>
        <Contac id='contac'/>
      </main>
      <footer></footer>
    </>
  )
}

export default App;
