import React from "react";
import fotoPerfil from "/src/assets/Foto_Leandro_de_Farias_Lima.jpg";
import githubIcon from "/src/assets/icon-elsewhere-github-light-f2ca0d9c1d561a397d6813c123c89c34363fdd779ea7aaed50f46d409ad3cd0c 1.svg";
import instagramIcon from "/src/assets/icon-elsewhere-instagram-light-9aaca80ee099a4c63f91f86a88a1e970f4143dbeec87d1734a1f69f1d81f56d5 1.svg";
import linkedinIcon from "/src/assets/icon-elsewhere-linkedin-light-97696cd7d286b01f0af63582dce0bc08833ced6958585e43ee20a8293e4dbf40 1.svg";

const Hero = () => {
  return (
   
    <section id="sobre" className="text-texto-corpo w-full pt-24 min-h-screen flex items-center justify-center bg-fundo-principal">
      <div className="max-w-[1240px] w-full mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 py-12">
        
        <div className="flex-shrink-0 order-first md:order-none">
          <div className="w-36 h-36 md:w-52 md:h-52 lg:w-64 lg:h-64 rounded-full p-1 bg-gradient-to-r flow-from-indigo-500 to-purple-500"> 
            
            <img 
              src={fotoPerfil} 
              alt="Foto de perfil de Leandro Farias" 
              className="w-full h-full rounded-full object-cover" 
            />
          </div>
        </div>

        <div className="flex flex-col justify-center text-center md:text-left items-center md:items-start">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-texto-titulo tracking-tight mb-2">
            Leandro Farias
          </h1>
          <p className="text-sm md:text-base text-texto-corpo leading-relaxed mb-6 max-w-md">
            Estudante de Sistemas de informação, com experiência em projetos front-end e automação. Busco cenários do dia a dia para solucionar problemas reais através de tecnologia moderna, eficiência e inovação.
          </p>
          
          <div className="flex gap-5">
            <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform p-1">
              <img src={githubIcon} alt="Acessar GitHub" className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/seu-usuario" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform p-1">
              <img src={instagramIcon} alt="Acessar Instagram" className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/seu-usuario" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform p-1">
              <img src={linkedinIcon} alt="Acessar LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;