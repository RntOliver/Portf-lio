import "./Hero.css";
import profilePic from "../assets/images/profile.jpg";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-badge">🚀 Disponível para novas oportunidades</div>
        <h1 className="hero-title">
          Desenvolvedor <br />
          <span className="hero-title-gradient">Backend & Full Stack</span>
        </h1>
        <p className="hero-description">
          Construo APIs RESTful de alta performance com Python, FastAPI e SQL
          Server, integradas a interfaces modernas e responsivas em React e
          TypeScript.
        </p>
        <div className="hero-actions">
          <a href="#projetos" className="btn-primary">
            Ver Projetos
          </a>
          <a
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="hero-image-container">
        <div className="hero-image-wrapper">
          <img
            src={profilePic}
            alt="Foto de perfil de Renato Pinto de Oliveira"
            className="hero-avatar"
          />
        </div>
      </div>
    </section>
  );
}
