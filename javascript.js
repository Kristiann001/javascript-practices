const adding = document.querySelector(".container1")

const newGame = 
//Create an element
document.createElement("div")
//Add a class to the created element
newGame.classList.add("new_game")
//Add text in the element class 
newGame.textContent = "I am from Nairobi"
//Styling the text in the element
newGame.setAttribute("style", "color: red")

//Add the text from the console to the HTMl code
adding.appendChild(newGame)
console.log(newGame)


const oldGame = document.createElement("div")

oldGame.classList.add("old_game")
oldGame.textContent = "I was raised in Mombasa"

adding.appendChild(oldGame)
console.log(oldGame)


const update = document.querySelector(".container2")

// On the first one you name the "class" and the second is for the name you wish to have it as.`
update.setAttribute("class","new_container")

console.log(update)