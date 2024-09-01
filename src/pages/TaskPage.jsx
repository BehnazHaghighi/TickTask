import React, { useState, useEffect } from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import { loadTasks, saveTasks, addNewTask, removeTask } from '../utils/taskStorage';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(loadTasks());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const handleAddTask = (newTask) => {
    setTasks(addNewTask(tasks, newTask));
  };

  const handleDeleteTask = (index) => {
    setTasks(removeTask(tasks, index));
  };

  return (
    <div className="task-page">
      <Header />
      <main className="app-main">
        <TaskInput onAddTask={handleAddTask} />
        <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
      </main>
      <Footer />
    </div>
  );
};

export default TaskPage;
