import link from './index';

let randomly = Math.floor(Math.random() * 800);

export default function randomPokemon() {
  let section =document.querySelector('section')
    let pokemons = JSON.parse(localStorage.getItem("pokemon"));
    section.firstChild.remove();
    pokemons = pokemons.filter((td) => td.id != section.firstChild.id);
    console.log(section.firstChild);
  
    localStorage.setItem("pokemon", JSON.stringify(pokemons));
    link(randomly);
    setTimeout(() => {
      location.reload();
    }, 1000);
  }