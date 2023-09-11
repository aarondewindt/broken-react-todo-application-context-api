import * as React from 'react';

import { TodosContext } from '../../todo-context';

import './todo-results.scss';

export const TodoResults = () => {
  const { todos } = React.useContext(TodosContext);
  const calculateChecked = () => {
    // Fix an ability to calculate completed tasks
    const completedTasks = todos.filter((todo) => todo.checked);
    return completedTasks.length;
  };

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
