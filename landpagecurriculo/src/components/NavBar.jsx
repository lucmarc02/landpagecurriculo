import { useState, useEffect } from 'react';

export default function Navbar() {
  // Link do seu currículo no Google Drive
  const CURRICULO_GOOGLE_DRIVE_URL = "https://drive.google.com/file/d/1kosnp7jnjIvQz49BmU4G0K8d26dCJhAA/view?usp=sharing";

  // Estado para detectar se está em mobile
  const [isMobile, setIsMobile] = useState(false);

  // Detecta se está em mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Verificar no carregamento
    checkMobile();
    
    // Adicionar listener para redimensionamento
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Caminhos das imagens - SOLUÇÃO SIMPLIFICADA
  // Para funcionar tanto em dev quanto no GitHub Pages
  const perfilImg = window.location.hostname === 'localhost' 
    ? '/imagens/perfil.png'  // Em desenvolvimento local
    : '/landpagecurriculo/imagens/perfil.png'; // No GitHub Pages
  
  const bannerImg = window.location.hostname === 'localhost'
    ? '/imagens/banner.png'  // Em desenvolvimento local
    : '/landpagecurriculo/imagens/banner.png'; // No GitHub Pages

  // Função para lidar com erros nas imagens
  const handleImageError = (e, isBanner = false) => {
    console.error('Erro ao carregar imagem:', isBanner ? 'banner' : 'perfil');
    e.target.style.backgroundColor = '#1a1a2e';
    e.target.style.display = 'flex';
    e.target.style.alignItems = 'center';
    e.target.style.justifyContent = 'center';
    
    if (isBanner) {
      e.target.innerHTML = '<span style="color: #61dafb; font-size: 1.2rem; font-weight: bold;">Banner Tecnologia</span>';
    } else {
      e.target.innerHTML = '<span style="color: #61dafb; font-size: 1.5rem;">👤</span>';
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-banner-wrapper">
          {/* Banner de fundo */}
          <div className="nav-banner">
            <img 
              src={bannerImg}
              alt="Banner Tecnologia e Dados" 
              className="banner-image"
              onError={(e) => handleImageError(e, true)}
            />
            <div className="banner-overlay"></div>
          </div>
          
          {/* Conteúdo do perfil sobre o banner - Estrutura responsiva */}
          <div className={`nav-profile-overlay ${isMobile ? 'mobile-layout' : ''}`}>
            <div className={`nav-profile ${isMobile ? 'mobile-profile' : ''}`}>
              <div className="profile-image-wrapper">
                <img
                  src={perfilImg}
                  className="nav-icon"
                  alt="Foto de perfil Lucas Martins"
                  onError={(e) => handleImageError(e, false)}
                />
              </div>
              <div className="nav-text">
                <h1 className="nav-name">Lucas Martins Coelho</h1>
                <h2 className="nav-title">Analista de Sistemas</h2>
                <p className="nav-location">Araçatuba - SP</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`nav-contacts ${isMobile ? 'mobile-contacts' : ''}`}>
          <a href="tel:+5562986343341" className="nav-contact-link">
            <span className="contact-icon">📱</span>
            <span className="contact-text">(62) 98634-3341</span>
          </a>
          <a href="mailto:danilucascoe@gmail.com" className="nav-contact-link">
            <span className="contact-icon">✉️</span>
            <span className="contact-text">danilucascoe@gmail.com</span>
          </a>
          
          {/* LINK DO CURRÍCULO NO GOOGLE DRIVE */}
          <a 
            href={CURRICULO_GOOGLE_DRIVE_URL} 
            className="nav-contact-link curriculo-link"
            target="_blank" 
            rel="noopener noreferrer"
            title="Visualizar currículo no Google Drive"
          >
            <span className="contact-icon">📄</span>
            <span className="contact-text">Currículo (PDF)</span>
          </a>
          
          <a href="https://www.linkedin.com/in/lucas-martins-29a06a72/" 
             className="nav-contact-link" 
             target="_blank" 
             rel="noopener noreferrer">
            <span className="contact-icon">💼</span>
            <span className="contact-text">LinkedIn</span>
          </a>
          
        </div>
      </div>
    </nav>
  );
}