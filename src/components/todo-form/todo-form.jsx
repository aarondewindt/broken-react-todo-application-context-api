import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-form.scss';

export const TodoForm = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const [task, setTask] = React.useState('');

  const generateUniqueId = () => Date.now() + Math.floor(Math.random() * 100);

  const handleAddTodo = () => {
    // Fin an ability to add new task
    if (task.trim() !== '') {
      const updatedTodos = [...todos, {
        id: generateUniqueId(),
        label: task,
        checked: false,
      }];
      setTodos(updatedTodos);
      setTask('');
    }
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
