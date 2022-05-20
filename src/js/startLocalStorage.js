import addhtml from "./addhtml";
export default function startLocalStorage() {
    let pokemons = JSON.parse(localStorage.getItem("pokemon"));
    if (!pokemons) {
      localStorage.setItem("pokemon", JSON.stringify([]));
    } else {
      for (let elem in pokemons) {
        addhtml(pokemons[elem]);
      }
    }
  };


