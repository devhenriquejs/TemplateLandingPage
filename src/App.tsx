// src/App.tsx
import React from 'react';
import './index.css'; // Importa o CSS global

// Importa os componentes de seção da nova estrutura de pastas
import Header from './components/Header/index';
import ProblemSolution from './components/ProblemSolution/index'; // Ainda vamos criar
import Benefits from './components/Benefits/styles';             // Ainda vamos criar
import SocialProof from './components/SocialProof';         // Ainda vamos criar
import AboutSection from './components/AboutSection';       // Ainda vamos criar
import FormContact from './components/FormContact';         // Ainda vamos criar
import Footer from './components/Footer';                   // Ainda vamos criar

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <ProblemSolution />
        <Benefits />
        {/* <SocialProof /> */}
        {/* <AboutSection /> */}
        {/* <FormContact /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;