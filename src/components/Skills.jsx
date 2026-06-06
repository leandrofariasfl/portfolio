import React from 'react';
import { SKILLS_DATA } from '../data/skills';

const Skills = () => {
  return (
  
    <section id="skills" className="w-full bg-fundo-principal py-20 px-4 md:py-28 ">
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
        
        <div className="mb-4">
          <span className="px-5 py-1.5 bg-fundo-elemento/50 border border-fundo-elemento/40 text-texto-corpo text-xs font-medium rounded-full font-mono tracking-wide">
            Skills
          </span>
        </div>

        <div className="text-center mb-16">
          <p className="text-sm sm:text-base text-texto-corpo tracking-wide font-normal max-w-xl mx-auto">
            Ferramentas e tecnologias do meu arsenal de desenvolvimento
          </p>
        </div>

        <div className="w-full flex flex-col gap-12">
          {SKILLS_DATA.map((group, groupIndex) => (
            <div key={groupIndex} className="w-full">

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-6 gap-y-10 justify-items-center">
                {group.techs.map((tech, techIndex) => {
                  const IconComponent = tech.icon; 
                  
                  return (
                    <div 
                      key={techIndex} 
                      className="flex flex-col items-center justify-center group w-24 transition-all duration-300"
                    >
                      <div className="text-4xl sm:text-5xl mb-3 transition-transform duration-300 ease-out group-hover:-translate-y-1.5 filter brightness-95 group-hover:brightness-110">
                        <IconComponent style={{ color: tech.color }} />
                      </div>
                      
                      <span className="text-xs sm:text-sm font-normal text-texto-corpo text-center tracking-tight transition-colors duration-300 group-hover:text-texto-titulo">
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