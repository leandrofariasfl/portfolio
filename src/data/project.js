import fotoPerfil from '../assets/Foto_Leandro_de_Farias_Lima.jpg'; 

export const PROJECTS_DATA = [
  { 
    id: 1, 
    title: 'Análise Preditiva de Churn', 
    description: 'Desenvolvimento de modelos de Machine Learning para previsão de cancelamento de clientes.', 
    category: ['ai/llms', 'automação'], 
    image: fotoPerfil, // Usando a variável importada acima, nunca a string direta
    link: '#' 
  },
  { 
    id: 2, 
    title: 'E-commerce Dashboard', 
    description: 'Painel administrativo completo com gráficos interativos e inteligência de negócios.', 
    category: ['front-end', 'fullstack'], 
    image: fotoPerfil, 
    link: '#' 
  },
  { 
    id: 3, 
    title: 'Plataforma de Ensino IA', 
    description: 'Web Design / Usability Testing aplicado a sistemas de educação à distância.', 
    category: ['front-end'], 
    image: fotoPerfil, 
    link: '#' 
  }
];