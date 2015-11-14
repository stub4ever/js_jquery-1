// Created Object hotel
var hotel = {
	name : 'Luxy', // Adding properties
	rooms : 30,
	booked : 17, 
};

hotel.gym = false; // Adding 2 extra propties with booleans
hotel.pool = true;
delete hotel.booked;

// Update the HTML
var elName = document.getElementById('hotelName'); // Get element
elName.textContent =  hotel.name; 				  // Update HTML with property of the object

var elPool = document.getElementById('pool');
elPool.className = 'Pool: ' + hotel.pool; // Update the value of class attr with property of the object

var elGym = document.getElementById('gym');
elGym.className =  'Gym: ' + hotel.gym; // Update the value of class attr with property of the object