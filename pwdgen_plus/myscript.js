const button = document.getElementById('generate');

button.addEventListener("click", askData)
// ask user name and assign it to a variable
function askData() {
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
const resultPassword = document.getElementById('result-password');
//display h4
const passwordLabel = document.getElementById('passh4');
passwordLabel.innerHTML = 'Your resulting password is'
// assign value to the HTML element
resultPassword.innerHTML = `${userName}${userLastName}${favoriteColor}23`;
};