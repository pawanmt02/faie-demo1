import { BarChart3 } from 'lucide-react';

function TaskSummary({ remainingCount, completedCount, totalCount }) {
  const completionRate = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);
  const progressMessage = totalCount === 0 ? 'Ready when you are' : completionRate === 100 ? 'All clear for today' : 'Keep the momentum going';

  return (
    <div className="task-summary" aria-label="Task progress">
      <div className="summary-heading"><span><BarChart3 size={15} />Today&apos;s progress</span><strong>{completionRate}%</strong></div>
      <div className="progress-track"><span style={{ width: `${completionRate}%` }} /></div>
      <div className="summary-details"><span>{progressMessage}</span><span>{remainingCount} remaining</span><span>{completedCount} completed</span></div>
    </div>
  );
}

export default TaskSummary;
