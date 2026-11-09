import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/hero';
import SoftSkillsCard from './components/SoftSkillsCard';
import HardSkillsCard from './components/HardSkillsCard';
import PactoSocial from './components/PactoSocial';
import PitchModal from './components/PitchModal';
import Footer from './components/Footer';
import HistoricoImpacto from './components/HistoricoImpacto';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [propostasEvolab, setPropostasEvolab] = useState(3);
  const [bolsasDreamtech, setBolsasDreamtech] = useState(9);

  const handlePitchSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setPropostasEvolab((prev) => prev + 1);
      setBolsasDreamtech((prev) => prev + 4);
      setTimeout(() => {
        setSubmitted(false);
        setModalOpen(false);
      }, 1500);
    }, 800);
  };

  return (
    /* O segredo do enquadramento da Imagem 1 está aqui: max-w-6xl mx-auto */
    <div className="w-full min-h-screen bg-[#050507] text-[#f4f4f5] flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-6 font-sans selection:bg-[#ff2a2a] selection:text-black">
      
      <div className="w-full max-w-6xl mx-auto space-y-8 my-auto">
        {/* 1. Header / Navbar */}
        <Header onOpenModal={() => setModalOpen(true)} />

        {/* 2. Hero Section */}
        <Hero />
        
        {/* 3. Grid Bento Box Enquadrado */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full items-stretch">
          <div className="lg:col-span-6 flex">
            <SoftSkillsCard />
          </div>
          <div className="lg:col-span-6 flex">
            <HardSkillsCard onOpenModal={() => setModalOpen(true)} />
          </div>
        </div>

        {/* 4. Card do Pacto Social */}
        <div className="w-full">
          <PactoSocial 
            propostasEvolab={propostasEvolab} 
            bolsasDreamtech={bolsasDreamtech} 
          />
        </div>
        
        {/* 5. Log de Execução (NOVO) */}
        <HistoricoImpacto />

        {/* 6. Rodapé */}
        <Footer />
      </div>

      {/* 7. Modal de Pitch */}
      <PitchModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        onSubmit={handlePitchSubmit} 
        submitted={submitted} 
      />
    </div>
  );
}

export default App;