import { ListFilter, Trash2 } from 'lucide-react';
import TaskFilters from './TaskFilters.jsx';
import TodoList from './TodoList.jsx';

function TaskPanel({ tasks, visibleTasks, activeFilter, remainingCount, completedCount, onFilterChange, onToggleTask, onEditTask, onDeleteTask, onClearCompleted }) {
  return (
    <section className="task-panel" aria-labelledby="task-list-heading">
      <div className="panel-top">
        <div><h2 id="task-list-heading">Your tasks</h2><span className="task-count">{remainingCount} {remainingCount === 1 ? 'task' : 'tasks'} remaining</span></div>
        <div className="panel-icon"><ListFilter size={18} /></div>
      </div>
      <TaskFilters activeFilter={activeFilter} taskCount={tasks.length} onChange={onFilterChange} />
      <TodoList tasks={visibleTasks} onToggleTask={onToggleTask} onEditTask={onEditTask} onDeleteTask={onDeleteTask} />
      <div className="panel-footer">
        <span><span className="progress-dot" />{completedCount} completed</span>
        {completedCount > 0 && <button className="clear-button" type="button" onClick={onClearCompleted}><Trash2 size={14} />Clear completed</button>}
      </div>
    </section>
  );
}

export default TaskPanel;
