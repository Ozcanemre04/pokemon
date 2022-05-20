let section = document.querySelector("section");
let input = document.querySelector("input");

let inputtext = document.querySelector(".input-text");
let search = document.querySelector(".search");
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");


import startLocalStorage from './startLocalStorage'
import deletePokemon from './deletePokemon'
import FindpokemonData from './FindPokemonData'
import lowercasename from './lowercasename'
import randomPokemon from './randomPokemon'


plus.addEventListener("click", () => {
  input.value++;
});
minus.addEventListener("click", () => {
  input.value--;
});

let randomly = Math.floor(Math.random() * 800);
let nametolowercase = lowercasename(inputtext.value);

startLocalStorage();

function link(valeur)  {
  
  fetch("https://pokeapi.co/api/v2/pokemon/" + valeur.value + "/")
    .then((resp) => resp.json())
    .then((data) => {
      
      FindpokemonData(data)

     valeur.value=""
    
})}




  
  
  
  export default function randoms(){
  
    fetch("https://pokeapi.co/api/v2/pokemon/" + randomly + "/")
      .then((resp) => resp.json())
      .then((data) => {
        FindpokemonData(data);
      });
  };





//random
let random = document.querySelector(".random");
if (random) {
  random.addEventListener("click", randomPokemon);
}



// delete
let deleteClass = document.querySelector(".delete");
if (deleteClass) {
  deleteClass.addEventListener("click", deletePokemon);
}





document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    let vl = input.value;
    if (vl >= 898 || vl < 1) {
      alert("limit");
      input.value = "";
    } 
      if (section) {
        let pokemons = JSON.parse(localStorage.getItem("pokemon"));
        section.firstChild.remove();
        pokemons = pokemons.filter((td) => td.id != section.firstChild.id);

        localStorage.setItem("pokemon", JSON.stringify(pokemons));
      }

      link(input);
      setTimeout(() => {
        location.reload();
      }, 1000);
    
  }
});


















search.addEventListener("click", () => {
  section.firstChild.remove();
  let pokemons = JSON.parse(localStorage.getItem("pokemon"));
  pokemons = pokemons.filter((td) => td.id != section.firstChild.id);

  localStorage.setItem("pokemon", JSON.stringify(pokemons));

  link(inputtext);
  setTimeout(() => {
    location.reload();
  }, 1000);
});
