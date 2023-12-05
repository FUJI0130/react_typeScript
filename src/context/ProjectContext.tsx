import React, { useState, useContext, useCallback } from 'react';
import { Project, ProjectStatus } from '../models/project';

type ProjectContextObj = {
  projects: Project[];
  addProject: (title: string, description: string, manday: number) => void;
  moveProject: (projectId: string, newStatus: ProjectStatus) => void;
};

export const ProjectContext = React.createContext<ProjectContextObj>({
  projects: [],
  addProject: () => {},
  moveProject: () => {},
});

export const useProjectContext = () => useContext(ProjectContext);
