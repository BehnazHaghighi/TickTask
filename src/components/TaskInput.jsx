import React, { useState } from 'react';

const TaskInput = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      onAddTask(newTask);
      setNewTask(''); // Clear the input field
    }
  };

  return (
    <form className="new-task" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Enter a new task..." 
        value={newTask} 
        onChange={(e) => setNewTask(e.target.value)} 
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
