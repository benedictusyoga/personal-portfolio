import "./Projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  const projectList = [
    { id: 1, name: "Project 1" },
    { id: 2, name: "Project 2" },
    { id: 3, name: "Project 3" },
  ];
  return (
    <div className="projects">
      <h1>PROJECTS</h1>
      <ul>
        {projectList.map((project) => (
          <li key={project.id}>
            <Link to={`/project/${project.id}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
