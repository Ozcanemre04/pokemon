import randoms from './index'

export default function randomPokemon() {
  let section =document.querySelector('section')
    let pokemons = JSON.parse(localStorage.getItem("pokemon"));
    section.firstChild.remove();
    pokemons = pokemons.filter((td) => td.id != section.firstChild.id);
    console.log(section.firstChild);
  
    localStorage.setItem("pokemon", JSON.stringify(pokemons));
    randoms();
    setTimeout(() => {
      location.reload();
    }, 1000);
  }