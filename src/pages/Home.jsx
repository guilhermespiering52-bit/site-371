import React, { useEffect, useState } from 'react';
import { Instagram, Music2, Moon, Sun, Code, Users, Sparkles, Menu, X, ChevronLeft, ChevronRight, XCircle, CalendarDays } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Dialog, DialogContent } from '../components/ui/dialog';

// Trojan Horse Logo Component
const LogoTroia = ({ className, size = "medium" }) => {
  const sizeClasses = {
    small: "w-6 h-6",
    medium: "w-8 h-8",
    large: "w-24 h-24",
    hero: "w-32 h-32 md:w-40 md:h-40"
  };
  
  return (
    <img 
      src="https://customer-assets.emergentagent.com/job_trojan-class/artifacts/8pzbh12i_649159267_17915731947321161_791524415534892358_n.jpg"
      alt="Troia Logo"
      className={`${sizeClasses[size]} ${className} object-contain`}
    />
  );
};

const Home = () => {
  const [theme, setTheme] = useState('dark');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const galleryImages = [
    'https://customer-assets.emergentagent.com/job_trojan-class/artifacts/384aqoqx_WhatsApp%20Image%202026-03-17%20at%2020.38.47.jpeg',
    'https://customer-assets.emergentagent.com/job_trojan-class/artifacts/7wo262h2_WhatsApp%20Image%202026-03-17%20at%2020.38.48%20%282%29.jpeg',
    'https://customer-assets.emergentagent.com/job_trojan-class/artifacts/kghxfiq8_WhatsApp%20Image%202026-03-17%20at%2020.38.48%20%281%29.jpeg',
    'https://customer-assets.emergentagent.com/job_trojan-class/artifacts/ovzqdcn9_WhatsApp%20Image%202026-03-17%20at%2020.38.48.jpeg',
    'https://customer-assets.emergentagent.com/job_trojan-class/artifacts/nj06iu6g_WhatsApp%20Image%202026-03-17%20at%2020.57.59%20%281%29.jpeg',
    'https://customer-assets.emergentagent.com/job_trojan-class/artifacts/19lib3sg_WhatsApp%20Image%202026-03-17%20at%2020.57.59.jpeg'
  ];

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxOpen) {
        if (e.key === 'ArrowLeft') {
          setSelectedImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
        }
        if (e.key === 'ArrowRight') {
          setSelectedImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
        }
        if (e.key === 'Escape') setLightboxOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, selectedImageIndex, galleryImages.length]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const handlePrevImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'header-scrolled' : 'header-transparent'}`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LogoTroia size="medium" className="animate-pulse-glow" />
            <div>
              <h1 className="text-2xl font-bold tracking-wider cyber-text">TURMA 371</h1>
              <p className="text-sm text-muted-foreground">ETEP - Portão</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#sobre" className="nav-link">Sobre</a>
            <a href="#social" className="nav-link">Social</a>
            <a href="#galeria" className="nav-link">Galeria</a>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className="theme-toggle"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className="theme-toggle"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              className="hover:bg-cyber-green/10"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mobile-menu">
            <nav className="flex flex-col items-center gap-4 py-6">
              <a href="#sobre" className="nav-link text-lg" onClick={handleNavClick}>Sobre</a>
              <a href="#social" className="nav-link text-lg" onClick={handleNavClick}>Social</a>
              <a href="#galeria" className="nav-link text-lg" onClick={handleNavClick}>Galeria</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="cyber-grid"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center space-y-6 animate-fade-in">
            <div className="inline-block">
              <LogoTroia size="hero" className="mx-auto mb-6 animate-pulse-glow" />
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-wider cyber-text">
              TURMA 371
            </h2>
            <p className="text-2xl md:text-3xl text-cyber-green font-semibold tracking-wide">
              INFORMÁTICA
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Code className="w-5 h-5" />
              <span className="text-lg">ETEP - Portão</span>
              <Code className="w-5 h-5" />
            </div>
            <p className="text-lg max-w-2xl mx-auto mt-6 text-muted-foreground">
              Movidos pela tecnologia, unidos pela paixão
            </p>
          </div>
        </div>
      </section>

      {/* Sobre a Turma */}
      <section id="sobre" className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <Users className="w-8 h-8 text-cyber-green" />
              <h3 className="text-3xl md:text-4xl font-bold cyber-text">SOBRE A TURMA</h3>
            </div>
            
            <Card className="cyber-card">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    Somos a turma 371 de Informática da ETEP, e desde o primeiro ano damos o nosso máximo em tudo o que fazemos. 
                    Somos uma equipe unida, movida pela garra, pela estratégia e pela vontade de ir além.
                  </p>
                  <p>
                    Cada desafio enfrentado só fortalece ainda mais nossa conexão e nosso propósito.
                  </p>
                  <p className="text-cyber-green font-semibold">
                    Em 2027 iremos nos formar, mas 2026 é o nosso momento — o ano em que vamos marcar nossa história 
                    e mostrar a força da nossa turma.
                  </p>
                </div>
                
                <div className="mt-8 grid grid-cols-3 gap-6 text-center">
                  <div className="stat-card">
                    <CalendarDays className="w-8 h-8 text-cyber-green mx-auto mb-2" />
                    <p className="text-3xl font-bold text-cyber-green">2024</p>
                    <p className="text-sm text-muted-foreground">Ano de Entrada</p>
                  </div>
                  <div className="stat-card">
                    <Code className="w-8 h-8 text-cyber-green mx-auto mb-2" />
                    <p className="text-3xl font-bold text-cyber-green">2026</p>
                    <p className="text-sm text-muted-foreground">Nosso Ano</p>
                  </div>
                  <div className="stat-card">
                    <Sparkles className="w-8 h-8 text-cyber-green mx-auto mb-2" />
                    <p className="text-3xl font-bold text-cyber-green">2027</p>
                    <p className="text-sm text-muted-foreground">Formatura</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Redes Sociais */}
      <section id="social" className="section-padding bg-section">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold cyber-text mb-4">
              CONECTE-SE CONOSCO
            </h3>
            <p className="text-muted-foreground mb-12">
              Acompanhe nossa jornada nas redes sociais
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <a 
                href="https://www.instagram.com/etep371/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-card group"
              >
                <Instagram className="w-12 h-12 text-cyber-green mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-2xl font-bold mb-2">Instagram</h4>
                <p className="text-muted-foreground">@etep371</p>
              </a>
              
              <a 
                href="https://www.tiktok.com/@troia371?_r=1&_t=ZS-94nYEAfANXw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-card group"
              >
                <Music2 className="w-12 h-12 text-cyber-green mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-2xl font-bold mb-2">TikTok</h4>
                <p className="text-muted-foreground">@troia371</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="section-padding">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold cyber-text text-center mb-12">
            GALERIA
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <div 
                key={index} 
                className="gallery-item cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img 
                  src={img} 
                  alt={`Galeria ${index + 1}`}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="lightbox-modal">
          <div className="lightbox-content">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lightbox-close"
              onClick={() => setLightboxOpen(false)}
            >
              <XCircle className="w-8 h-8" />
            </Button>

            {/* Image Counter */}
            <div className="lightbox-counter">
              {selectedImageIndex + 1} / {galleryImages.length}
            </div>

            {/* Previous Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lightbox-nav lightbox-prev"
              onClick={handlePrevImage}
            >
              <ChevronLeft className="w-10 h-10" />
            </Button>

            {/* Image */}
            <div className="lightbox-image-container">
              <img
                src={galleryImages[selectedImageIndex]}
                alt={`Galeria ${selectedImageIndex + 1}`}
                className="lightbox-image"
              />
            </div>

            {/* Next Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lightbox-nav lightbox-next"
              onClick={handleNextImage}
            >
              <ChevronRight className="w-10 h-10" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="footer">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <LogoTroia size="small" className="animate-pulse-glow" />
              <span className="font-bold cyber-text">TURMA 371 - INFORMÁTICA</span>
            </div>
            <div className="text-muted-foreground">
              © 2026 - ETEP Portão
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
