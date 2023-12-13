import React from 'react';

function NavBar({handlePrevious, handleNext, pokemonIndex, pokemonList }) {
    return (
        <div className="NavBar">
            {pokemonIndex > 0 && <button onClick={handlePrevious}>Précédent</button>}
            {pokemonIndex < pokemonList.length - 1 && <button onClick={handleNext}>Suivant</button>}
        </div>
    )
}

export default NavBar;