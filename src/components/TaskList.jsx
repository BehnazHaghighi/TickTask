import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const TaskList = ({ tasks, categories, onDeleteTask, onToggleTaskCompletion }) => {

  const getCategoryName = (categoryId) => {
    const category = categories.find(category => String(category.id) === String(categoryId));
    return category ? category.name : 'No Category';
  };

  const remainingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="task-list">
      <h2>Your Tasks</h2>
      <ul>
        {remainingTasks.map((task) => (
          <li key={task.id} className="task-item">
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => onToggleTaskCompletion(task.id)} 
            />
            <span className="task-name">{task.name}</span>
            <span className="task-category">({getCategoryName(task.categoryId)})</span>
            <button className="task-delete" onClick={() => onDeleteTask(task.id)}>
              <FontAwesomeIcon icon={faTrash} className="delete-icon" /> 
            </button>
          </li>
        ))}
      </ul>

      {completedTasks.length > 0 && (
        <>
          <h2>Completed Tasks</h2>
          <ul>
            {completedTasks.map((task) => (
              <li key={task.id} className="task-item completed">
                <input 
                  type="checkbox" 
                  checked={task.completed} 
                  onChange={() => onToggleTaskCompletion(task.id)} 
                />
                <span className="task-name-completed">{task.name}</span>
                <span className="task-category">({getCategoryName(task.categoryId)})</span>
                <button className="task-delete" onClick={() => onDeleteTask(task.id)}>
                  <FontAwesomeIcon icon={faTrash} className="delete-icon" /> 
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default TaskList;
