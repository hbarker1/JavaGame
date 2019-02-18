

let game = prompt ('Do you want to play a game?')
console.log(game);


let name = prompt;



if (game === 'yes') {
    name = prompt ('What is your name?')
    console.log(name);

    let user = name;
    let grant = 'Grant the Mighty Chicken';
    let userHealth = 40;
    let grantHealth = 10;
    let attack1 = Math.floor((Math.random()*3));
    let attack2 = Math.floor((Math.random()*3));
    
    
    grantHealth = grantHealth - attack1;
    userHealth = userHealth - attack2;

    do {
        // let timer;
        // timer = setInterval(userHealth, 40);
        // timer = setInterval(grantHealth, 10);

        console.log(`${grant} has ${grantHealth} health left`);
    
        console.log(`${user} has ${userHealth} health left`);

break;        
    
    
    }while (grantHealth > 0 && grantHealth > 0);
    
   



}
else {

}



// else if (grantHealth === 0) {
//     game === 'yes' 
//     name = prompt ('What is your name?')
//     console.log(name);


//     console.log(`${grant} has ${grantHealth} health left`);
    
//     console.log(`${user} has ${userHealth} health left`);

//     grantHealth--;
//     userHealth--;



// }


//     do {

//         console.log(`${grant} has ${grantHealth} health left`);
    
//         console.log(`${user} has ${userHealth} health left`);
//         attack1--;
//         attack2--;
//         break;
    
        
        
    
    
//     }while (grantHealth <= 10 && userHealth <= 40);
    
    
        
    
// }







// // let grant = 'Grant the Mighty Chicken';
// // let user = name;
// // let userHealth = 40;
// let grantHealth = 10;
// let attack1 = Math.floor((Math.random()*3));
// let attack2 = Math.floor((Math.random()*3));


// grantHealth = grantHealth - attack1;
// userHealth = userHealth - attack2;


// do {

//     console.log(`${grant} has ${grantHealth} health left`);

//     console.log(`${user} has ${userHealth} health left`);
//     grantHealth--;
//     userHealth--;
//     break;

    
    


// }while (grantHealth <= 10 && userHealth <= 40)


    


//     if (grantHealth === 0) {
//         console.log(`${grant} has been defeated`);
        
       
        
    
//     } 

//     else if (userHealth === 0) {
//         console.log(`${user} has been defeated`);
//         clearInterval(userHealth);
//             let name2 = prompt (`${user} want to try again?`);
//             console.log (name2);
//         }

       

  

