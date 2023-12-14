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
      type: "Plant",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "Ivysaur",
      nDex : "002",
      type: "Plant",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    },
    {
      name: "Venusaurr",
      nDex : "003",
      type: "Plant",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    },
    {
      name: "Charmander",
      nDex : "004",
      type: "Fire",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "Charmeleon",
      nDex : "005",
      type: "Fire",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    },
    {
      name: "Charizard",
      nDex : "006",
      type: "Fire",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    },
    {
      name: "mew",
      nDex : "151",
      type: "Psy",
    },
    {
      name: "Machamp",
      nDex : "068",
      type: "Fight",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/68.png",
    },
  ];

  const handlePokemonClick = (index) => {
    setPokemonIndex(index);
  };



  return (
    <>
      <div>

        <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
        <NavBar className="Navbar" 
        handlePokemonClick={handlePokemonClick}
        pokemonIndex={pokemonIndex}
        pokemonList={pokemonList}
        />
      
    
      </div>
    </>
  );
  
}


export default App;
