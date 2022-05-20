export default function addhtml(data) {
    let section=document.querySelector('section')
    let div = document.createElement("div");
    section.appendChild(div);
    div.id = data.id;
    div.classList.add("div");
    let img = document.createElement("img");
    div.appendChild(img);
    img.src = data.image;
    let h2 = document.createElement("h2");
    div.appendChild(h2);
    h2.innerText = data.id + "." + data.name;
  
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    div.appendChild(p);
    div.appendChild(p2);
    p.innerText = "Type: " + data.type;
    p2.innerText = "Abilities: " + data.abilities;
  
    let div2 = document.createElement("div");
    div.appendChild(div2);
    div2.classList.add("buttons");
  
    let button = document.createElement("button");
    div2.appendChild(button);
    button.classList.add("random");
    button.innerText = "random";
  
    let delette = document.createElement("button");
    div2.appendChild(delette);
    delette.innerText = "delete";
    delette.classList.add("delete");
    // delette.addEventListener('click',deletePokemon)
  
    let pokemons = JSON.parse(localStorage.getItem("pokemon"));
    localStorage.setItem("pokemon", JSON.stringify(pokemons));
  }