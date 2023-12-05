import React, { useState, useContext } from 'react';
import { validate, Validatable } from '../util/validation';
import { ProjectContext } from '../context/ProjectContext';

const ProjectInput: React.FC = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredManday, setEnteredManday] = useState('');
  const { addProject } = useContext(ProjectContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true,
    };
    const descriptionValidatable: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    };
    const mandayValidatable: Validatable = {
      value: +enteredManday,
      required: true,
      min: 1,
      max: 1000,
    };

    if (
      validate(titleValidatable) &&
      validate(descriptionValidatable) &&
      validate(mandayValidatable)
    ) {
      addProject(enteredTitle, enteredDescription, +enteredManday);
      clearInputs();
    } else {
      alert("入力値が正しくありません。再度お試しください。");
    }
  };

  const clearInputs = () => {
    setEnteredTitle('');
    setEnteredDescription('');
    setEnteredManday('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">タイトル</label>
        <input
          id="title"
          type="text"
          value={enteredTitle}
          onChange={e => setEnteredTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">説明</label>
        <input
          id="description"
          type="text"
          value={enteredDescription}
          onChange={e => setEnteredDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="manday">人日</label>
        <input
          id="manday"
          type="number"
          value={enteredManday}
          onChange={e => setEnteredManday(e.target.value)}
        />
      </div>
      <button type="submit">プロジェクトを追加</button>
    </form>
  );
};

export default ProjectInput;
