import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Welcome } from './Welcome.jsx'
import { ProfileCard } from './Profilo.jsx'
import { ProductDisplay } from './ProductDisplay.jsx'
import { AlertButton } from './AlertButton';

function App() {


  // const userData = { firstName: "Anna", lastName: "Rossi", role: "Developer" };
  // const userSkills = ["React", "JavaScript", "CSS"];

  // return (
  //   <ProfileCard user={userData} skills={userSkills} />
  // );

  // return (
  //   <ProductDisplay name="Smartphone XYZ" price="499€" />
  // )

  const handleAlert = () => {
    alert("Azione rilevata dal componente principale!");
  };

  return (
    <div className="control-panel">
      {/* Passiamo il riferimento alla funzione handleAlert */}
      <AlertButton label="Avvia Processo" onAction={handleAlert} />
    </div>
  );
}

export default App