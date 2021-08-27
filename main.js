//Make an object for Hercules (Main Character)

//Will be used to run the game in logical order
function runGame() {

}

//Create the hercules object
let hercules = {
    health: 20,
    atkPower: 5,
    attacks: [
        {name: 'punch(light attack: 2 dmg)', damage: 2},
        {name: 'stab(normal attack: 5 dmg)', damage: 5},
        {name: 'flying dagger(heavy attack: 6 dmg)', damage: 6}
    ],
    selectAttack() {
        alert('What attack will you use?');
    }
};
// Creation of the first enemy
let wildDog = {
    enemyNum: 1,
    name: 'Wild Dog',
    atkPower: 1,
    attacks: ['scratch', 'bite', 'tear'],
    health: 5,

    updateHealth(damageDone) {
        this.health -= damageDone;
    }
};
let nemeanLion = {
    enemyNum: 2,
    name: 'Vicious Nemean Lion',
    atkPower: 4,
    attacks: ['bite', 'leap and slash', 'slash'],
    health: 15,

    updateHealth(damageDone) {
        this.health -= damageDone;
    }
};

//Creates the story messages in an object
let storyObjects = {
        messages: ['"Your first mission will be to slay the ruthless Nemean Lion." - King Eurystheus', 
        'Fantastic job! Now that you have completed the mission, you can head back to the King to find out what is in store next!',
        '"Glad to hear you have done well, next I ask you to defeat the nine-headed Lernaean Hydra, I suspect that you are the only one for the job. Do not let us down."',
        ]
        // {order: 1, message: '"Your first mission will be to slay the ruthless Nemean Lion." - King Eurystheus'},
        // {order: 2, message: 'Fantastic job! Now that you have completed the mission, you can head back to the King to find out what is in store next!'}, 
        // {order: 3, message: '"Glad to hear you have done well, next I ask you to defeat the nine-headed Lernaean Hydra, I suspect that you are the only one for the job. Do not let us down."'},
        // {order: 4, message: ''}
    ,
    
    //Prints the messages at x, where x is the point of the story you are at which is saved by a variable in the 
    printStoryAlert(x) {
        alert(this.messages[x]);
        return x += 1;
    }
};

let x = 0;
x = storyObjects.printStoryAlert(x);
console.log(x);