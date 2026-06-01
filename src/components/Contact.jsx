import React, { useState } from 'react';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log('Dados enviados:', formData);

    setTimeout(() => {
      setIsSubmitting(false);
      alert('Mensagem enviada com sucesso! (Simulação)');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contato" className="w-full bg-[#000300] py-16 px-4 md:py-24">
      <div className="max-w-[1240px] mx-auto w-full flex flex-col gap-12">
        
        {/* Título da Seção */}
        <div className="text-center max-w-xl mx-auto">
          <div className="mb-4">
          <span className="px-5 py-1.5 bg-fundo-elemento/50 border border-fundo-elemento/40 text-texto-corpo text-xs font-medium rounded-full font-mono tracking-wide">
            Contato
          </span>
        </div>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            fique à vontade para entrar em contato!
          </p>
        </div>

        {/* Grid Principal: Lado Esquerdo (Informações e Mapa) | Lado Direito (Formulário) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* COLUNA ESQUERDA: Info de Contato + Integração com Google Maps */}
          <div className="flex flex-col gap-6 w-full">
            
            {/* Cards Rápidos (E-mail e Localização) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 bg-slate-900/50 border border-slate-800 p-4 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <FiMail size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">E-mail</p>
                  <a href="mailto:leandrofariasfl28884@gmail.com" className="text-sm text-slate-300 hover:text-blue-400 transition-colors break-all">
                    leandrofariasfl28884@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-900/50 border border-slate-800 p-4 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <FiMapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Localização</p>
                  <p className="text-sm text-slate-300">Aracaju, Sergipe</p>
                </div>
              </div>
            </div>

            {/* CONTAINER DO GOOGLE MAPS */}
            <div className="w-full h-[280px] sm:h-[320px] lg:h-[350px] rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900/20 relative group">
            <iframe 
            title="Mapa de Aracaju, Sergipe"
            src="https://maps.google.com/maps?q=Aracaju,%20Sergipe,%20Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale opacity-75 contrast-125 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
            />
            <div className="absolute inset-0 pointer-events-none border-2 border-slate-900 rounded-2xl" />
            </div>

          </div>

          {/* COLUNA DIREITA: Formulário de Contato */}
          <div className="w-full bg-slate-900/30 border border-slate-800/80 p-6 sm:p-8 rounded-2xl shadow-xl lg:h-full flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 h-full justify-between">
              
              <div className="flex flex-col gap-5">
                {/* Campo: Nome */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Ex: João Silva"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* Campo: E-mail */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    E-mail Profissional
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ex: joao@empresa.com"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                  />
                </div>

                {/* Campo: Mensagem */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Sua Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Como posso te ajudar?"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
                  />
                </div>
              </div>

              {/* Botão de Enviar */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto self-end flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white font-medium text-sm rounded-xl hover:bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed group shadow-lg shadow-blue-600/10 mt-6"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                <FiSend size={14} className={`transition-transform duration-300 ${isSubmitting ? 'translate-x-1' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'}`} />
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;