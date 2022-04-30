import React, { Component } from 'react';
import pokemons from './data';
import CardPokemon from './components/CardPokemon';
import './App.css'

class App extends Component {
  render() {
    return (
      <main>
        <section className='title'>
          <h1>Pokedex</h1>
        </section>
        <CardPokemon pokemons={pokemons}/>
      </main>
    );
  }
}

export default App;
