import React, { useState } from 'react';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const FORM_URL = "https://formspree.io/f/xojboywp"; 

    try {
      const response = await fetch(FORM_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Limpa o formulário
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Erro ao enviar para o Formspree:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    
    <section id="contato" className="w-full bg-fundo-principal py-16 px-4 md:py-24 border-t border-fundo-elemento/10">
      <div className="max-w-5xl mx-auto w-full flex flex-col gap-12">
        
        
        <div className="text-center max-w-xl mx-auto">
          <div className="mb-4">
            <span className="px-5 py-1.5 bg-fundo-elemento/50 border border-fundo-elemento/40 text-texto-corpo text-xs font-medium rounded-full font-mono tracking-wide">
              Contato
            </span>
          </div>
          <p className="text-texto-corpo text-sm sm:text-base leading-relaxed tracking-wide">
            Fique à vontade para entrar em contato!
          </p>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
      
          <div className="flex flex-col gap-6 w-full">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 bg-fundo-secundario border border-fundo-elemento/20 p-4 rounded-xl shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-texto-hover/10 border border-texto-hover/20 flex items-center justify-center text-texto-hover shrink-0">
                  <FiMail size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-texto-corpo/40 font-bold uppercase tracking-widest font-mono">E-mail</p>
                  <a href="mailto:leandrofariasfl28884@gmail.com" className="text-sm text-texto-corpo hover:text-texto-hover transition-colors break-all font-medium">
                    leandrofariasfl28884@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-fundo-secundario border border-fundo-elemento/20 p-4 rounded-xl shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-texto-hover/10 border border-texto-hover/20 flex items-center justify-center text-texto-hover shrink-0">
                  <FiMapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-texto-corpo/40 font-bold uppercase tracking-widest font-mono">Localização</p>
                  <p className="text-sm text-texto-titulo font-medium">Aracaju, Sergipe</p>
                </div>
              </div>
            </div>

            
            <div className="w-full h-[280px] sm:h-[320px] lg:h-[350px] rounded-2xl overflow-hidden border border-fundo-elemento/20 shadow-lg bg-fundo-secundario relative group">
              <iframe 
                title="Mapa de Aracaju, Sergipe"
                src="https://maps.google.com/maps?q=Aracaju,%20Sergipe,%20Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-60 contrast-125 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
              />
            </div>

          </div>

          
          <div className="w-full bg-fundo-secundario border border-fundo-elemento/20 p-6 sm:p-8 rounded-2xl shadow-xl lg:h-full flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 h-full justify-between">
              
              <div className="flex flex-col gap-5">
                
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[11px] font-bold text-texto-corpo/50 uppercase tracking-wider font-mono">
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
                    className="w-full bg-fundo-principal/60 border border-fundo-elemento/30 rounded-xl px-4 py-3 text-sm text-texto-titulo placeholder-texto-corpo/30 focus:outline-none focus:border-texto-hover/60 focus:ring-1 focus:ring-texto-hover/60 transition-all duration-200"
                  />
                </div>


                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[11px] font-bold text-texto-corpo/50 uppercase tracking-wider font-mono">
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
                    className="w-full bg-fundo-principal/60 border border-fundo-elemento/30 rounded-xl px-4 py-3 text-sm text-texto-titulo placeholder-texto-corpo/30 focus:outline-none focus:border-texto-hover/60 focus:ring-1 focus:ring-texto-hover/60 transition-all duration-200"
                  />
                </div>


                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[11px] font-bold text-texto-corpo/50 uppercase tracking-wider font-mono">
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
                    className="w-full bg-fundo-principal/60 border border-fundo-elemento/30 rounded-xl px-4 py-3 text-sm text-texto-titulo placeholder-texto-corpo/30 focus:outline-none focus:border-texto-hover/60 focus:ring-1 focus:ring-texto-hover/60 transition-all duration-200 resize-none"
                  />
                </div>
              </div>

              {submitStatus === 'success' && (
                <div className="text-xs font-mono text-emerald-400 mt-2 bg-emerald-500/5 border border-emerald-500/20 px-4 py-3 rounded-xl transition-all animate-fade-in">
                  ✓ Mensagem enviada com sucesso! Responderei em breve.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-xs font-mono text-rose-400 mt-2 bg-rose-500/5 border border-rose-500/20 px-4 py-3 rounded-xl transition-all animate-fade-in">
                  ✕ Ops, algo deu errado. Tente novamente ou use o e-mail direto.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto self-end flex items-center justify-center gap-2 px-6 py-3.5 bg-fundo-elemento hover:bg-fundo-elemento/80 border border-fundo-elemento text-texto-titulo font-medium text-sm rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-texto-hover/30 disabled:opacity-40 disabled:cursor-not-allowed group shadow-md mt-4 cursor-pointer"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                <FiSend size={14} className={`transition-transform duration-300 ${isSubmitting ? 'translate-x-1' : 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-texto-hover'}`} />
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;