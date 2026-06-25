import "../styles/projects.css";
import notesImg from "../imgs/notes-img.jpeg";
import todoImg from "../imgs/todo-img.jpeg";
import weatherImg from "../imgs/weather-img.jpeg";

function Projects() {
  const projects = [
    {
      id: 1,
      image: notesImg,
      title: "Notes",
      description: "Create and manage notes.",
      github: "https://github.com/...",
    },
    {
      id: 2,
      image: todoImg,
      title: "To-Do List",
      description: "Organize tasks with ease.",
      github: "https://github.com/...",
    },
    {
      id: 3,
      image: weatherImg,
      title: "Weather",
      description: "Live weather forecasts.",
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
            <div className="project-description">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

            <a href={project.github} target="_blank">
              VIEW PROJECT
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
