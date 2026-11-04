import './About.css';

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
              . Atualmente, curso Análise e Desenvolvimento de Sistemas na
              Universidade Católica de Brasília (UCB).
            </p>
            <p className="about-paragraph">
              No meu dia a dia de desenvolvimento, sou responsável pela
              arquitetura e construção de APIs RESTful assíncronas, modelagem de
              bancos de dados relacionais em{" "}
              <strong className="about-highlight">SQL Server</strong>,
              mapeamento ORM complexo com{" "}
              <strong className="about-highlight">SQLAlchemy</strong> e
              gerenciamento de permissões via{" "}
              <strong className="about-highlight">JWT e CORS</strong>.
            </p>
            <p className="about-paragraph">
              Tenho vivência em ambientes colaborativos utilizando{" "}
              <strong className="about-highlight">Git e GitHub</strong> (feature
              branches, Pull Requests e code review), aplicando boas práticas de
              código limpo, tratamento de erros globais e documentação
              interativa (Swagger/OpenAPI).
            </p>
          </div>

          <div className="about-card-container">
            <div className="about-card">
              <h3 className="about-card-title">Formação Acadêmica</h3>
              <p className="about-card-subtitle">
                Análise e Desenv. de Sistemas
              </p>
              <span className="about-card-detail">
                Universidade Católica de Brasília (UCB)
              </span>
            </div>

            <div className="about-card">
              <h3 className="about-card-title">Foco Profissional</h3>
              <p className="about-card-subtitle">
                Engenharia de Software Backend & Full Stack
              </p>
              <span className="about-card-detail">
                APIs RESTful, Sistemas Escaláveis & React
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
