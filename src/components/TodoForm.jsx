import { Plus } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function TodoForm({ onAddTask }) {
  const [taskText, setTaskText] = useState('');
  const [validationMessage, setValidationMessage] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    const focusComposer = (event) => {
      if (event.key === '/' && document.activeElement?.tagName !== 'INPUT') {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', focusComposer);
    return () => window.removeEventListener('keydown', focusComposer);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedText = taskText.trim();
    if (!trimmedText) {
      setValidationMessage('Please enter a task before adding it.');
      return;
    }
    onAddTask(trimmedText);
    setTaskText('');
    setValidationMessage('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="new-task">Add a task</label>
      <input
        id="new-task"
        ref={inputRef}
        value={taskText}
        onChange={(event) => {
          setTaskText(event.target.value);
          if (validationMessage) setValidationMessage('');
        }}
        placeholder="What needs to be done?"
        maxLength={120}
        autoComplete="off"
      />
      <span className="shortcut-hint" aria-hidden="true">Press /</span>
      <button className="add-button" type="submit" aria-label="Add task">
        <Plus size={20} />
        <span>Add task</span>
      </button>
      {validationMessage && <p className="form-error" role="alert">{validationMessage}</p>}
    </form>
  );
}

export default TodoForm;
