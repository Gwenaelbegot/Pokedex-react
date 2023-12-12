

function PokemonCard(props) {

  const {imgSrc, name, num} = props.pokemon;
    return (
      <figure>
        {imgSrc ? <img src={imgSrc} alt={name} /> : <p>???</p>}
  
        <figcaption>
        <p>{name}</p>
        <p>{num}</p>
        </figcaption>
      </figure>
    );

  }


  export default PokemonCard;