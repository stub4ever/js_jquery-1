// Create variables to hold the title and note text.
var title;
var message;

// Assign values to these variables.
title = "Stub's Special offers";
// \=backwards slash tells the interpreter that the followig character is part of the string
message = '<a href=\"sale.html\">25% off!</a>';

// Get the element with an id of title.
var elTitle = document.getElementById('title');
// Replace the content of this element.
elTitle.textContent = title;

var elNote = document.getElementById('note');
elNote.innerHTML = message;

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on line 12, but note the security issues on p228-231
elTitle.innerHTML = title;

innerHTML is used on line 17 because it is adding markup (not just text)
*/
