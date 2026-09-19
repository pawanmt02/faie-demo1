import { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <main className="error-state"><h1>Daymark is taking a pause.</h1><p>Refresh the page to return to your task list.</p><button type="button" onClick={() => window.location.reload()}>Refresh</button></main>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;