import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    // Mudamos para fixed para garantir que ele fique no topo sem precisar de gambiarras de margem negativa no Hero
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#000300]/90 backdrop-blur-md border-b border-gray-800">
      <div className="flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white">
        {/* Corrigido text-1xl para text-xl */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold font-mono">Leandro.dev</h1>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-2">
          <li><a href="#sobre" className="p-4 block text-slate-300 hover:text-white transition-colors">Sobre</a></li>
          <li><a href="#portfolio" className="p-4 block text-slate-300 hover:text-white transition-colors">Portfólio</a></li>
          <li><a href="#skills" className="p-4 block text-slate-300 hover:text-white transition-colors">Habilidades</a></li>
          <li><a href="#contato" className="p-4 block text-slate-300 hover:text-white transition-colors">Contato</a></li>
        </ul>

        {/* Mobile Menu Button - Alterado para <button> por acessibilidade */}
        <button 
          onClick={handleNav} 
          className="block md:hidden text-white focus:outline-none p-2"
          aria-label={nav ? "Fechar menu" : "Abrir menu"}
        >
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>

        {/* Mobile Navigation Menu - Adicionado z-50 e transição suave de opacidade */}
        <div className={`fixed inset-y-0 left-0 w-[70%] sm:w-[60%] h-full border-r border-gray-900 bg-[#000300] z-50 transition-all duration-300 ease-in-out ${nav ? 'translate-x-0' : '-translate-x-full'}`}>
          <h1 className="text-2xl font-bold text-white m-6 font-mono">Leandro.dev</h1>
          <ul className="uppercase p-4">
            <li className="border-b border-gray-800"><a href="#sobre" onClick={handleNav} className="p-4 block text-slate-300 hover:text-white">Sobre</a></li>
            <li className="border-b border-gray-800"><a href="#portfolio" onClick={handleNav} className="p-4 block text-slate-300 hover:text-white">Portfólio</a></li>
            <li className="border-b border-gray-800"><a href="#skills" onClick={handleNav} className="p-4 block text-slate-300 hover:text-white">Habilidades</a></li>
            <li className="padding-none"><a href="#contato" onClick={handleNav} className="p-4 block text-slate-300 hover:text-white">Contato</a></li>
          </ul>
        </div>
        
        {/* Backdrop escuro ao abrir o menu mobile */}
        {nav && <div onClick={handleNav} className="fixed inset-0 bg-black/50 z-40 md:hidden" />}
      </div>
    </nav>
  );
}

export default Navbar;