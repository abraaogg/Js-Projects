import "../styles/projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      image: "/portfolio.png",
      title: "Portfolio",
      description: "Personal portfolio built with React.",
      github: "https://github.com/...",
    },
    {
      id: 2,
      image: "/portfolio.png",
      title: "Portfolio",
      description: "Personal portfolio built with React.",
      github: "https://github.com/...",
    },
    {
      id: 3,
      image: "/portfolio.png",
      title: "Portfolio",
      description: "Personal portfolio built with React.",
      github: "https://github.com/...",
    },
  ];
  return (
    <div className="projects">
      <h2>PROJECTS</h2>
      <div className="cards">
        {projects.map((project) => (
          <div className="card">
            <h3>{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
