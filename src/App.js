import React from 'react'
import Navbar from './Navbar'
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
function App() {
  return (
    <>
      <Navbar/>
        <Home/>
        <About/>
      <Skills/>
        <Projects/>
    </>
  )
}

export default App
