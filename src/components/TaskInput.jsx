
import React, { useState } from 'react';

const TaskInput = ({ onAddTask, categories }) => {
  const [newTask, setNewTask] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedCategory) {
      alert('Please select a category.');
      return;
    }

    if (newTask.trim()) {
      onAddTask(newTask, selectedCategory);
      setNewTask(''); // Clear the input field
      setSelectedCategory(''); // Clear the selected category
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
      <select 
        value={selectedCategory} 
        onChange={(e) => setSelectedCategory(e.target.value)}
        required
      >
        <option value="" disabled>Select Category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>{category.name}</option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
