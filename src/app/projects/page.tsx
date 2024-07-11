import { useEffect, useState } from 'react';
import axios from '../../utils/axios';

interface Project {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/projects');
        setProjects(response.data);
      } catch (error: any) {
        console.error(error.response.data.error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}
