// src/components/Skills.jsx
import React from 'react';
import { SKILLS_DATA } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="w-full bg-[#000300] py-16 px-4 md:py-24 border-t border-slate-900">
      <div className="max-w-[1240px] mx-auto w-full flex flex-col">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Habilidades & Tecnologias
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS_DATA.map((group, index) => (
            <div key={index} className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-blue-400 mb-6 border-b border-slate-800 pb-2">
                {group.category}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {group.techs.map((tech, techIndex) => {
                  // Renomeamos para Letra Maiúscula para o React entender que é um componente
                  const IconComponent = tech.icon; 
                  
                  return (
                    <div key={techIndex} className="flex flex-col items-center justify-center p-4 bg-slate-900 rounded-xl border border-slate-800/50 group">
                      <div className="text-3xl sm:text-4xl mb-2.5 transition-transform duration-300 group-hover:-translate-y-1">
                        {/* Renderização dinâmica e segura do ícone com a cor injetada */}
                        <IconComponent style={{ color: tech.color }} />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-300 text-center">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;