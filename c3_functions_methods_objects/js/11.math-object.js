// Create a variable to hold a random number between 1 and 10
var randomNum = Math.floor((Math.random() * 10) + 1); //math.floor method = rounds number down to the nearest integer

// Create a variable to hold a random number between 1 and 10
var elRand = document.getElementById('info');
// Write the number into that element
elRand.innerHTML = '<h2>random number </h2><p>' + randomNum + '</p>';

