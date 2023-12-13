import PropTypes from "prop-types";

function PokemonCard(props) {

  const {imgSrc, name, nDex} = props.pokemon;
    return (
      <figure>
    
        {imgSrc ? <img src={imgSrc}/> : <p>???</p>}
  
        <figcaption>
        <p>{name}</p>
        <p>{nDex}</p>
        </figcaption>
      </figure>
    );

  }

  PokemonCard.propTypes = {
   pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    nDex: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
   }).isRequired, 
  }


  export default PokemonCard;