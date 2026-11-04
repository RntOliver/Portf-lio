import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          Renato<span className="footer-brand-highlight">.dev</span>
        </div>

        <nav className="footer-links">
          <a href="#sobre" className="footer-link">
            Sobre
          </a>
          <a href="#stack" className="footer-link">
            Tech Stack
          </a>
          <a href="#projetos" className="footer-link">
            Projetos
          </a>
          <a
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a href="mailto:re83375741@gmail.com" className="footer-link">
            E-mail
          </a>
        </nav>

        <p className="footer-copyright">
          © {currentYear} Renato Pinto de Oliveira. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
