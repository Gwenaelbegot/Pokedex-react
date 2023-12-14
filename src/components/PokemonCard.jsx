import PropTypes from "prop-types";

function PokemonCard(props) {

  const {imgSrc, name, nDex,type} = props.pokemon;
    return (
      <figure>
    
        {imgSrc ? <img src={imgSrc}/> : <p>???</p>}
  
        <figcaption>
        <p>{name}</p>
        <p>{nDex}</p>
        <p>{type}</p>
        </figcaption>
      </figure>
    );

  }

  PokemonCard.propTypes = {
   pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    nDex: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
   }).isRequired, 
  }


  export default PokemonCard;