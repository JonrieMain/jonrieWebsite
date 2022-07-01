/* Scroll effect for header*/
var header = document.querySelector('.header');
window.addEventListener('scroll', () =>{
	header.classList.toggle('sticky', window.scrollY > 0);
});


/* Call element */
var loading = document.querySelector('.loading');
var body = document.querySelector('.light');
var sun = document.querySelector('#sun');
var moon = document.querySelector('#moon');
var menu = document.getElementById("menu").children;
var jonrieLogo = document.querySelector('#jonrieLogo');
var left = document.querySelector('.left');
var mainContainer = document.querySelector('.main-container');
var color = document.querySelector('#color');
var colorContainer = document.querySelector('#colorContainer');

/* Prevent right Click*/
document.body.addEventListener('contextmenu', e=> e.preventDefault());


/* Loading */
window.addEventListener('load',()=>{
	loadingFunc = ()=>{
		loading.style.left="-100%";
		mainContainer.style.display="block";
		clearInterval(count);
	}
	var count = setInterval(loadingFunc,1000);


});



/* Color picker*/
color.addEventListener('click', ()=>{
	checkColor = ()=>{
		body.style.background=color.value;
		header.style.background=color.value;
		localStorage.setItem("themeColor", color.value)
	}
	const countColor = setInterval(checkColor,.1)

	document.addEventListener('click', (event)=>{
		if(event.target.closest("#colorContainer")){
			return true
		}else{
			clearInterval(countColor)
		}


	})


})



/* --------------------- Function for dark ---------------------------- */
darkFunc = () =>{
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
	localStorage.setItem("themeColor", "dark");
}


/* --------------------- Function for light ---------------------------- */
lightFunc = () =>{
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
	localStorage.setItem("themeColor", "light");
}

/* --------------------- check localStorage ---------------------------- */
check = () =>{
	if(localStorage.getItem("themeColor") === null) {
		return true
	}else if(localStorage.getItem("themeColor") === "light"){
		lightFunc();
	}else if(localStorage.getItem("themeColor") === "dark"){
		darkFunc();
	}else{
		body.style.background=localStorage.getItem("themeColor");
		header.style.background=localStorage.getItem("themeColor");
	}
}
check();
/* --------------------- Dark and light mode ---------------------------- */
/* --------------------- Moon click event ---------------------------- */
moon.addEventListener('click',()=>{
	darkFunc();
});

/* --------------------- Sun click event ---------------------------- */
sun.addEventListener('click',()=>{
	lightFunc();
});


