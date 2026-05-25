import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white"> 
            <span className="w-full text-3xl font-bold text-white font-mono">Leandro.dev</span>
              <ul className=" hidden md:flex">
                <li className="p-4"><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
                <li className="p-4"><a href="#portfolio" className="hover:text-white transition-colors">Portfólio</a></li>
                <li className="p-4"><a href="#skills" className="hover:text-white transition-colors">Habilidades</a></li>
                <li className="p-4"><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
              <div onClick={handleNav} className="block md:hidden cursor-pointer">
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
              </div>
              <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className="w-full text-3xl font-bold text-white m-4">Leandro.dev</h1>
                <ul className="p-4 uppercase">
                  <li className="p-4 border-b border-gray-600"><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
                  <li className="p-4 border-b border-gray-600"><a href="#portfolio" className="hover:text-white transition-colors">Portfólio</a></li>
                  <li className="p-4 border-b border-gray-600"><a href="#skills" className="hover:text-white transition-colors">Habilidades</a></li>
                  <li className="p-4"><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
                </ul>
              </div>
    </nav>
  );
}

export default Navbar;
