import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-[#0A1A35]/50 backdrop-blur-lg p-8 rounded-xl border border-[#64FFDA]/20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#64FFDA] mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-[#020817]/50 border border-[#64FFDA]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#64FFDA]/50 text-white"
            placeholder="Tu nombre"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[#64FFDA] mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-[#020817]/50 border border-[#64FFDA]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#64FFDA]/50 text-white"
            placeholder="tu@email.com"
          />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="company" className="block text-sm font-medium text-[#64FFDA] mb-2">
          Empresa
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-[#020817]/50 border border-[#64FFDA]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#64FFDA]/50 text-white"
          placeholder="Nombre de tu empresa"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-[#64FFDA] mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 bg-[#020817]/50 border border-[#64FFDA]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#64FFDA]/50 text-white resize-none"
          placeholder="¿Cómo podemos ayudarte?"
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full bg-[#1E4D8C] hover:bg-[#2A5DA0] text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center justify-center gap-2"
      >
        <span>Enviar mensaje</span>
        <Send className="w-5 h-5" />
      </motion.button>
    </form>
  );
};