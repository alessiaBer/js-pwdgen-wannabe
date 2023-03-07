/*****
Decrizione passaggi:
-Chiedi all'utente il suo nome,
-poi chiedi il suo cognome,
-poi chiedi il suo colore preferito
-Infine scrivi sulla pagina il risultato usando questo formato: nomecognomecolorepreferito23 
******/

// ask user name and assign it to a variable
const userName = prompt('What\'s your name?');
// log it to the console
console.log(userName);


//ask user last name and assign it to a variable
const userLastName = prompt('What\'s your last name?');
// log it to the console
console.log(userLastName);


//ask user his/her favorite color and assign it to a variable
const favoriteColor = prompt('What\'s your favorite color?');
// log it to the console
console.log(favoriteColor);


/* write down on the page the result password */
// assign the HTML element to a variable
let resultPassword = document.getElementById('result-password');
// assign value to the HTML element
resultPassword.innerHTML = `${userName}${userLastName}${favoriteColor}23`;
