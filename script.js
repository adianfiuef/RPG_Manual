class Character{
    constructor(name, attack, defense, health){
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.health = health;

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

    var name = names[randomInt(0, names.length -1)]

    var attack = randomInt(0, 99)

    var defense = randomInt (0, 99)

    var health = randomInt (100, 1000)

    characters.push(new Character(name, attack, defense, health));
}