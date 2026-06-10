import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Header } from './Header.jsx'
import { Footer } from './Footer.jsx'
import { TeamCard } from './TeamCard.jsx'

function App() {

  return (
    <>
      <Header />
      <div className="divCards">
        <TeamCard
          name="Claudio Esposito"
          role="Developer"
          bio="Appassionato di tecnologia e sviluppo web."
          imageUrl="https://media.licdn.com/dms/image/v2/D4D35AQG8TUaeCFfx2g/profile-framedphoto-shrink_800_800/B4DZzJ0IZ_G0Ak-/0/1772912412509?e=1781100000&v=beta&t=1h1PRe0s_7ADE6L3mRZpIaMuuorIOZO6SFPUetKazwY"
          isPresent={true}
        />
        <TeamCard
          name="Maria Rossi"
          role="Designer"
          bio="Esperta in design grafico e UX/UI."
          imageUrl="https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/3.JPG?t=1777953569"
          isPresent={false}
        />
        <TeamCard
          name="Luca Bianchi"
          role="Project Manager"
          bio="Responsabile della gestione dei progetti e del team."
          imageUrl="https://images.surferseo.art/b83a6c68-59ac-433d-8f04-beb0bae881cf.jpeg"
          isPresent={true}
        />
      </div>
      <Footer />
    </>
  )
}

export default App
