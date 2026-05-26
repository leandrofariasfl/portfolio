import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const ProjectCard = ({ title, description, category, image, link }) => {
  return (
    // Melhoria de Acessibilidade e UX: O card inteiro agora é uma tag <a>. 
    // Fica muito mais fácil de clicar no mobile (área de toque maior).
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-slate-900 rounded-xl overflow-hidden border border-slate-800/60 hover:border-slate-700 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {/* Imagem com overlay */}
      <div className="relative overflow-hidden bg-slate-800 aspect-video w-full">
        <img 
          src={image} 
          alt={`Amostra do projeto ${title}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy" // Boa prática de performance para carregar imagens sob demanda
        />
        
        {/* Ícone do link sobreposto simplificado e mais elegante */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
          <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 shadow-md">
            <FiArrowUpRight size={20} className="text-white" />
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col flex-1 p-5">
        {/* Categorias no topo dão um ar mais "SaaS/Dashboard" moderno */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {category.map((cat, index) => (
            <span 
              key={index} 
              className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-0.5 bg-slate-800 text-blue-400 rounded-md border border-slate-700/50"
            >
              {cat}
            </span>
          ))}
        </div>

        <h3 className="text-base md:text-lg font-bold text-white mb-2 line-clamp-1 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-xs md:text-sm text-slate-400 leading-relaxed line-clamp-3 flex-1">
          {description}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;