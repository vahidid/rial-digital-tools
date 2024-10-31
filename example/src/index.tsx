import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './wasm_exec.js';

const rootEl = document.getElementById('root');
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}