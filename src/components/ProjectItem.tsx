import React from 'react';
import { Project } from '../models/project';

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const dragStartHandler = (event: React.DragEvent) => {
    event.dataTransfer.setData('text/plain', project.id);
    event.dataTransfer.effectAllowed = 'move';
  };

  const dragEndHandler = () => {
    console.log('Drag終了');
  };

  const mandayText = project.manday < 20 ? `${project.manday}人日` : `${project.manday / 20}人月`;

  return (
    <li draggable onDragStart={dragStartHandler} onDragEnd={dragEndHandler}>
      <h2>{project.title}</h2>
      <h3>{mandayText}</h3>
      <p>{project.description}</p>
    </li>
  );
};

export default ProjectItem;
