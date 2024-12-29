//your JS code here. If required.
let countElement = document.getElementById("counter");
let buttonClicked = document.getElementById("incrementBtn");
let count=0;

buttonClicked.addEventListener('click', ()=>{
	alert(count);
  
	count++;

	countElement.innerHTML = count;
})