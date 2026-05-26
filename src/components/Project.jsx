import React, { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';
import  {PROJECTS_DATA} from '../data/project'


// Padronize as slugs idênticas às categorias dos projetos para evitar replaces confusos
const CATEGORIES = ['todos', 'front-end', 'back-end', 'fullstack', 'automação', 'ai/llms'];

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  // PERFORMANCE: useMemo garante que o filtro só rode se a categoria selecionada mudar
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'todos') return PROJECTS_DATA;
    return PROJECTS_DATA.filter(project => 
      project.category.includes(selectedCategory)
    );
  }, [selectedCategory]);

  return (
    <section id="portfolio" className="w-full bg-slate-950 py-16 px-4 md:py-24">
      <div className="max-w-[1240px] mx-auto w-full flex flex-col">
        
        {/* Título */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Portfólio
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">Conheça alguns dos meus principais projetos</p>
        </div>

        {/* Botões de Categoria - Adicionado scroll horizontal suave se as categorias forem muitas no mobile */}
        <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 mb-10 pb-3 overflow-x-auto no-scrollbar mask-gradient">
          {CATEGORIES.map((category) => (
            <button 
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all text-xs sm:text-sm whitespace-nowrap border ${
                selectedCategory === category
                  ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {category === 'todos' ? 'Todos' : category.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Grid de Projetos - Ajustado espaçamento e estados vazios */}
        {filteredProjects.length === 0 ? (
          <p className="text-center text-slate-500 my-12">Nenhum projeto encontrado nesta categoria.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                title={project.title} 
                description={project.description} 
                category={project.category} 
                image={project.image} 
                link={project.link} 
              />
            ))}
          </div>
        )}

        {/* Botão View All */}
        <div className="flex justify-center">
          <button className="px-8 py-3 border border-slate-700 text-slate-300 rounded-full hover:bg-slate-900 hover:text-white hover:border-slate-500 transition-all font-medium text-sm shadow-sm">
            Ver todos no GitHub
          </button>
        </div>
      </div>
    </section>
  );
}; 

export default Project;