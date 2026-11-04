import "./Projects.css";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export default function Projects() {
  const projectsList: Project[] = [
    {
      id: "1",
      title: "Sistema de Gestão Financeira (Em desenvolvimento)",
      category: "Full Stack & APIs",
      description:
        "Aplicação voltada para controle de finanças pessoais, permitindo gerenciamento de receitas, despesas categorizadas e acompanhamento de saldos com visualização clara de métricas.",
      technologies: [
        "React",
        "TypeScript",
        "Python",
        "FastAPI",
        "Tailwind CSS",
        "SQL Server",
      ],
      githubUrl: "https://github.com/seu-usuario/gestao-financeira",
      demoUrl: "https://rnt-financas.vercel.app",
    },
    {
      id: "2",
      title: "CineRNT",
      category: "Frontend & Consumo de API",
      description:
        "Plataforma web para exploração e busca de catálogo de filmes e séries, exibindo detalhes de produções, avaliações e recomendações através do consumo de APIs RESTful.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "REST API"],
      githubUrl: "https://github.com/seu-usuario/cine-rnt",
      demoUrl: "https://cine-rnt.vercel.app",
    },
  ];

  return (
    <section id="projetos" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Projetos em Destaque</h2>
          <div className="projects-divider" />
          <p className="projects-description">
            Aplicações e soluções desenvolvidas para consolidar arquitetura de
            código, consumo de APIs e interfaces intuitivas.
          </p>
        </div>

        <div className="projects-grid">
          {projectsList.map((project) => (
            <div key={project.id} className="project-card">
              <div>
                <span className="project-badge">{project.category}</span>
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-description">
                  {project.description}
                </p>

                <div className="project-tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="project-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-secondary"
                  >
                    GitHub
                  </a>
                )}
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link-primary"
                  >
                    Ver Aplicação
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
