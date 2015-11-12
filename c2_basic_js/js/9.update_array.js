// Create the array and assign it values
var colors = ['white', 'red', 'custom'];

// Update the third item in the array
colors[2] = 'black';

// Get the element with an id of colors
var elColor = document.GetElementById('colors');
// Replace element with third item from the array
elColor.textContent = colors[2];

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on line 10, but note the security issues on p228-231
el.innerHTML = colors[2];
*/