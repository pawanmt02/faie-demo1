import { CheckCircle2, Moon, Sun } from 'lucide-react';

function AppHeader({ darkMode, onToggleTheme }) {
  return (
    <header className="todo-header">
      <div className="header-inner">
        <div className="logo"><span className="logo-mark"><CheckCircle2 size={21} /></span><span>daymark</span></div>
        <button className="theme-button" type="button" onClick={onToggleTheme} aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </header>
  );
}

export default AppHeader;
