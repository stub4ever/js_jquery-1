// Store the greeting in a variable
var greeting = 'bonjour ';
// Store the users name in a variable
var name = 'Quoc';

/* Create the welcome message by concatenating the strings in the two variables */
var WelcomeMessage = greeting + name + '!';

// Replace the content of this element with the personal message
var elMessage = document.getElementById('greeting');
elMessage.textContent = WelcomeMessage;