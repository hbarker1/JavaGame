

let game = prompt ('Do you want to play a game?')
console.log(game);


let name = prompt;



if (game.toLowerCase() === 'yes') {
    name = prompt ('What is your name?')
    console.log(name);

    let user = name;
    let grant = 'Grant the Mighty Chicken';
    let userHealth = 40;
    let grantHealth = 10;
    
    let grantNumberOfTimesDefeated = 0;    



    do {
        let attack1 = Math.floor((Math.random()*3));
        let attack2 = Math.floor((Math.random()*3));
        
        
        grantHealth = grantHealth - attack1;

        if (grantHealth <= 0) {
            grantHealth = 0;
            grantNumberOfTimesDefeated++;
            if (grantNumberOfTimesDefeated < 3) {
            grantHealth = 10;}
        }


        userHealth = userHealth - attack2;
    
        if (userHealth <= 0) {
            userHealth = 0;

        }

        console.log(`${grant} has ${grantHealth} health left`);

        console.log(`${user} has ${userHealth} health left`);



    }while (userHealth > 0 && grantNumberOfTimesDefeated < 3);
    if (userHealth === 0) {
        console.log('Grant wins');
    }
    else {
        console.log (`${user} wins the game!`);
    }




} else {

}



