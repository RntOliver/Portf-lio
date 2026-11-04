import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [showContactOptions, setShowContactOptions] = useState(false);

  const handleGmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowContactOptions(false);

    const isMobile = /android|iphone|ipad|ipod/i.test(navigator.userAgent);

    if (isMobile) {
      // Tenta abrir direto no app do Gmail
      window.location.href = "googlegmail:///co?to=re83375741@gmail.com";

      // Fallback para o cliente padrão de e-mail caso o esquema do app falhe
      setTimeout(() => {
        window.location.href = "mailto:re83375741@gmail.com";
      }, 500);
    } else {
      // No computador, abre a versão Web em uma nova aba
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=re83375741@gmail.com",
        "_blank",
      );
    }
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <a href="#" className="header-logo">
          Renato<span className="header-logo-suffix">.dev</span>
        </a>

        <nav className="header-nav">
          <a href="#sobre" className="nav-link">
            Sobre
          </a>
          <a href="#stack" className="nav-link">
            Tech Stack
          </a>
          <a href="#projetos" className="nav-link">
            Projetos
          </a>
        </nav>

        <div className="contact-wrapper">
          <button
            type="button"
            onClick={() => setShowContactOptions(!showContactOptions)}
            className="btn-contact"
          >
            Fale Comigo
          </button>

          {showContactOptions && (
            <div className="contact-dropdown">
              <a href="#" onClick={handleGmailClick} className="contact-option">
                <span className="contact-option-icon">📧</span> Gmail
              </a>
              <a
                href="mailto:re83375741@gmail.com"
                className="contact-option"
                onClick={() => setShowContactOptions(false)}
              >
                <span className="contact-option-icon">📬</span> Outlook / App
                Padrão
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
