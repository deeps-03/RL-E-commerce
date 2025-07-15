// main.tsx
// Entry point for the React app. Sets up Redux provider and mounts the app to the DOM.
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store'; // Redux store
import './index.css'; // Global styles
import App from './App'; // Main app component

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Provide Redux store to the entire app */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
