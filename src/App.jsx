import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Portafolio from './components/Portafolio'
import Contac from './components/Contac'

function App() {

  return (
    <>
      <header>
        <Nav/>
      </header>
      <main>
        <Home/>
        <About/>
        <Portafolio/>
        <Contac/>
      </main>
      <footer></footer>
    </>
  )
}

export default App
