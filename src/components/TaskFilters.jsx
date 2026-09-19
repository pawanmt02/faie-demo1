const filters = ['All', 'Active', 'Completed'];

function TaskFilters({ activeFilter, taskCount, onChange }) {
  return (
    <div className="filter-bar" role="group" aria-label="Filter tasks">
      {filters.map((filter) => (
        <button key={filter} type="button" className={activeFilter === filter ? 'active' : ''} onClick={() => onChange(filter)}>
          {filter}{filter === 'All' && <span>{taskCount}</span>}
        </button>
      ))}
    </div>
  );
}

export default TaskFilters;
