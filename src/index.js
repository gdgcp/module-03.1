import './styles.css';

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
});