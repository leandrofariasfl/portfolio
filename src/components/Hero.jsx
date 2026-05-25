import React from "react";

const Hero = () => {
  return (
    <header id="sobre" className="text-white mt-[-96px] w-full h-screen flex items-center justify-center">
      <div className="max-w-[1240px] w-full mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Imagem - lado esquerdo em desktop, topo em mobile */}
        <div className="flex flex-shrink-0">
          <img src="./src/assets/Foto_Leandro_de_Farias_Lima.jpg" alt="Leandro Farias" className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover" />
        </div>

        {/* Conteúdo - lado direito em desktop, embaixo em mobile */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2">Leandro Farias</h1>
          <h2 className="text-lg md:text-lg font-sans text-slate-300 mb-6">Aracaju, Sergipe</h2>
          <p className="text-sm md:text-base font-sans text-slate-300 leading-relaxed mb-6 max-w-md">
            As a passionate data scientist, with expertise in machine learning,
            AI, and data analytics, I thrive on the challenges of exploring
            complex data landscapes and uncovering meaningful patterns that drive
            innovation
          </p>
          
          {/* Links sociais */}
          <div className="flex gap-6">
            <a href="http://" className="hover:opacity-80 transition-opacity">
              <img src="/src/assets/icon-elsewhere-github-light-f2ca0d9c1d561a397d6813c123c89c34363fdd779ea7aaed50f46d409ad3cd0c 1.svg" alt="github" className="w-6 h-6" />
            </a>
            <a href="http://" className="hover:opacity-80 transition-opacity">
              <img src="/src/assets/icon-elsewhere-instagram-light-9aaca80ee099a4c63f91f86a88a1e970f4143dbeec87d1734a1f69f1d81f56d5 1.svg" alt="instagram" className="w-6 h-6" />
            </a>
            <a href="http://" className="hover:opacity-80 transition-opacity">
              <img src="/src/assets/icon-elsewhere-linkedin-light-97696cd7d286b01f0af63582dce0bc08833ced6958585e43ee20a8293e4dbf40 1.svg" alt="linkedin" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
