import React from 'react';
import { MdPortableWifiOff } from 'react-icons/md';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Project from './components/Project.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  // Lista simulada de projetos (isso é bem comum no React)
 /* const projetos = [
    { id: 1, titulo: "Meu Primeiro Link", desc: "Um projeto simples usando HTML e CSS." },
    { id: 2, titulo: "App de Clima", desc: "Consumindo uma API de tempo com JavaScript." },
    { id: 3, titulo: "Este Portfólio", desc: "Criado com React e Tailwind CSS!" },
  ]; */

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      
      {/* 1. NAVBAR / MENU */}
      <Navbar />
      <Hero />
      <Project />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;