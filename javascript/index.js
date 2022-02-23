/* Scroll effect for header*/
var header = document.querySelector('.header');
window.addEventListener('scroll', () =>{
header.classList.toggle('sticky', window.scrollY > 0);
});
/*Darkmode Lightmode*/
var body = document.querySelector('.light');
var sun = document.querySelector('#sun');
var moon = document.querySelector('#moon');
const menu = document.getElementById("menu").children;
var jonrieLogo = document.querySelector('#jonrieLogo');

moon.addEventListener('click',()=>{
	if(body.classList.contains('light')){
		body.style.background="black";
		body.classList.remove('light')
		body.classList.add('dark')
		body.style.color="white";
		moon.style.display="none";
		sun.style.display="block";
		header.style.background="black";
		for (var i = 0; i < menu.length; i++) {
  			menu[i].style.color = "white";
		}
		jonrieLogo.style.color="white";
	}
	
});

sun.addEventListener('click',()=>{
	if(body.classList.contains('dark')){
		body.style.background="white";
		body.classList.remove('dark')
		body.classList.add('light')
		body.style.color="black";
		moon.style.display="block"
		sun.style.display="none"
		header.style.background="white";
		for (var i = 0; i < menu.length; i++) {
  			menu[i].style.color = "black";
		}
		jonrieLogo.style.color="black";
	}
	
});

	
