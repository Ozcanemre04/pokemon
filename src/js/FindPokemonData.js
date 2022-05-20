import addhtml from "./addhtml";


export default function FindpokemonData(data) {
    let pokemon = {
      name: data.name,
      id: data.id,
      image: data.sprites["front_default"],
      type: data.types.map((type) => type.type.name).join(" , "),
      abilities: data.abilities
        .map((ability) => ability.ability.name)
        .join(" , "),
    };
  
    let pokemons = JSON.parse(localStorage.getItem("pokemon"));
    pokemons.push(pokemon);
    localStorage.setItem("pokemon", JSON.stringify(pokemons));
    addhtml(pokemons);
  }

  