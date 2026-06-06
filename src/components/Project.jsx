import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/project'; 
import ProjectCard from './ProjectCard'; 

function Projects() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');

  const categorias = [
    { label: 'Todos', value: 'Todos' },
    { label: 'Front-end', value: 'front-end' },
    { label: 'Back-end', value: 'back-end' },
    { label: 'Fullstack', value: 'fullstack' },
    { label: 'Automação', value: 'automação' },
    { label: 'AI/LLMs', value: 'ai/llms' }
  ];

  const projetosFiltrados = categoriaAtiva === 'Todos'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(projeto => projeto.category.includes(categoriaAtiva));

  return (
    <section id="portfolio" className="max-w-5xl mx-auto px-4 py-24">
      
      <div className="text-center mb-12">
        <div className="mb-4">
          <span className="px-5 py-1.5 bg-fundo-elemento/50 border border-fundo-elemento/40 text-texto-corpo text-xs font-medium rounded-full font-mono tracking-wide">
            Portfólio
          </span>
        </div>
        <p className="mt-3 text-texto-corpo max-w-xl mx-auto text-sm">
          Uma seleção de soluções desenvolvidas. 
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-20">
        {categorias.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setCategoriaAtiva(cat.value)}
            className={`px-5 py-2 rounded-full text-xs font-medium font-mono tracking-wide border transition-all duration-300 cursor-pointer ${
              categoriaAtiva === cat.value
                ? 'bg-texto-hover/10 text-texto-hover border-texto-hover shadow-lg shadow-texto-hover/5'
                : 'bg-fundo-elemento/40 text-texto-corpo border-fundo-elemento/60 hover:text-texto-titulo hover:border-fundo-elemento'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-24 md:gap-32">
        {projetosFiltrados.map((projeto, index) => (
          <ProjectCard 
            key={projeto.id}
            projeto={projeto}
            inverter={index % 2 !== 0} 
          />
        ))}
      </div>

    </section>
  );
}

export default Projects;