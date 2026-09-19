import { RotateCcw } from 'lucide-react';
import { useCallback, useMemo, useState } from 'react';
import AppHeader from './components/AppHeader.jsx';
import TaskPanel from './components/TaskPanel.jsx';
import TaskSummary from './components/TaskSummary.jsx';
import TodoForm from './components/TodoForm.jsx';
import { useLocalStorage } from './hooks/useLocalStorage.js';
import { getFilterCounts, getTaskStats, getVisibleTasks } from './utils/taskUtils.js';

function TodoApp() {
  const [tasks, setTasks] = useLocalStorage('faie-tasks', []);
  const [activeFilter, setActiveFilter] = useState('All');
  const [darkMode, setDarkMode] = useLocalStorage('faie-todo-theme', false);

  const visibleTasks = useMemo(() => getVisibleTasks(tasks, activeFilter), [activeFilter, tasks]);
  const taskStats = useMemo(() => getTaskStats(tasks), [tasks]);
  const filterCounts = useMemo(() => getFilterCounts(tasks), [tasks]);

  const addTask = useCallback((text) => {
    setTasks((currentTasks) => [{ id: crypto.randomUUID(), text, completed: false }, ...currentTasks]);
  }, [setTasks]);

  const toggleTask = useCallback((id) => {
    setTasks((currentTasks) => currentTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  }, [setTasks]);

  const editTask = useCallback((id, text) => {
    setTasks((currentTasks) => currentTasks.map((task) => (task.id === id ? { ...task, text } : task)));
  }, [setTasks]);

  const deleteTask = useCallback((id) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
  }, [setTasks]);

  const clearCompleted = useCallback(() => {
    setTasks((currentTasks) => currentTasks.filter((task) => !task.completed));
  }, [setTasks]);

  const { completedCount, remainingCount, totalCount } = taskStats;

  return (
    <div className={`todo-app ${darkMode ? 'dark-mode' : ''}`}>
      <AppHeader darkMode={darkMode} onToggleTheme={() => setDarkMode((current) => !current)} />
      <main className="todo-container">
        <section className="intro"><p className="kicker">Personal focus</p><h1>Make space for<br /><em>what matters.</em></h1><p className="intro-copy">A quiet place for your tasks, one clear step at a time.</p></section>
        <TodoForm onAddTask={addTask} />
        <TaskSummary remainingCount={remainingCount} completedCount={completedCount} totalCount={totalCount} />
        <TaskPanel visibleTasks={visibleTasks} filterCounts={filterCounts} activeFilter={activeFilter} remainingCount={remainingCount} completedCount={completedCount} onFilterChange={setActiveFilter} onToggleTask={toggleTask} onEditTask={editTask} onDeleteTask={deleteTask} onClearCompleted={clearCompleted} />
        <p className="privacy-note"><RotateCcw size={13} />Your tasks are saved automatically in this browser.</p>
      </main>
    </div>
  );
}

export default TodoApp;
