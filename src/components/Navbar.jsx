import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [nav]);

  return (
    
    <nav className="fixed top-0 left-0 right-0 z-50 bg-fundo-principal/10 border-none border-b">
      
      
      <div className="absolute inset-0 backdrop-blur-md bg-fundo-principal/80 -z-10" />

      <div className="flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-texto-titulo relative z-10">
        
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl md:text-3xl text-texto-titulo font-bold font-mono">.dev</h1>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-2">
          <li><a href="#sobre" className="p-4 block text-texto-corpo hover:text-texto-hover transition-colors duration-300">Sobre</a></li>
          <li><a href="#portfolio" className="p-4 block text-texto-corpo hover:text-texto-hover transition-colors duration-300">Portfólio</a></li>
          <li><a href="#skills" className="p-4 block text-texto-corpo hover:text-texto-hover transition-colors duration-300">Habilidades</a></li>
          <li><a href="#contato" className="p-4 block text-texto-corpo hover:text-texto-hover transition-colors duration-300">Contato</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          onClick={handleNav} 
          className="block md:hidden text-texto-titulo focus:outline-none p-2 z-[60]" 
          aria-label={nav ? "Fechar menu" : "Abrir menu"}
        >
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>

        <div className={`fixed inset-y-0 right-0 w-[70%] sm:w-[50%] md:w-[40%] h-full border-l border-fundo-elemento/30 bg-fundo-principal z-50 transition-all duration-300 ease-in-out backdrop-blur-none ${
          nav ? 'translate-x-0' : 'translate-x-full'
        }`}>
          
          <div className="flex items-center justify-between h-20 px-6 border-b border-fundo-elemento/20">
            <h1 className="text-xl font-bold text-texto-titulo font-mono">.dev</h1>
          </div>

          <ul className="p-6 flex flex-col gap-2 uppercase text-sm tracking-wider">
            <li><a href="#sobre" onClick={handleNav} className="py-4 block text-texto-corpo hover:text-texto-hover font-medium border-b border-fundo-elemento/10 transition-colors">Sobre</a></li>
            <li><a href="#portfolio" onClick={handleNav} className="py-4 block text-texto-corpo hover:text-texto-hover font-medium border-b border-fundo-elemento/10 transition-colors">Portfólio</a></li>
            <li><a href="#skills" onClick={handleNav} className="py-4 block text-texto-corpo hover:text-texto-hover font-medium border-b border-fundo-elemento/10 transition-colors">Habilidades</a></li>
            <li><a href="#contato" onClick={handleNav} className="py-4 block text-texto-corpo hover:text-texto-hover font-medium transition-colors">Contato</a></li>
          </ul>
        </div>
        
      
        <div 
          onClick={handleNav} 
          className={`fixed inset-0 bg-black/60 backdrop-blur-md z-40 md:hidden transition-all duration-300 ${
            nav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`} 
        />
      </div>
    </nav>
  );
}

export default Navbar;