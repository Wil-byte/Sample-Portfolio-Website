// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App'; // Correct path for App.tsx in project root
import './index.css'; // Import your main CSS file

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);