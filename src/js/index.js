//var
let section = document.querySelector("section");
let input = document.querySelector("input");

let inputtext = document.querySelector(".input-text");
let search = document.querySelector(".search");
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");

//import
import startLocalStorage from './startLocalStorage'
import deletePokemon from './deletePokemon'
import FindpokemonData from './FindPokemonData'
import lowercasename from './lowercasename'
import randomPokemon from './randomPokemon'

//plus and minus eventlistener
plus.addEventListener("click", () => {
  input.value++;
});
minus.addEventListener("click", () => {
  input.value--;
});



startLocalStorage();

export default function link(valeur)  {
  
  fetch("https://pokeapi.co/api/v2/pokemon/" + valeur + "/")
    .then((resp) => resp.json())
    .then((data) => {
      
      FindpokemonData(data)

     input.value=""
    
    })}
    
    
    
    const text = () => {
      
      let nametolowercase = lowercasename(inputtext.value);
  
  fetch("https://pokeapi.co/api/v2/pokemon/" + nametolowercase + "/")
  .then((resp) => resp.json())
  .then((data) => {
    FindpokemonData(data)

      inputtext.value = "";
    })
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



//input eventListener

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

      link(input.value);
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

  text();
  setTimeout(() => {
    location.reload();
  }, 1000);
});
