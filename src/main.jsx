import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import TodoApp from './TodoApp.jsx';
import './styles/base.css';
import './styles/todo.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <TodoApp />
    </ErrorBoundary>
  </StrictMode>,
);
