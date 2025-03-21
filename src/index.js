import './styles.css';
import { createRoot } from 'react-dom/client';
import App from './App';
import React from 'react';

console.log('Webpack is working!');

// You can add more JavaScript code here
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const button = document.createElement('button');
  button.textContent = 'Click me!';
  button.addEventListener('click', () => {
    alert('Button clicked!');
  });
  app.appendChild(button);
  const container = document.getElementById('appReact');
  const root = createRoot(container);
  root.render(<App />);
});