export function getVisibleTasks(tasks, activeFilter) {
  if (activeFilter === 'Active') return tasks.filter((task) => !task.completed);
  if (activeFilter === 'Completed') return tasks.filter((task) => task.completed);
  return tasks;
}

export function getTaskStats(tasks) {
  const completedCount = tasks.filter((task) => task.completed).length;
  return {
    totalCount: tasks.length,
    completedCount,
    remainingCount: tasks.length - completedCount,
  };
}

export function getFilterCounts(tasks) {
  const completedCount = tasks.filter((task) => task.completed).length;
  return {
    All: tasks.length,
    Active: tasks.length - completedCount,
    Completed: completedCount,
  };
}
