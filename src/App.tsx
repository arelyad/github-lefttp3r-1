import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Palette, Wand2, Sparkles, Zap, Target, TrendingUp, Bot, Fingerprint, Lightbulb } from 'lucide-react';
import { ParticleBackground } from './components/ParticleBackground';
import { ServiceCard } from './components/ServiceCard';
import { PortfolioItem } from './components/PortfolioItem';
import { TestimonialCard } from './components/TestimonialCard';
import { ContactForm } from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020817] via-[#0A1A35] to-[#020817] text-white">
      {/* Logo and tagline in top right */}
      <motion.div
        className="fixed top-6 right-6 flex flex-col items-end z-[999]"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-2">
          <div className="text-right">
            <p className="text-sm font-medium text-[#64FFDA]">diseño visual innovador</p>
          </div>
          <img
            src="logo-maria.jpg"
            alt="MarIA Logo"
            className="w-20 h-20 object-cover rounded-full shadow-lg border-2 border-[#64FFDA]/20"
          />
        </div>
      </motion.div>
      
      <ParticleBackground />
      
      {/* Hero Section */}
      <header className="relative pt-24 pb-32 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#64FFDA] to-[#00B4D8]">
            Diseño visual con IA para potenciar tu marca
          </h1>
          <p className="text-xl md:text-2xl text-[#8892B0] mb-4">
            No solo diseño, creo identidades estratégicas impulsadas por inteligencia artificial
          </p>
          <p className="text-lg text-[#64FFDA] mb-8">
            Potencia tu marca con diseño estratégico e inteligencia artificial
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#1E4D8C] hover:bg-[#2A5DA0] text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300"
          >
            Reserva una consulta gratuita y transforma tu marca
          </motion.button>
        </motion.div>
      </header>

      {/* AI Differentiator Section */}
      <section className="relative py-20 px-4 md:px-8 bg-[#020817]/80">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
          >
            <div className="md:col-span-1">
              <Bot className="w-16 h-16 text-[#64FFDA] mb-6" />
              <h2 className="text-3xl font-bold mb-4">Potenciado por IA</h2>
              <p className="text-[#8892B0]">
                Nuestra tecnología de IA analiza tendencias globales y datos de mercado en tiempo real para crear estrategias de marca únicas y efectivas.
              </p>
            </div>
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#112A5C]/30 backdrop-blur-lg rounded-xl p-6 border border-[#64FFDA]/20">
                <Fingerprint className="w-8 h-8 text-[#64FFDA] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Personalización Única</h3>
                <p className="text-[#8892B0]">
                  Algoritmos avanzados que adaptan cada elemento de tu marca según tu audiencia y objetivos específicos.
                </p>
              </div>
              <div className="bg-[#112A5C]/30 backdrop-blur-lg rounded-xl p-6 border border-[#64FFDA]/20">
                <Lightbulb className="w-8 h-8 text-[#64FFDA] mb-4" />
                <h3 className="text-xl font-semibold mb-2">Innovación Continua</h3>
                <p className="text-[#8892B0]">
                  Aprendizaje automático que evoluciona con tu marca, identificando nuevas oportunidades y tendencias.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 px-4 md:px-8 bg-[#020817]/90">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
           Beneficios de tener el Poder de la IA en tu Marca
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="bg-[#112A5C]/60 backdrop-blur-lg rounded-xl p-6 border border-[#64FFDA]/20"
            >
              <Zap className="w-10 h-10 text-[#64FFDA] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Mayor Impacto Visual</h3>
              <p className="text-[#8892B0]">
                Algoritmos avanzados que analizan y optimizan cada elemento visual para maximizar el engagement y la memorabilidad de tu marca.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#112A5C]/60 backdrop-blur-lg rounded-xl p-6 border border-[#64FFDA]/20"
            >
              <Target className="w-10 h-10 text-[#64FFDA] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Automatización Inteligente</h3>
              <p className="text-[#8892B0]">
                Generación y adaptación automática de estilos manteniendo la coherencia visual en todos los puntos de contacto de tu marca.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#112A5C]/60 backdrop-blur-lg rounded-xl p-6 border border-[#64FFDA]/20"
            >
              <TrendingUp className="w-10 h-10 text-[#64FFDA] mb-4" />
              <h3 className="text-xl font-semibold mb-3">Análisis de Tendencias</h3>
              <p className="text-[#8892B0]">
                Monitoreo continuo de tendencias globales de diseño para mantener tu marca a la vanguardia del mercado.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              Icon={Brain}
              title="Branding con IA"
              description="Utilizo inteligencia artificial para crear identidades de marca únicas y memorables"
            />
            <ServiceCard
              Icon={Palette}
              title="Diseño Visual Innovador"
              description="Creación de elementos visuales coherentes que reflejan la esencia de tu marca"
            />
            <ServiceCard
              Icon={Wand2}
              title="Consultoría Personalizada"
              description="Asesoramiento estratégico para potenciar tu presencia visual en el mercado"
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="relative py-20 px-4 md:px-8 bg-[#020817]/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioItem
              title="Rebrand Tech Startup"
              description="Identidad visual moderna para empresa de tecnología"
              imageUrl="https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80"
            />
            <PortfolioItem
              title="Eco-friendly Brand"
              description="Diseño sostenible para marca consciente"
              imageUrl="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
            />
            <PortfolioItem
              title="AI-Driven Design"
              description="Proyecto de branding generado por IA"
              imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Testimonios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Ana García"
              role="CEO, TechStart"
              testimonial="MarIA transformó completamente nuestra identidad de marca. Su enfoque con IA nos dio resultados increíbles."
            />
            <TestimonialCard
              name="Carlos Ruiz"
              role="Director Creativo"
              testimonial="La combinación de creatividad humana e IA que ofrece MarIA es única. Resultados excepcionales."
            />
            <TestimonialCard
              name="Laura Méndez"
              role="Fundadora, EcoLife"
              testimonial="Profesionalismo e innovación en cada aspecto del proceso. Superó todas nuestras expectativas."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 px-4 md:px-8 bg-[#020817]/50">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Sparkles className="w-12 h-12 text-[#64FFDA] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para transformar tu marca?</h2>
            <p className="text-[#8892B0] mb-8">
              Completa el formulario y descubre cómo la IA puede revolucionar tu identidad visual
            </p>
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 md:px-8 text-center text-[#8892B0]">
        <p>© 2025 MarIA. Diseño con inteligencia artificial.</p>
      </footer>
    </div>
  );
}

export default App;