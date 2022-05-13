let section = document.querySelector('section')
let input = document.querySelector('input')
let button = document.querySelector('button')

let minus = document.querySelector('.minus')

let plus = document.querySelector('.plus')
plus.addEventListener('click',()=>{
    input.value++
    
    
})
minus.addEventListener('click',()=>{
    input.value--
    
    
})

const startconf=()=>{
    let pokemons=JSON.parse(localStorage.getItem('pokemon'))
    if(!pokemons){
        localStorage.setItem('pokemon',JSON.stringify([]))
    }
    else{
        for(let elem in pokemons){
            addhtml(pokemons[elem])
            
        }
    }
}
startconf()

const link = () => {

    let value = input.value
    fetch('https://pokeapi.co/api/v2/pokemon/' + value + '/')
        .then(resp => resp.json())
        .then(data => {


            let pokemon = {
                name: data.name,
                id: data.id,
                image: data.sprites["front_default"],
                type: data.types.map(type => type.type.name).join(' , '),
                abilities: data.abilities.map(ability => ability.ability.name).join(' , ')

            }
            let pokemons=JSON.parse(localStorage.getItem('pokemon'))
            pokemons.push(pokemon)
            localStorage.setItem('pokemon',JSON.stringify(pokemons))
            addhtml(pokemons)
    
            input.value = ""
        })

}




const randoms = () => {
    let random = Math.floor(Math.random() * 800)

    fetch('https://pokeapi.co/api/v2/pokemon/' + random + '/')
        .then(resp => resp.json())
        .then(data => {


            let pokemon = {
                name: data.name,
                id: data.id,
                image: data.sprites["front_default"],
                type: data.types.map(type => type.type.name).join(' , '),
                abilities: data.abilities.map(ability => ability.ability.name).join(' , ')

            }
            let pokemons=JSON.parse(localStorage.getItem('pokemon'))
            pokemons.push(pokemon)
            localStorage.setItem('pokemon',JSON.stringify(pokemons))
            addhtml(pokemons)

        })
}



function addhtml(data) {



    let div = document.createElement('div')
    section.appendChild(div)
    div.id=data.id
    div.classList.add('div')
    let img = document.createElement('img')
    div.appendChild(img)
    img.src = data.image
    let h2 = document.createElement('h2')
    div.appendChild(h2)
    h2.innerText = data.id + "." + data.name

    let p = document.createElement('p')
    let p2 = document.createElement('p')
    div.appendChild(p)
    div.appendChild(p2)
    p.innerText = "Type: "+data.type
    p2.innerText = "Abilities: "+data.abilities

let div2 =document.createElement('div')
div.appendChild(div2)
div2.classList.add('buttons')

    let button = document.createElement('button')
    div2.appendChild(button)
    button.classList.add('random')
    button.innerText = "random"

    button.addEventListener('click', () => {

        
        let pokemons=JSON.parse(localStorage.getItem('pokemon'))
        pokemons= pokemons.filter(td=>td.id!=div.id)
        div.remove()
        
        localStorage.setItem('pokemon',JSON.stringify(pokemons))
        randoms()
        setTimeout(()=>{
            location.reload()
          },1500)
      
       
        
    })

    let delette=document.createElement('button')
    div2.appendChild(delette)
    delette.innerText="delete"
    delette.classList.add("delete")
    delette.addEventListener('click',()=>{
        div.remove()
        let pokemons=JSON.parse(localStorage.getItem('pokemon'))
        pokemons= pokemons.filter(td=>td.id!=div.id)
        
        localStorage.setItem('pokemon',JSON.stringify(pokemons))
     
    })

    let pokemons=JSON.parse(localStorage.getItem('pokemon'))
    localStorage.setItem('pokemon',JSON.stringify(pokemons))

}




document.addEventListener('keyup', (e) => {

    if (e.key === "Enter") {
        let vl = input.value
        if (vl >= 898 || vl<0) {
            alert('limit')
        } else if (input.value === "") {
            alert('write a number')
        } else {
            link()
setTimeout(()=>{
  location.reload()
},1500)
        }
       
    }
})