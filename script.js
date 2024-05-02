class Character{
    constructor(name, attack, defense, health){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.health = health;

    }

    toString(){
        return `Name: ${this.name}, Attack: ${this.attack}, Defense: ${this.defense}, Health: ${this.health}`;
        
    }

}

function randomInt(lower, higher){

    return Math.round((higher - lower) *Math.random()+ lower);
}

function addNumbers(a,b){
    return a+b;
}

var characters = [];

const names = ['Bob', 'Alice', 'John', 'Jane', 'Jack', 'Jill', 'Dylan', 'Megan', 'Tom', 'Jerry'];

function createCharacters(){

    console.log("create characters")

    var name = names[randomInt(0, names.length -1)]

    var attack = randomInt(0, 99)

    var defense = randomInt (0, 99)

    var health = randomInt (100, 1000)

    characters.push(new Character(name, attack, defense, health));
}


function showCharactersOnPage(){

    console.log("show characters")

    const charactersElement = document.getElementById("character-stats");

    charactersElement.innerHTML = "";

    characters.forEach((character) => {

        const characterDiv = document.createElement(`p`);

        characterDiv.innerHTML = character.toString();

        charactersElement.appendChild(characterDiv);

    });

}

function navigateToImages(){
    
    window.location.href = "character-images.html";
}