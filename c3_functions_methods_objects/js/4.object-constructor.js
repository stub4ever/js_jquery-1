// Set up the object
var hotel = new Object();

hotel.name = 'Quoc place';
hotel.rooms = 100;
hotel.booked = 30;
hotel.checkAvailability = function() {
  return this.rooms - this.booked;  
};

var elName = document.getElementById('hotelName'); // Get element
elName.innerHTML = hotel.name;                   // Update HTML with property of the object

var elRooms = document.getElementById('rooms');    // Get element
elRooms.innerHTML = hotel.checkAvailability();   // Update HTML with result of method

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on lines 12 and 15, but note the security issues on p228-231
*/