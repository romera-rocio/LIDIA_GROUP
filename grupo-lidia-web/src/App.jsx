import React, { useState, useEffect } from 'react';
import { Menu, X, Bot, MessageCircle, FileText, TrendingUp, Globe, ShoppingCart, Check, ArrowRight, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    whatsapp: ''
  });

  // Intersection Observer para animaciones al scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-section').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Scroll suave a secciones
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Manejo del formulario
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mensaje = `Hola! Solicito una demo de Grupo Lidia.
Nombre: ${formData.nombre}
Empresa: ${formData.empresa}
Email: ${formData.email}
WhatsApp: ${formData.whatsapp}`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensaje)}`, '_blank');
  };

  // Datos de servicios
  const services = [
    {
      icon: <Bot className="w-10 h-10" />,
      title: "SmartBot",
      description: "Atención automatizada 24/7 en tu sitio web y WhatsApp. Responde preguntas frecuentes y califica leads."
    },
    {
      icon: <MessageCircle className="w-10 h-10" />,
      title: "WhatsApp Automation",
      description: "Flujos automáticos de ventas, seguimiento y atención al cliente por WhatsApp Business."
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Content AI",
      description: "Generación inteligente de contenido para redes sociales, blogs y campañas de marketing."
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Price Watch",
      description: "Monitoreo y análisis de precios de competencia en tiempo real para optimizar tu estrategia."
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Web Express",
      description: "Creación y mejora de sitios web profesionales optimizados para conversión y SEO."
    },
    {
      icon: <ShoppingCart className="w-10 h-10" />,
      title: "Mercado Libre",
      description: "Optimización de publicaciones, gestión de inventario y automatización de ventas."
    }
  ];

  // Datos de paquetes
  const packages = [
    {
      name: "Básico",
      price: "Desde $299/mes",
      features: [
        "SmartBot web y WhatsApp",
        "WhatsApp Automation básica",
        "Soporte por email",
        "Dashboard de métricas",
        "Hasta 1000 conversaciones/mes"
      ],
      color: "from-violet-600 to-violet-700"
    },
    {
      name: "Crecimiento",
      price: "Desde $599/mes",
      popular: true,
      features: [
        "Todo del plan Básico",
        "Content AI incluido",
        "Soporte prioritario",
        "Integración con CRM",
        "Hasta 5000 conversaciones/mes",
        "Informes personalizados"
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Ventas",
      price: "Desde $999/mes",
      features: [
        "Todo incluido",
        "Price Watch activo",
        "Mercado Libre automation",
        "Soporte 24/7",
        "Conversaciones ilimitadas",
        "Consultoría mensual",
        "Desarrollo personalizado"
      ],
      color: "from-violet-700 to-purple-800"
    }
  ];

  // Casos de éxito
  const successCases = [
    {
      company: "Tienda Moda Plus",
      result: "+150% en ventas",
      description: "Automatización de WhatsApp redujo tiempo de respuesta de 4h a 2min"
    },
    {
      company: "TechStore Argentina",
      result: "-60% costos atención",
      description: "SmartBot resolvió 70% de consultas sin intervención humana"
    },
    {
      company: "Distribuidora Sur",
      result: "+200 leads/mes",
      description: "Web Express + Content AI triplicó su generación de prospectos"
    }
  ];

  // ⚠️ IMPORTANTE: Reemplaza este número con tu WhatsApp real
  const whatsappNumber = "5493512345678"; // Formato: código país + código área + número
  const whatsappMessage = "Hola! Me interesa solicitar una demo de Grupo Lidia";

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">GL</span>
              </div>
              <span className="text-2xl font-bold text-violet-700">Grupo Lidia</span>
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-violet-600 transition">
                Inicio
              </button>
              <button onClick={() => scrollToSection('servicios')} className="text-gray-700 hover:text-violet-600 transition">
                Servicios
              </button>
              <button onClick={() => scrollToSection('paquetes')} className="text-gray-700 hover:text-violet-600 transition">
                Paquetes
              </button>
              <button onClick={() => scrollToSection('casos')} className="text-gray-700 hover:text-violet-600 transition">
                Casos de éxito
              </button>
              <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-violet-600 transition">
                Contacto
              </button>
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition shadow-lg hover:shadow-xl"
              >
                Solicitar demo
              </a>
            </div>

            {/* Menu Mobile Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-violet-700"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Menu Mobile */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-4">
              <button onClick={() => scrollToSection('inicio')} className="block w-full text-left text-gray-700 hover:text-violet-600 py-2">
                Inicio
              </button>
              <button onClick={() => scrollToSection('servicios')} className="block w-full text-left text-gray-700 hover:text-violet-600 py-2">
                Servicios
              </button>
              <button onClick={() => scrollToSection('paquetes')} className="block w-full text-left text-gray-700 hover:text-violet-600 py-2">
                Paquetes
              </button>
              <button onClick={() => scrollToSection('casos')} className="block w-full text-left text-gray-700 hover:text-violet-600 py-2">
                Casos de éxito
              </button>
              <button onClick={() => scrollToSection('contacto')} className="block w-full text-left text-gray-700 hover:text-violet-600 py-2">
                Contacto
              </button>
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold text-center transition"
              >
                Solicitar demo
              </a>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-16 bg-gradient-to-br from-violet-50 via-white to-orange-50">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Automatización comercial que <span className="text-violet-600">ahorra tiempo</span> y aumenta tus <span className="text-orange-500">ventas</span>
              </h1>
              <p className="text-xl text-gray-600">
                Bots web, WhatsApp Automation y soluciones digitales para tu negocio
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Solicitar demo <ArrowRight size={20} />
                </a>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition"
                >
                  Ver servicios
                </button>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-orange-400 rounded-3xl blur-3xl opacity-20"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-violet-100 rounded-xl p-4 text-center">
                      <Bot className="w-12 h-12 text-violet-600 mx-auto mb-2" />
                      <p className="font-semibold text-gray-800">SmartBot</p>
                    </div>
                    <div className="bg-orange-100 rounded-xl p-4 text-center">
                      <MessageCircle className="w-12 h-12 text-orange-600 mx-auto mb-2" />
                      <p className="font-semibold text-gray-800">WhatsApp</p>
                    </div>
                    <div className="bg-amber-100 rounded-xl p-4 text-center">
                      <TrendingUp className="w-12 h-12 text-amber-700 mx-auto mb-2" />
                      <p className="font-semibold text-gray-800">Analytics</p>
                    </div>
                    <div className="bg-purple-100 rounded-xl p-4 text-center">
                      <Globe className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                      <p className="font-semibold text-gray-800">Web Express</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="animate-section py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-gray-600">Soluciones integrales de automatización para tu negocio</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-gray-100 hover:border-violet-300 rounded-xl p-6 transition hover:shadow-xl group"
              >
                <div className="text-violet-600 group-hover:text-orange-500 transition mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paquetes */}
      <section id="paquetes" className="animate-section py-16 bg-gradient-to-br from-violet-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Elige tu Plan</h2>
            <p className="text-xl text-gray-600">Soluciones escalables para cada etapa de tu negocio</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden ${pkg.popular ? 'ring-4 ring-orange-500 transform md:scale-105' : ''}`}
              >
                {pkg.popular && (
                  <div className="bg-orange-500 text-white text-center py-2 font-bold">
                    MÁS POPULAR
                  </div>
                )}
                <div className={`bg-gradient-to-br ${pkg.color} text-white p-6`}>
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-3xl font-bold">{pkg.price}</p>
                </div>
                <div className="p-6 space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hola! Me interesa el plan ${pkg.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold text-center transition mt-6"
                  >
                    Contratar ahora
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de éxito */}
      <section id="casos" className="animate-section py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Casos de Éxito</h2>
            <p className="text-xl text-gray-600">Resultados reales de empresas que confiaron en nosotros</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {successCases.map((caso, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-violet-50 to-orange-50 rounded-xl p-6 border-2 border-violet-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{caso.company}</h3>
                <div className="text-3xl font-bold text-orange-500 mb-3">{caso.result}</div>
                <p className="text-gray-700">{caso.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="animate-section py-16 bg-gradient-to-br from-violet-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">¿Listo para automatizar tu negocio?</h2>
              <p className="text-xl opacity-90">Agenda una demo gratuita y descubre cómo podemos ayudarte</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Formulario */}
              <div className="bg-white rounded-xl p-6 text-gray-900">
                <h3 className="text-2xl font-bold mb-4 text-violet-700">Solicitar Demo</h3>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    name="nombre"
                    placeholder="Nombre completo" 
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-violet-500 focus:outline-none"
                  />
                  <input 
                    type="text" 
                    name="empresa"
                    placeholder="Empresa" 
                    value={formData.empresa}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-violet-500 focus:outline-none"
                  />
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Correo electrónico" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-violet-500 focus:outline-none"
                  />
                  <input 
                    type="tel" 
                    name="whatsapp"
                    placeholder="WhatsApp" 
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-violet-500 focus:outline-none"
                  />
                  <button 
                    onClick={handleSubmit}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold transition"
                  >
                    Solicitar demo
                  </button>
                </div>
              </div>

              {/* Contacto directo */}
              <div className="space-y-6">
                <div className="bg-white bg-opacity-10 rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-4">Contacto Directo</h3>
                  <div className="space-y-4">
                    <a 
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 hover:text-orange-300 transition"
                    >
                      <Phone className="w-6 h-6" />
                      <span>+54 9 351 234-5678</span>
                    </a>
                    <a 
                      href="mailto:info@grupolidia.com"
                      className="flex items-center gap-3 hover:text-orange-300 transition"
                    >
                      <Mail className="w-6 h-6" />
                      <span>info@grupolidia.com</span>
                    </a>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-6 h-6" />
                      <span>Córdoba, Argentina</span>
                    </div>
                  </div>
                </div>

                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg font-bold text-center transition flex items-center justify-center gap-2"
                >
                  <MessageCircle size={24} />
                  Chatear por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-violet-600 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">GL</span>
                </div>
                <span className="text-xl font-bold">Grupo Lidia</span>
              </div>
              <p className="text-gray-400">© 2024 Grupo Lidia. Todos los derechos reservados.</p>
            </div>
            
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-violet-600 hover:bg-violet-700 rounded-full flex items-center justify-center transition">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-violet-600 hover:bg-violet-700 rounded-full flex items-center justify-center transition">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-violet-600 hover:bg-violet-700 rounded-full flex items-center justify-center transition">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-violet-600 hover:bg-violet-700 rounded-full flex items-center justify-center transition">
                <Twitter size={20} />
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <a href="#" className="text-gray-400 hover:text-white transition">Política de Privacidad</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;