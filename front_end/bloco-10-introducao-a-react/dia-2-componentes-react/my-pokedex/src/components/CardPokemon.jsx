import React from 'react';
import './cardPokemon.css';
// import pokemons from '../data';

class CardPokemon extends React.Component {
  render () {

    const { pokemons } = this.props;

    return (
          <section className='card'>
            {pokemons.map((pokemon) => {
              return (
                <section className='oPokemon' key={pokemon.id}>
                  <div className='textInfoPokemon'>
                    <h1>{pokemon.name}</h1>
                    <h5>Tipo: {pokemon.type}</h5>
                    <h5>Peso médio: {pokemon.averageWeight.value} {pokemon.averageWeight.measurementUnit}</h5>
                  </div>
                  <div className='imagePokemon'>
                    <img src={pokemon.image} alt={pokemon.name}/>
                  </div>
                </section>
              )
            })}
          </section>
    );
  }
}

export default CardPokemon;