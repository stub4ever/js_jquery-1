// Set up the object
var hotel = { 
	name: 'Quoc', // Properties
	rooms: 13,
	booked: 1990,
	checkAvailability: function() {  // Method
		return this.rooms - this.booked;
	}
};

var elName = document.getElementById('hotelName'); // Get element
elName.textContent = hotel.name; // Update HTML with property of the object

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.rooms;


// hotel.rooms = 13
					// hotel = object
					// rooms = property
					// 13 = property value