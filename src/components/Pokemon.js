import React, { useState, useEffect } from 'react';

const Pokemon = ({ id }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error('Error fetching Pokemon:', error);
      }
    };

    fetchPokemon();
  }, [id]);

  if (!pokemon) {
    return <div>Fetching</div>;
  }
  return (
    <div>
      <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
      <img src={pokemon.sprites.front_default} alt="Pokemon Image" />
    </div>
  );
};

export default Pokemon;