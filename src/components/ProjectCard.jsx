import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

function ProjectCard({ projeto, inverter }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center group">
      
      {/* IMAGEM / MOCKUP */}
      <div className={`w-full aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/80 relative shadow-2xl transition-all duration-500 hover:border-slate-700/50 group-hover:-translate-y-1 ${
        inverter ? 'md:order-last' : ''
      }`}>
        <img 
          src={projeto.image} 
          alt={projeto.title} 
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* CONTEÚDO TEXTUAL */}
      <div className="flex flex-col h-full justify-center">
        {/* Mostra as categorias do projeto separadas por barra */}
        <span className="text-xs font-mono tracking-widest text-cyan-500 uppercase mb-2 block">
          {projeto.category.join(' / ')}
        </span>
        
        <h3 className="text-lg md:text-xl font-bold text-[rgb(249,250,251)] tracking-tight mb-4 group-hover:text-blue-600 transition-colors duration-300">
          {projeto.title}
        </h3>
        
        <p className="text-[rgb(209,213,219)] text-base leading-relaxed mb-6 font-normal">
          {projeto.description}
        </p>
        
        {/* BADGES */}
        <div className="flex flex-wrap gap-2 mb-6">
          {projeto.tags?.map((tag) => (
            <span 
              key={tag}
              className="bg-[rgb(55,65,81)] text-[rgb(209,213,219)] text-normal text-sm font-inter font-medium rounded-xl px-5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="flex items-center gap-4 pt-2 border-t border-slate-900/60 mt-auto">
          <a 
            href={projeto.github}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white transition-colors p-1"
            title="Código Fonte"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.48.0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.0.069-.608.009 1.005.454 1.532 1.005 1.532.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.479C19.138 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>

          <a 
            href={projeto.link}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white transition-colors p-1"
            title="Visualizar Projeto"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>

    </div>
  );
}

export default ProjectCard;