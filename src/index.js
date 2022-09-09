import React from 'react';
import { createRoot } from 'react-dom/client';
import './scss/style.scss';
import App from './App.jsx';
  
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App />);

