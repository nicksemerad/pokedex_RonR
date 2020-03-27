import React from 'react';
import Pokemon from './Pokemon'

const PokeList = ({ pokemons, updatePokemon, deletePokemon }) => (
  <>
  {
    pokemons.map( p => 
        <Pokemon 
        {...p} 
        updatePokemon={updatePokemon}
        deletePokemon={deletePokemon}
        />
      )
  }

  </>
)

export default PokeList;