import React, { useEffect, useState } from 'react';
import { Project, ProjectStatus } from '../models/project';
import { useProjectContext } from '../context/ProjectContext';
import ProjectItem from './ProjectItem';

interface ProjectListProps {
  type: 'active' | 'finished';
}

const ProjectList: React.FC<ProjectListProps> = ({ type }) => {
  const [assignedProjects, setAssignedProjects] = useState<Project[]>([]);
  const { projects } = useProjectContext();

  useEffect(() => {
    const relevantProjects = projects.filter(prj => 
      type === 'active' ? prj.status === ProjectStatus.Active : prj.status === ProjectStatus.Finished
    );
    setAssignedProjects(relevantProjects);
  }, [projects, type]);

  return (
    <div>
      <ul>
        {assignedProjects.map(project => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
