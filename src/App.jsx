import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'


function App() {

  const pokemonList = [
    {
      name: "Bulbasaur",
      num : "001",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
      num : "151",
    },
    {
      name: "Machamp",
      num : "068",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png",
    },
  ];

  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[1]}/>
      </div>
    </>
  )
  
}


export default App;
