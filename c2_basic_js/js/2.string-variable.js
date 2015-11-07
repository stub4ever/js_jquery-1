// Create variables to hold the name and note text.
var username;
var message;

username = 'Quoc'; // Hold strings
message = 'Whoop the button!';


//Attribute two different elements of value

// Indicates to find an element based upon the value of id attribute method > which is in the parameter 'id=cost'
var elName = document.getElementById('name');
// textContent: allows to update the content of the element; replace the entire conent of it include any markup
// Replace the content of this element.
elName.textContent = username;

var elNote = document.getElementById('note');
elNote.textContent = message;


/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML, but note the security issues on p228-231
elName.innerHTML = username;
elNote.innerHTML = message;
*/