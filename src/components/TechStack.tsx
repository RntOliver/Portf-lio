import './TechStack.css';  

export default function TechStack() {
  const stackCategories = [
    {
      category: "Backend & APIs",
      skills: [
        "Python",
        "FastAPI",
        "RESTful APIs",
        "Swagger / OpenAPI",
        "JWT Auth",
        "CORS",
      ],
    },
    {
      category: "Banco de Dados & ORM",
      skills: [
        "SQL Server",
        "SQLAlchemy",
        "Modelagem Relacional",
        "Migrations",
        "SQL",
      ],
    },
    {
      category: "Frontend",
      skills: [
        "React",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "HTML5 & CSS3",
      ],
    },
    {
      category: "Ferramentas & Boas Práticas",
      skills: [
        "Git & GitHub",
        "Feature Branches",
        "Postman / Insomnia",
        "Uvicorn",
        "Linux / MobaXterm",
      ],
    },
  ];

  return (
    <section id="stack" className="tech-section">
      <div className="tech-container">
        <div className="tech-header">
          <h2 className="tech-title">Tech Stack</h2>
          <div className="tech-divider" />
          <p className="tech-description">
            Tecnologias, linguagens e ferramentas que utilizo no desenvolvimento
            do dia a dia.
          </p>
        </div>

        <div className="tech-grid">
          {stackCategories.map((item, index) => (
            <div key={index} className="tech-card">
              <h3 className="tech-card-title">{item.category}</h3>
              <div className="tech-tags-container">
                {item.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="tech-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
