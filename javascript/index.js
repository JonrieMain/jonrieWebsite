/* Scroll effect for header*/
var header = document.querySelector('.header');
window.addEventListener('scroll', () =>{
	header.classList.toggle('sticky', window.scrollY > 0);
});
/*Darkmode Lightmode*/
var loading = document.querySelector('.loading');
var body = document.querySelector('.light');
var sun = document.querySelector('#sun');
var moon = document.querySelector('#moon');
var menu = document.getElementById("menu").children;
var jonrieLogo = document.querySelector('#jonrieLogo');
var themeColorCount = 0;

/* Loading */
window.addEventListener('load',()=>{
	loading.style.display="none";
});



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
}

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

}


check = () =>{
	if(localStorage.getItem("themeColor") === null){
		lightFunc();
	}else if(localStorage.getItem("themeColor") === "0"){
		lightFunc();
	}else if(localStorage.getItem("themeColor") === "1"){
		darkFunc();

	}
}
check();
moon.addEventListener('click',()=>{
	if(body.classList.contains('light')){
		darkFunc();
		themeColorCount++;
		localStorage.setItem("themeColor", themeColorCount);
	}
});

sun.addEventListener('click',()=>{
	if(body.classList.contains('dark')){
		if (themeColorCount === 0) {
			themeColorCount = themeColorCount = 0;
			lightFunc();
			localStorage.setItem("themeColor", themeColorCount);
		}else{
			lightFunc();
			themeColorCount--;
			localStorage.setItem("themeColor", themeColorCount);
		}
	}
});


