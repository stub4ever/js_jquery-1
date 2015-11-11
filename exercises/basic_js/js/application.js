var greeting = 'Bonjour! ';
var user = ' Quoc!';
var message = ' Nice have you here, ';

var welcome = greeting + message + user;

var sign = "The Secrete - Book";
var tiles = 30;

var subtotal = tiles * 5;
var ship = 8.5;

var grandTotal = subtotal + ship;

var elWelcome = document.getElementById('greeting');
elWelcome.textContent = welcome;

var elSign = document.getElementById('userSign');
elSign.textContent = sign;

var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

var elSub = document.getElementById('subTotal');
elSub.textContent = subtotal;

var elShip = document.getElementById('shipping');
elShip.textContent = ship;

var elTotal = document.getElementById('grandTotal');
elTotal.textContent = grandTotal;


