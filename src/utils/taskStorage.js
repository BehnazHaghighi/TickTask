// src/utils/taskStorage.js

const TASK_STORAGE_KEY = 'tasks';

export function loadTasks() {
  const tasks = localStorage.getItem(TASK_STORAGE_KEY);
  return tasks ? JSON.parse(tasks) : [];
}

export function saveTasks(tasks) {
  localStorage.setItem(TASK_STORAGE_KEY, JSON.stringify(tasks));
}

export function addNewTask(tasks, newTask) {
  const updatedTasks = [...tasks, newTask];
  saveTasks(updatedTasks);
  return updatedTasks;
}

export function removeTask(tasks, taskId) {
  const updatedTasks = tasks.filter(task => task.id !== taskId);
  saveTasks(updatedTasks);
  return updatedTasks;
}

export function toggleTaskCompletion(tasks, taskId) {
  const updatedTasks = tasks.map(task =>
    task.id === taskId ? { ...task, completed: !task.completed } : task
  );
  saveTasks(updatedTasks);
  return updatedTasks;
}
