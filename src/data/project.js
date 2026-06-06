import fotoPerfil from '../assets/Foto_Leandro_de_Farias_Lima.jpg'; 
import fotoTarefas from '../assets/img-list.png';
import fotojogoZeroUm from '../assets/img-zero-um.png';
import fotoNoticias from '../assets/img-noticias.png';
import fotoCalculadora from '../assets/img-calculadora.png';
import fotoLampada from '../assets/img-lampada.png';

export const PROJECTS_DATA = [
  { 
    id: 1, 
    title: 'Portal de Notícias', 
    description: 'Landing page desenvolvida com foco em arquitetura de layout responsivo (Mobile-First). Entrega alta performance, semântica limpa e otimização visual para telas de qualquer tamanho.', 
    category: ['front-end'], 
    tags: ['Html', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Figma', 'Git'],
    image: fotoNoticias, 
    github: '#',
    link: '#' 
  },
  { 
    id: 2, 
    title: 'Gerenciador de Tarefas (To-Do List)', 
    description: 'Desenvolvimento de modelos Aplicação de produtividade com operações completas de CRUD (Criar, Ler, Atualizar e Deletar). Utiliza LocalStorage para persistência de dados mesmo após recarregar a página.', 
    category: ['front-end'], 
    tags: ['Html', 'CSS', 'JavaScript'],
    image: fotoTarefas, 
    github: '#',
    link: '#' 
  },
  { 
    id: 3, 
    title: 'Jogo Zero ou Um', 
    description: 'Ambiente virtual de Jogo interativo contra o computador baseado em algoritmos de geração aleatória. Aplica estruturas condicionais para validação do vencedor e atualização de pontuação em tempo real.', 
    category: ['front-end'], 
    tags: ['Html', 'CSS', 'JavaScript'],
    image: fotojogoZeroUm, 
    github: '#',
    link: '#' 
  },
  { 
    id: 4, 
    title: 'Calculadora Digital', 
    description: 'Calculadora funcional focada na lógica de operações matemáticas e manipulação dinâmica de strings. Destaca o controle de fluxos de dados e uma interface responsiva com feedback instantâneo.', 
    category: ['front-end'], 
    tags: ['Html', 'CSS', 'JavaScript'],
    image: fotoCalculadora, 
    github: '#',
    link: '#' 
  },
  { 
    id: 5, 
    title: 'Lâmpada Interativa', 
    description: 'Projeto focado na manipulação de eventos e estados no Front-end. O sistema altera os elementos visuais em tempo real a partir do clique do usuário.', 
    category: ['front-end'], 
    tags: ['Html', 'CSS', 'JavaScript'],
    image: fotoLampada, 
    github: '#',
    link: '#' 
  }
];