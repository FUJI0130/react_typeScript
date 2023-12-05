// src/context/ProjectProvider.tsx
import React, { useState, useCallback,ReactNode } from 'react';
import { ProjectContext } from './ProjectContext';
import { Project, ProjectStatus } from '../models/project';

interface ProjectProviderProps {
  children: React.ReactNode;
}

export const ProjectProvider: React.FC<ProjectProviderProps> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);

  const addProject = useCallback((title: string, description: string, manday: number) => {
    const newProject = new Project(Math.random().toString(), title, description, manday, ProjectStatus.Active);
    setProjects(prevProjects => [...prevProjects, newProject]);
  }, []);

  const moveProject = useCallback((projectId: string, newStatus: ProjectStatus) => {
    setProjects(prevProjects => {
      const updatedProjects = [...prevProjects];
      const project = updatedProjects.find(prj => prj.id === projectId);
      if (project && project.status !== newStatus) {
        project.status = newStatus;
      }
      return updatedProjects;
    });
  }, []);

return (
    <ProjectContext.Provider value={{ projects, addProject, moveProject }}>
      {children}
    </ProjectContext.Provider>
  );
};