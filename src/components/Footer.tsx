import React from 'react';
import logo from '../assets/logo.svg'; // Use a mesma logo do header
import iconInsta from '../assets/instagram.svg';
import iconFace from '../assets/facebook.svg';
import iconLinkedin from '../assets/linkedin.svg';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* 1. SEÇÃO NEWSLETTER */}
      <section className="footer__newsletter">
        <div className="container footer__newsletter-content">
          <div className="footer__newsletter-text">
            <h3>Inscreva-se na nossa newsletter</h3>
            <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
          </div>
          
          <form className="footer__newsletter-form">
            <div className="form-group">
              <input type="text" placeholder="Digite seu nome" />
              <input type="email" placeholder="Digite seu e-mail" />
              <button type="submit">INSCREVER</button>
            </div>
            <label className="checkbox-label">
              <input type="checkbox" />
              <span>Aceito os termos e condições</span>
            </label>
          </form>
        </div>
      </section>

      {/* 2. CONTEÚDO PRINCIPAL */}
      <section className="footer__main container">
        <div className="footer__info">
          <img src={logo} alt="Econverse" className="footer__logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="footer__social">
            <img src={iconInsta} alt="Instagram" />
            <img src={iconFace} alt="Facebook" />
            <img src={iconLinkedin} alt="LinkedIn" />
          </div>
        </div>

        <div className="footer__links">
          <div className="footer__column">
            <h4>Institucional</h4>
            <ul>
              <li>Sobre nós</li>
              <li>Movimento</li>
              <li>Trabalhe conosco</li>
            </ul>
          </div>
          <div className="footer__column">
            <h4>Ajuda</h4>
            <ul>
              <li>Suporte</li>
              <li>Fale conosco</li>
              <li>Perguntas frequentes</li>
            </ul>
          </div>
          <div className="footer__column">
            <h4>Termos</h4>
            <ul>
              <li>Termos e condições</li>
              <li>Política de privacidade</li>
              <li>Troca e devolução</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. COPYRIGHT */}
      <div className="footer__bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
};

export default Footer;