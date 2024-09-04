import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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
      setNewTask('');
      setSelectedCategory('');
    }
  };

  return (
    <form className="new-task" onSubmit={handleSubmit}>
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
      <input
        type="text"
        placeholder="Enter a new task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />      <button type="submit" className="add-btn">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </form>
  );
};

export default TaskInput;
