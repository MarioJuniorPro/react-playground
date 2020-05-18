import React from 'react';
import { PokemonRef } from 'src/interfaces';
import Link from 'next/link';

interface Props {
  pokemons: PokemonRef[];
}

const PokemonListPage: React.FC<Props> = ({ pokemons }: Props) => {
  return (
    <ul>
      {pokemons.map((pokemon: PokemonRef) => (
      <li key={pokemon.name}>
        <Link href="/pokemon/[name]" as={`/pokemon/${pokemon.name}`}>
          <a>{pokemon.name}</a>
        </Link>
      </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000')
  const data = await res.json();
  const pokemons = data.results;

  return {
    props: {
      pokemons
    },
  }
}

export default PokemonListPage;
