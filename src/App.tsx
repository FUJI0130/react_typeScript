// src/App.tsx
import React from 'react';
import  ProjectInput  from './components/ProjectInput';
import  ProjectList  from './components/ProjectList';

const App: React.FC = () => {
  return (
    <div>
      <ProjectInput />
      <ProjectList type="active" />
      <ProjectList type="finished" />
    </div>
  );
};

export default App;
