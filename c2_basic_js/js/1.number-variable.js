// Create three variables to store the information needed.
var price; 			
var quantity;		
var total; 	

// Assign values to the price and quantity variables.
price = 5;						// price hold the am individual tile 
quantity = 7;					// quantity holds the number of tiles a customer wants

// Calculate the total by multiplying the price by quantity.
total = price * quantity;		// total holds the total cost of the tiles

// Indicates to find an element based upon the value of id attribute method > which is in the parameter 'id=cost'
var el = document.getElementById('cost'); 

// textContent: allows to update the content of the element; replace the entire conent of it include any markup
el.textContent = '$' + total; 

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML, but note the security issues on p228-231
el.innerHTML = '$' + total;
*/

