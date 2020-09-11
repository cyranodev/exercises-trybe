import React from 'react';
import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
};

const tasks = [
  'Minha primeira tarefa',
  'Segunda tarefa...',
  'Terceira... aff',
  'aaah!',
];

function App() {
  return (
    <div className="App">
      <ul>
        {tasks.map(item => task(item))}
      </ul>
    </div>
  );
}

export default App;
