export default function deletePokemon() {
  let section=document.querySelector('section')
    section.firstChild.remove();
    let pokemons = JSON.parse(localStorage.getItem("pokemon"));
    pokemons = pokemons.filter((td) => td.id != section.firstChild.id);
  
    localStorage.setItem("pokemon", JSON.stringify(pokemons));
    location.reload()
  }