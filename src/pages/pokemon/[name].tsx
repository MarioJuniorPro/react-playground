import { PokemonRef } from "src/interfaces";
import { GetStaticProps } from "next";

function PokemonPage({ pokemon }) {


  if(!pokemon){
    return null;
  }

  return (
  <div>
    <p>
      Name: {pokemon.name}
    </p>
    <p>
      Abilities: 
    </p>
    <ul>
      {pokemon.abilities.map(ability => (<li key={ability.ability.name}>{ability.ability.name}</li>))}
    </ul>    
  </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000')
  const data = await res.json();
  const pokemons = data.results;
  const paths = pokemons.map((pokemon: PokemonRef) => `/pokemon/${pokemon.name}`)

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async({ params }) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
  const data = await res.json();
  const pokemon = data;

  return { props: { pokemon } }
}

// export async function getServerSideProps({ params }) {
//   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
//   const data = await res.json();
//   const pokemon = data;
  
//   return { props: { pokemon } }
// }

export default PokemonPage
