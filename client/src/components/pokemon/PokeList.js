import React from 'react';
import Pokemon from './Pokemon'

const PokeList = ({ pokemons, updatePokemon }) => (
  <>
  {
    pokemons.map( p => 
        <Pokemon 
        {...p} 
        updatePokemon={updatePokemon}
        />
      )
  }

  </>
)

export default PokeList;