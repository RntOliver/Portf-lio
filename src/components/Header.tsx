import './Header.css';

export default function Header() {
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

        <a href="mailto:re83375741@gmail.com" className="btn-contact">
          Fale Comigo
        </a>
      </div>
    </header>
  );
}
