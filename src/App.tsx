
import './index.css'; // Importa o CSS global

// Importa os componentes de seção da nova estrutura de pastas
import Header from './components/Header/index';
import ProblemSolution from './components/ProblemSolution/index'; // Ainda vamos criar
import BenefitsOrbit from './components/BenefitsOrbit/index';             // Ainda vamos criar
import SocialProof from './components/SocialProof/index';         // Ainda vamos criar
import AboutSection from './components/AboutSection/index';       // Ainda vamos criar
import FormContact from './components/FormContact/index';         // Ainda vamos criar
import Footer from './components/Footer';                   // Ainda vamos criar

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <ProblemSolution />
        <BenefitsOrbit />
        <SocialProof />
        <AboutSection />
        <FormContact />
      </main>
      <Footer />
    </div>
  );
}

export default App;