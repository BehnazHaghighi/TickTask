
import React, { useState, useEffect } from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import CategoryInput from '../components/CategoryInput';
import CategoryList from '../components/CategoryList';
import { loadTasks, saveTasks, addNewTask, removeTask, toggleTaskCompletion } from '../utils/taskStorage';
import { loadCategories, saveCategories, addNewCategory, removeCategory, updateCategory } from '../utils/categoryStorage';
import Footer from '../components/Footer';
import '../styles/TaskPage.css';

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);

  useEffect(() => {
    setTasks(loadTasks());
    setCategories(loadCategories());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  useEffect(() => {
    saveCategories(categories);
  }, [categories]);

  const handleAddTask = (taskName, categoryId) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      categoryId,
      completed: false,
    };
    setTasks(addNewTask(tasks, newTask));
  };

  const handleDeleteTask = (taskId) => {
    setTasks(removeTask(tasks, taskId));
  };

  const handleToggleTaskCompletion = (taskId) => {
    setTasks(toggleTaskCompletion(tasks, taskId));
  };

  const handleAddCategory = (newCategory) => {
    setCategories(addNewCategory(categories, newCategory));
  };

  const handleDeleteCategory = (categoryId) => {
    setCategories(removeCategory(categories, categoryId));
  };

  const handleEditCategory = (category) => {
    setEditingCategory(category);
  };

  const handleUpdateCategory = (updatedCategory) => {
    setCategories(updateCategory(categories, updatedCategory));
    setEditingCategory(null);
  };

  return (
    <div className="task-page">
      <main className="app-main">
        <div className="task-category-container">
          <div className="category-column">
            <CategoryInput 
              onAddCategory={handleAddCategory} 
              onEditCategory={handleUpdateCategory} 
              editingCategory={editingCategory} 
            />
            <CategoryList 
              categories={categories} 
              onDeleteCategory={handleDeleteCategory} 
              onEditCategory={handleEditCategory} 
            />
          </div>
          <div className="task-column">
            <TaskInput onAddTask={handleAddTask} categories={categories} />
            <TaskList 
              tasks={tasks} 
              categories={categories} 
              onDeleteTask={handleDeleteTask} 
              onToggleTaskCompletion={handleToggleTaskCompletion} 
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TaskPage;
