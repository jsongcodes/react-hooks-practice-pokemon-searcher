import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {
const cards = pokemon.map(poke => (
  <PokemonCard key={poke.id} pokemon={poke} />
))

  return (
    <Card.Group itemsPerRow={6}>{cards}
      <h1>Hello From Pokemon Collection</h1>
    </Card.Group>
  );
}

export default PokemonCollection;
