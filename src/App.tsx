import React from 'react';

const App = () => {
  return (
    <div className="app">
      <h1>Hello from React!</h1>
      <p>This is a JSX component</p>
      <img src="https://picsum.photos/200/300" alt="Example" />
      <input type="text" />
      <div
        onClick={() => console.log('clicked')}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            console.log('clicked');
          }
        }}
        role="button"
        tabIndex={0}
      >
        Click me
      </div>
      <span style={{ color: 'red' }}>Error message</span>
      <div className="heading">This looks like a heading</div>
    </div>
  );
};

export default App;
