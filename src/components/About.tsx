import "./About.css";

export default function About() {
  return (
    <section id="sobre" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">Sobre Mim</h2>
          <div className="about-divider" />
        </div>

        <div className="about-content">
          <div className="about-text-container">
            <p className="about-paragraph">
              Olá! Me chamo{" "}
              <strong className="about-highlight">
                Renato Pinto de Oliveira
              </strong>{" "}
              e sou Desenvolvedor de Software com atuação focada em{" "}
              <strong className="about-highlight">
                Backend (Python / FastAPI)
              </strong>{" "}
              e{" "}
              <strong className="about-highlight">
                Full Stack (React / TypeScript)
              </strong>
              .
            </p>
            <p className="about-paragraph">
              Atualmente, atuo como{" "}
              <strong className="about-highlight">
                Estagiário de Desenvolvimento de Software na Infra S.A.
              </strong>
              , participando do ciclo de vida de soluções digitais corporativas.
            </p>
            <p className="about-paragraph">
              Estou cursando Análise e Desenvolvimento de Sistemas na
              Universidade Católica de Brasília (UCB), com previsão de formação
              para o{" "}
              <strong className="about-highlight">1º semestre de 2027</strong>.
              No meu dia a dia, foco na arquitetura de APIs RESTful assíncronas,
              modelagem relacional em{" "}
              <strong className="about-highlight">SQL Server</strong>, ORM com{" "}
              <strong className="about-highlight">SQLAlchemy</strong> e controle
              de versão via{" "}
              <strong className="about-highlight">Git/GitHub</strong>.
            </p>
          </div>

          <div className="about-card-container">
            <div className="about-card">
              <h3 className="about-card-title">Experiência Atual</h3>
              <p className="about-card-subtitle">Desenvolvimento de Software</p>
              <span className="about-card-detail">Infra S.A.</span>
            </div>

            <div className="about-card">
              <h3 className="about-card-title">Formação Acadêmica</h3>
              <p className="about-card-subtitle">
                Análise e Desenv. de Sistemas
              </p>
              <span className="about-card-detail">
                Universidade Católica de Brasília (UCB)
              </span>
              <span className="about-card-subdetail">
                Previsão de Conclusão: Meio de 2027
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
