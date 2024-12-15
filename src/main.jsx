import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';  // Ensure correct import for React 18
import App from './App.jsx';
import './index.css';

const root = createRoot(document.getElementById('root'));  // Make sure 'root' exists in Webflow
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
