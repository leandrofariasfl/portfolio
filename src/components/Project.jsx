import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/project'; // Importa os dados brutos
import ProjectCard from './ProjectCard'; // Importa o card visual

function Projects() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Todos');

  // Categorias exatamente como solicitadas nas diretrizes (em minúsculo no código para bater com os dados)
  const categorias = [
    { label: 'Todos', value: 'Todos' },
    { label: 'Front-end', value: 'front-end' },
    { label: 'Back-end', value: 'back-end' },
    { label: 'Fullstack', value: 'fullstack' },
    { label: 'Automação', value: 'automação' },
    { label: 'AI/LLMs', value: 'ai/llms' }
  ];

  // Lógica de filtragem adaptada para array de categorias (.includes)
  const projetosFiltrados = categoriaAtiva === 'Todos'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(projeto => projeto.category.includes(categoriaAtiva));

  return (
    <section id="portfolio" className="max-w-5xl mx-auto px-4 py-24 border-t border-slate-900">
      
      {/* CABEÇALHO */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white tracking-tight sm:text-4xl">
          Projetos em Destaque
        </h2>
        <p className="mt-3 text-slate-400 max-w-xl mx-auto text-sm">
          Uma seleção de aplicações reais desenvolvidas com foco em arquitetura limpa e experiência de usuário premium.
        </p>
      </div>
      {/* FILTROS (ESTILO PÍLULA) */}
      <div className="flex flex-wrap justify-center gap-2 mb-20">
        {categorias.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setCategoriaAtiva(cat.value)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide border transition-all duration-200 cursor-pointer ${
              categoriaAtiva === cat.value
                ? 'bg-[rgb(55,65,81)] text-[rgb(209,213,219)] text-sm font-inter font-medium rounded-xl px-5 py-1 shadow-lg shadow-cyan-500/5'
                : 'bg-[rgb(55,65,81)] text-[rgb(209,213,219)] text-sm font-inter font-medium rounded-xl px-5 py-1 border-slate-800/80 hover:text-white hover:border-slate-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* LISTA HORIZONTAL ZIG-ZAG */}
      <div className="flex flex-col gap-24 md:gap-32">
        {projetosFiltrados.map((projeto, index) => (
          <ProjectCard 
            key={projeto.id}
            projeto={projeto}
            inverter={index % 2 !== 0} // Passa true se for o 2º, 4º elemento...
          />
        ))}
      </div>

    </section>
  );
}

export default Projects;