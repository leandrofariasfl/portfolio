import React from 'react';

export default function Footer() {
  return (
    <footer id="contato" className="border-t border-slate-800 bg-slate-900/50 py-8">
      <div className="max-w-5xl mx-auto px-4 text-center text-slate-400">
        <p className="mb-4">© 2024 Leandro Farias. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-6 mb-4">
          <a href="#" className="hover:text-cyan-400 transition-colors">GitHub</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
