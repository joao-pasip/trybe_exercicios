import './App.css';
import Greeting from './components/Greeting';
import Image from './components/Image';

const name = 'João';
const lastname = 'Pasip'

const source = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg';

const alternativeText = 'Cute cat staring';

function App() {
  return (
    <div className="App">
      <Greeting name={name} lastname={lastname}/>
      <Image source={source} alternativeText={alternativeText}/>
    </div>
  );
}

export default App;
