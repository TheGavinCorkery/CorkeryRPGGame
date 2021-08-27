//Make an object for Hercules (Main Character)

//Will be used to run the game in logical order
function runGame() {
    
}

//Create the hercules object
let hercules = {
    health: 20,
    atkPower: 5,
    chosenAttackDmg: 0,
    chosenAttackName: '',
    attacks: [
        {name: 'punch(light attack: 2 dmg)', damage: 2},
        {name: 'stab(normal attack: 5 dmg)', damage: 5},
        {name: 'flying dagger(heavy attack: 6 dmg)', damage: 6}
    ],
    selectAttack() {
        let chosenAttack = prompt('What attack would you like to use? \n1. ' + this.attacks[0].name + '\n2. ' + 
            this.attacks[1].name + '\n3. ' + this.attacks[2].name);
        
        this.chosenAttackDmg = this.attacks[chosenAttack - 1].damage;
        this.chosenAttackName = this.attacks[chosenAttack - 1].name;
        
    },
    //Prints users chosen attack to the console and displays name of attack and damage to be done
    printAttack(chosenAttack) {
        prompt('You chose to use ' + this.attacks[chosenAttack]);
        console.log(`Hercules attack did: ${this.chosenAttackDmg} damage`);
    },

    updateHerculesHealth(damageDone) {
        hercules.health -= damageDone;
    }
};

//Create enemy object with each enemy and properties stored here
let enemies = {
    enemies: [
    {
        enemyNum: 1,
        name: 'Wild Dog',
        atkPower: 1,
        attacks: ['scratch', 'bite', 'tear'],
        currentAttack: '',
        health: 5,
    },
    {
        enemyNum: 2,
        name: 'Vicious Nemean Lion',
        atkPower: 4,
        attacks: ['bite', 'leap and slash', 'slash'],
        currentAttack: '',
        health: 15,
    }
    ],

    //Updates health of enemy character passed in
    updateEnemyHealth(dealtTo, damageDone) {
    enemies.enemies[dealtTo].health -= damageDone;
    console.log(`Enemies attack did: ${enemies.enemies[dealtTo].atkPower} damage`);
    },
    selectAttack(currentEnemy) {
        let randomAttack = Math.floor(Math.random() * enemies.enemies[currentEnemy].attacks.length);
        enemies.enemies[currentEnemy].currentAttack =  enemies.enemies[currentEnemy].attacks[randomAttack];
    }
};

//Creates the story messages in an object
let storyObjects = {
        messages: ['"Your first mission will be to slay the ruthless Nemean Lion." - King Eurystheus', 
        'Fantastic job! Now that you have completed the mission, you can head back to the King to find out what is in store next!',
        '"Glad to hear you have done well, next I ask you to defeat the nine-headed Lernaean Hydra, I suspect that you are the only one for the job. Do not let us down."',
        ]
    ,
    
    //Prints the messages at x, where x is the point of the story you are at which is saved by a variable in the 
    printStoryAlert(x) {
        alert(this.messages[x]);
        return x += 1;
    }
};

runGame();