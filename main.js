//Make an object for Hercules (Main Character)

//Will be used to run the game in logical order
function runGame() {
    let currentStoryLocation = 0;
    currentStoryLocation = displayStory(currentStoryLocation);
    fightTime();
    currentStoryLocation = displayStory(currentStoryLocation);
    currentStoryLocation = displayStory(currentStoryLocation);
    fightTime();
    currentStoryLocation = displayStory(currentStoryLocation);
    hercules.restoreHealth();
    currentStoryLocation = displayStory(currentStoryLocation);
    fightTime();
    while(currentStoryLocation < storyObjects.messages.length) {
        currentStoryLocation = displayStory(currentStoryLocation);
    }

}
function fightTime() {
    alert(`You are about to fight ${enemyObjects.enemies[hercules.currentEnemy].name}`);
    while(enemyObjects.enemies[hercules.currentEnemy].health > 0) {
        hercules.Attack();
        if (enemyObjects.enemies[hercules.currentEnemy].health <= 0) {
            break;
        }
        enemyObjects.completeEnemyAttack();
        if (hercules.health <= 0) {
            alert('Hercules is DEAD!');
            break;
        }
    }
    hercules.currentEnemy++;
}

function displayStory(currentStoryLocation) {
    currentStoryLocation = storyObjects.printStoryAlert(currentStoryLocation);
    return currentStoryLocation;
}

//Create the hercules object
let hercules = {
    alive: true,
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
    Attack() {
        this.selectAttack();
        this.printAttack(this.chosenAttack);
        enemyObjects.updateEnemyHealth(this.currentEnemy, this.chosenAttackDmg);
    },
    selectAttack() {
        this.chosenAttack = prompt('What attack would you like to use? \n1. ' + this.attacks[0].name + '\n2. ' + 
            this.attacks[1].name + '\n3. ' + this.attacks[2].name);
        
        this.chosenAttackDmg = this.attacks[this.chosenAttack - 1].damage;
        this.chosenAttackName = this.attacks[this.chosenAttack - 1].name;
        
    },
    //Prints users chosen attack to the console and displays name of attack and damage to be done
    printAttack() {
        alert('You chose to use ' + this.chosenAttackName);
        console.log(`Hercules attack did: ${this.chosenAttackDmg} damage`);
    },

    updateHerculesHealth(damageDone) {
        this.health -= damageDone;
        console.log(`Hercules health is now: ${this.health}`);
    },
    restoreHealth() {
        this.health = 30;
        alert('You have been healed by the doctor! You are now at full health!');
        console.log(`Hercules health is now: ${this.health}`);
    }
};

//Create enemy object with each enemy and properties stored here
let enemyObjects = {
    enemies:
    [
        {
            enemyNum: 1,
            name: 'Nemean Lion',
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

    completeEnemyAttack() {
        this.selectAttack();
        console.log(`${this.enemies[hercules.currentEnemy].name}'s attack did: ${this.enemies[hercules.currentEnemy].atkPower} damage.`)
        hercules.updateHerculesHealth(this.enemies[hercules.currentEnemy].atkPower);
    },

    //Updates health of enemy character passed in
    updateEnemyHealth(dealtTo, damageDone) {
    this.enemies[dealtTo].health -= damageDone;
    if (this.enemies[dealtTo].health <= 0) {
        console.log(`${this.enemies[dealtTo].name} is defeated.`);
        alert(`${this.enemies[hercules.currentEnemy].name} is defeated!`);
    }else {
        console.log(`${this.enemies[dealtTo].name}'s health is now: ${this.enemies[dealtTo].health}`);
    }
    },
    selectAttack() {
        let randomAttack = Math.floor(Math.random() * this.enemies[hercules.currentEnemy].attacks.length);
        this.enemies[hercules.currentEnemy].currentAttack =  this.enemies[hercules.currentEnemy].attacks[randomAttack];
        alert(`${this.enemies[hercules.currentEnemy].name} chose to use ${this.enemies[hercules.currentEnemy].currentAttack}, this does ${this.enemies[hercules.currentEnemy].atkPower} damage to Hercules`);
    }
};

//Creates the story messages in an object
let storyObjects = {
        messages: 
        ['"Your first mission will be an essential to our success, it is to slay the ruthless Nemean Lion." - King Eurystheus', 
        'Fantastic job! Now that you have completed the mission, you can head back to the King to find out what is in store next!',
        '"Glad to hear you have done well, next I ask you to defeat the nine-headed Lernaean Hydra, I suspect that you are the only one for the job. Do not let us down." - King Eurystheus',
        'I knew I could trust you to take that BEAST down! Go see the medics to help you out with your injuries.',
        '"Now that you are better, I need you to do one last final mission. I have taken a liking to the guard dog of the underworld, Cerberus, I need you to capture him." - King Eurystheus',
        'You have returned to the Kings village to a parade hosted by all of the citizens...',
        'After taking a look around, you realize this is all for you',
        'After your mission all you want is a drink and some mushroom soup, but you are approached by the King who says...',
        '"You are the best God for the job that we could have found."',
        '"You were able to defeat all of those large monsters, and have made an overwhelming impact on decreasing the stress of our citizens."',
        '"And for that I am ever in your favor, if you need anything from us, please do not be hesitant to reach out."',
        'After speaking to the King, you return to your bed to find thank you letters and dragon teeth from the community, thanking you for your service.'
        ]
    ,
    
    //Prints the messages at x, where x is the point of the story you are at which is saved by a variable in the 
    printStoryAlert(x) {
        alert(this.messages[x]);
        return x += 1;
    }
};

runGame();