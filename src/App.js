import React from 'react'
import Navbar from './Navbar'
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ContactForm from "./pages/ContactForm";
function App() {
  return (
    <>
      <Navbar/>
        <Home/>
        <About/>
      <Skills/>
        <Projects/>
        <ContactForm/>
    </>
  )
}

export default App
