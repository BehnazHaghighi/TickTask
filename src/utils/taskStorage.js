export const loadTasks = () => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  };
  
  export const saveTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  
  export const addNewTask = (tasks, newTask) => {
    return [...tasks, newTask];
  };
  
  export const removeTask = (tasks, index) => {
    return tasks.filter((_, i) => i !== index);
  };
  