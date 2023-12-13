import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'
import NavBar from './components/NavBar'


function App() {

const [pokemonIndex, setPokemonIndex] = useState(0)

  const pokemonList = [
    {
      name: "Bulbasaur",
      nDex : "001",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "Ivysaur",
      nDex : "002",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    },
    {
      name: "Venusaurr",
      nDex : "003",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    },
    {
      name: "Charmander",
      nDex : "004",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "Charmeleon",
      nDex : "005",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    },
    {
      name: "Charizard",
      nDex : "006",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    },
    {
      name: "mew",
      nDex : "151",
    },
    {
      name: "Machamp",
      nDex : "068",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png",
    },
  ];

  const handlePrevious = () => {
    setPokemonIndex((prevState) => (prevState > 0 ? prevState -1 : 0));
  };

  const handleNext = () => {
    setPokemonIndex ((prevState) => (prevState < pokemonList.length - 1 ? prevState +1 : index));
  };

  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
        <NavBar
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        pokemonIndex={pokemonIndex}
        pokemonList={pokemonList}
        />
      </div>
    </>
  )
  
}


export default App;
