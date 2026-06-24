import "../styles/projects.css";
import notesImg from "../imgs/notes.webp";
import todoImg from "../imgs/todo.webp";
import weatherImg from "../imgs/weather.webp";

function Projects() {
  const projects = [
    {
      id: 1,
      image: notesImg,
      title: "Portfolio",
      description: "Personal portfolio built with React.",
      github: "https://github.com/...",
    },
    {
      id: 2,
      image: todoImg,
      title: "Portfolio",
      description: "Personal portfolio built with React.",
      github: "https://github.com/...",
    },
    {
      id: 3,
      image: weatherImg,
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
          <div className="card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.github} target="_blank">
              GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
