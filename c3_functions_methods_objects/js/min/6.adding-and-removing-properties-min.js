var hotel={name:"Luxy",rooms:30,booked:17};hotel.gym=!1,hotel.pool=!0,delete hotel.booked;var elName=document.getElementById("hotelName");elName.textContent=hotel.name;var elPool=document.getElementById("pool");elPool.className="Pool: "+hotel.pool;var elGym=document.getElementById("gym");elGym.className="Gym: "+hotel.gym;