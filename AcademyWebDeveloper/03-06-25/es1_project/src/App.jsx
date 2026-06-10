import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Navbar } from './Navbar.jsx'
import { Hero } from './Hero.jsx'
import { Card } from './Card.jsx'

function App() {

  const styleConfig = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '20px'
  };

  return (
    <>
      <Navbar />
      <Hero />
      <div className="card-container" style={styleConfig}>
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}

export default App
