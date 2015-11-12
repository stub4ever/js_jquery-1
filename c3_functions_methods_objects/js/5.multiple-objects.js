// Create the template for objects that are hotels
function Hotel(name, rooms, booked) {
	this.name = name;  // Properties
	this.rooms = rooms;
	this.booked = booked;
	this.checkAvailability = function() { //method
		return this.rooms - this.booked;
	};
}

// Create two hotel objects
var stubHotel = new Hotel('Stub', 30, 25); // var instanceObject = newKeyword Object ('value properties')
var okiHotel = new Hotel('Oki', 35, 20);

// Update the HTML for the page
var details1 = stubHotel.name + ' rooms: ';
details1 += stubHotel.checkAvailability(); // += operator used to add content to an existig variable
var elHotel = document.getElementById('hotel1');
elHotel.textContent = details1;

var details2 = okiHotel.name + ' rooms: ';
details2 += okiHotel.checkAvailability();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on lines 21 and 26, but note the security issues on p228-231
*/