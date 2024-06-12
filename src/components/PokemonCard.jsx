function PokemonCard(props) {
  console.log(props);
  return (
    <div>
      <p>{props.myPokemon.name}</p>{" "}
    </div>
  );
}

export default PokemonCard;
