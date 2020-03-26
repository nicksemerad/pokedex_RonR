import React, { Component } from 'react';
import axios from 'axios';
import PokeList from './PokeList';

class Pokedex extends Component { 
  state = { pokemons: [] }

  componentDidMount() {
    axios.get('/api/pokemons')
      .then( res => {
        this.setState({ pokemons: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  updatePokemon = (id, pokemon) => {
    axios.put(`/api/pokemons/${id}`, { pokemon })
    .then( res => {
      const pokemons = this.state.pokemons.map( p => {
        if (p.id === id) {
          return res.data
        } 
          return p
      })
      this.setState( { pokemons })
    })
    .catch( err => {
      console.log(err)
    })
  }

  render() {
    const { pokemons } = this.state
    return(
      <>
        <h1>Pokedex</h1>
        <PokeList 
        pokemons={pokemons}
        updatePokemon={this.updatePokemon}
        />
      </>
    )
  }
}

export default Pokedex;