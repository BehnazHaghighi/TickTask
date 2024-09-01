import React from 'react';

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <div className="task-list">
      <h2>Your Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span className="task-name">{task}</span>
            <button className="task-delete" onClick={() => onDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
