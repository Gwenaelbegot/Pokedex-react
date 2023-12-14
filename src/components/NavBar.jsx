import React from 'react';

function NavBar({pokemonIndex,handlePokemonClick, pokemonList }) {

    return (
        <div className="navbar">
    
            {pokemonList.map((pokemonList, index) => (
             <input 
             key={index}
             type="button" 
             value={pokemonList.name}
             onClick={() => handlePokemonClick(index)}
             />
            ) )}

           
        </div>
    )
}

export default NavBar;