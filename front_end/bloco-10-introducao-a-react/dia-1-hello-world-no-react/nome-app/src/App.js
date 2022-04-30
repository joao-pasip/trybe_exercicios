import logo from './logo.svg';
import './App.css';
import React from 'react';
import './Component.js';
// import Component from './Component.js';

// const Task = (value) => {
//   return (
//     <li key={value}>{value}</li>
//     );
// }

// let compromises = ['study', 'work', 'play', 'happy'];

// function Component() {
//   compromises.map((element) => {
//     return Task(element)})
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <Component/> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
