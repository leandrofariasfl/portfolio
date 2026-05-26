// src/data/skills.js
import { 
  SiPython, SiR, SiApachespark, SiScikitlearn, 
  SiTensorflow, SiPytorch, SiOpenai, SiHuggingface,
  SiPostgresql, SiMongodb, SiDocker, SiGit,
  SiReact, SiTailwindcss, SiFastapi, SiFlask
} from 'react-icons/si';

export const SKILLS_DATA = [
  {
    category: "Data Science & Analytics",
    techs: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "R Language", icon: SiR, color: "#276DC3" },
      { name: "Apache Spark", icon: SiApachespark, color: "#E25A1B" },
      { name: "Scikit-Learn", icon: SiScikitlearn, color: "#F7931E" },
    ]
  },
  {
    category: "Inteligência Artificial & LLMs",
    techs: [
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
      { name: "OpenAI API", icon: SiOpenai, color: "#412991" },
      { name: "Hugging Face", icon: SiHuggingface, color: "#FFD21E" },
    ]
  }
  // ... adicione as outras se quiser testar primeiro com essas duas
];