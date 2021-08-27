//Make an object for Hercules (Main Character)

//Will be used to run the game in logical order
function runGame() {
    let currentStoryLocation = 0;
    currentStoryLocation = storyObjects.printStoryAlert(currentStoryLocation);
    alert(`You are about to fight ${enemyObjects.enemies[hercules.currentEnemy].name}`);


}

//Create the hercules object
let hercules = {
    health: 30,
    atkPower: 5,
    chosenAttackDmg: 0,
    chosenAttackName: '',
    currentEnemy: 0,
    attacks: [
        {name: 'punch(light attack: 2 dmg)', damage: 2},
        {name: 'stab(normal attack: 5 dmg)', damage: 5},
        {name: 'flying dagger(heavy attack: 6 dmg)', damage: 6}
    ],
    completeAttack() {
        selectAttack();
        printAttack(this.chosenAttack);
        enemyObjects.updateEnemyHealth(this.currentEnemy);
    },
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
    },
    restoreHealth() {
        this.health = 30;
        alert('You have been healed by the doctor! You are now at full health!');
    }
};

//Create enemy object with each enemy and properties stored here
let enemyObjects = {
    enemies:
    [
        {
            enemyNum: 1,
            name: 'Vicious Nemean Lion',
            atkPower: 4,
            attacks: ['bite', 'leap and slash', 'slash'],
            currentAttack: '',
            health: 10
        },
        {
            enemyNum: 2,
            name: 'Nine-Headed Lernaean Hydra',
            atkPower: 4,
            attacks: ['water bomb', 'vicious tentacle slap', 'tentacle hydro-storm'],
            currentAttack: '',
            health: 12
        },
        {
            enemyNum: 3,
            name: 'Cerberus',
            atkPower: 5,
            attacks: ['scratch', 'bite', 'tear'],
            currentAttack: '',
            health: 15

        }
    ],

    //Updates health of enemy character passed in
    updateEnemyHealth(dealtTo, damageDone) {
    this.enemies[dealtTo].health -= damageDone;
    console.log(`Enemies attack did: ${this.enemies[dealtTo].atkPower} damage`);
    },
    selectAttack(currentEnemy) {
        let randomAttack = Math.floor(Math.random() * this.enemies[currentEnemy].attacks.length);
        this.enemies[currentEnemy].currentAttack =  this.enemies[currentEnemy].attacks[randomAttack];
        hercules.updateHerculesHealth(this.enemies[currentEnemy].atkPower);
    }
};

//Creates the story messages in an object
let storyObjects = {
        messages: 
        ['"Your first mission will be an essential to our success, it is to slay the ruthless Nemean Lion." - King Eurystheus', 
        'Fantastic job! Now that you have completed the mission, you can head back to the King to find out what is in store next!',
        '"Glad to hear you have done well, next I ask you to defeat the nine-headed Lernaean Hydra, I suspect that you are the only one for the job. Do not let us down."',
        'I knew I could trust you to take that BEAST down! Go see the medics to help you out with your injuries.',
        'Now that you are better, I need you to do one last final mission. I have taken a liking to the guard dog of the underworld, Cerberus, I need you to capture him.'
        ]
    ,
    
    //Prints the messages at x, where x is the point of the story you are at which is saved by a variable in the 
    printStoryAlert(x) {
        alert(this.messages[x]);
        return x += 1;
    }
};

runGame();