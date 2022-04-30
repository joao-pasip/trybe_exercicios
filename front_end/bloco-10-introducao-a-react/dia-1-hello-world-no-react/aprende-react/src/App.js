import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

let compromises = ['Acordar', 'Estudar', 'Ler', 'Correr'];

function App() {
  return (
    <ul>{compromises.map((element) => {
      return Task(element);
    })}</ul>
  );
}

export default App;
