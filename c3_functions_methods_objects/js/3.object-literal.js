// Set up the object
var hotel = { 
	name: 'Stuboki', // Properties
	rooms: 122,
	booked: 77,
	checkAvailability: function() {  // Method
		return this.rooms - this.booked;
	}
};

var elName = document.getElementById('hotelName'); // Get element
elName.textContent = hotel.name; // Update HTML with property of the object

var elRooms = document.getElementById('rooms');
elRooms.textContent = hotel.rooms;


// hotel.rooms = 122
					// hotel = object
					// rooms = property
					// 122 = property value