import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import MyWork from './components/MyWork/MyWork'
import Footer from './components/Footer/Footer'
import Education from './components/Education/Education'
import Details from './components/Details/Details'





const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <MyWork/>
      <Details/>
      <Footer/>
    </div>
  )
}

export default App
