//your JS code here. If required.
let countElement = document.getElementById("counter");
let buttonClicked = document.getElementById("incrementBtn");
let count=0;

buttonClicked.addEventListener('click', ()=>{
	alert("Current counter value: "+count);
  
	count++;

	countElement.textContent = count;
})