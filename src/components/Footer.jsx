import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#000300] text-slate-400 py-12 px-4 border-t border-slate-900">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Lado Esquerdo: Marca & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h2 className="text-xl font-bold text-white font-mono tracking-tight">
            Leandro.dev
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 text-center md:text-left">
            &copy; {currentYear} Leandro Farias. Todos os direitos reservados.
          </p>
        </div>

        {/* Centro: Links Rápidos de Navegação (Bom para UX) */}
        <nav aria-label="Navegação do rodapé">
          <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <li>
              <a href="#sobre" className="hover:text-blue-400 transition-colors">Sobre</a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-blue-400 transition-colors">Portfólio</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Habilidades</a>
            </li>
            <li>
              <a href="#contato" className="hover:text-blue-400 transition-colors">Contato</a>
            </li>
          </ul>
        </nav>

        {/* Lado Direito: Ícones das Redes Sociais */}
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/seu-usuario" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Acessar GitHub"
            className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-800/50 transition-all duration-200"
          >
            <FaGithub size={18} />
          </a>
          <a 
            href="https://linkedin.com/in/seu-usuario" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Acessar LinkedIn"
            className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-slate-700 hover:bg-slate-800/50 transition-all duration-200"
          >
            <FaLinkedin size={18} />
          </a>
          <a 
            href="https://instagram.com/seu-usuario" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="Acessar Instagram"
            className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-pink-400 hover:border-slate-700 hover:bg-slate-800/50 transition-all duration-200"
          >
            <FaInstagram size={18} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

