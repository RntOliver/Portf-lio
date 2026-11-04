import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [showContactOptions, setShowContactOptions] = useState(false);

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
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=re83375741@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="contact-option"
                onClick={() => setShowContactOptions(false)}
              >
                <span className="contact-option-icon">📧</span> Gmail (Web)
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
