import React from 'react';
import ProjectCard from './ProjectCard';

const Project = () => {
  const listProjects = [
    { id: 1, title: 'Projeto 1', description: 'Descrição do projeto  1', category: ['frontend', 'backend', 'fullstack', 'automação'], image: '', link: '', }
  ];

  return (
    <section id="portfolio" className="w-full h-screen bg-slate-900 py-16 px-4">
        <div className="w-ful mx-auto">
            <h1>Portfólio</h1>
            <div>
    
            </div>
        </div>  
    </section>
  )
};  

export default Project;