import "./ProjectDetail.css";
import { useParams } from "react-router-dom";

interface Project {
  name: string;
  description: string;
}

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();

  const projectDetails: Record<string, Project> = {
    "1": {
      name: "Project 1",
      description:
        "A personal portfolio website built with React and TypeScript.",
    },
    "2": {
      name: "Project 2",
      description:
        "A weather application that displays real-time data using a public API.",
    },
    "3": {
      name: "Project 3",
      description: "A full-stack e-commerce platform with user authentication.",
    },
  };

  const project = projectId ? projectDetails[projectId] : undefined;

  if (!project) {
    return <h2>Project Not Found</h2>;
  }

  return (
    <div className="project-detail">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetail;
