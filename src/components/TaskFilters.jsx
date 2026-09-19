const filters = ['All', 'Active', 'Completed'];

function TaskFilters({ activeFilter, counts, onChange }) {
  return (
    <div className="filter-bar" role="group" aria-label="Filter tasks">
      {filters.map((filter) => (
        <button key={filter} type="button" className={activeFilter === filter ? 'active' : ''} aria-pressed={activeFilter === filter} onClick={() => onChange(filter)}>
          {filter}<span>{counts[filter]}</span>
        </button>
      ))}
    </div>
  );
}

export default TaskFilters;
