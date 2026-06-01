/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fundo: {
          principal: 'rgba(3, 7, 18, 1)',
          secundario: 'rgba(17, 24, 39, 1)',
          elemento: 'rgba(55, 65, 81, 1)',
          cardTexto: 'rgba(31, 41, 55, 1)',
          // 💡 Fundo das tags: ligeiramente mais escuro que o elemento para dar profundidade
          tag: 'rgba(17, 24, 39, 0.6)', 
        },
        texto: {
          titulo: 'rgba(249, 250, 251, 1)',
          corpo: 'rgba(209, 213, 219, 1)',
          hover: 'rgba(56, 189, 248, 1)', // O ciano estelar que escolhemos
          // 💡 Texto das tags: um cinza médio/claro, mas que ganha a cor de destaque no hover do card!
          tag: 'rgba(156, 163, 175, 1)', 
        }
      },
    },
  },
  plugins: [],
};