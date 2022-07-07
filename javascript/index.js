/* Scroll effect for header*/
var header = document.querySelector('.header');
/*window.addEventListener('scroll', () =>{
	header.classList.toggle('sticky', window.scrollY > 0);
});*/


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
var pageh3 = document.querySelectorAll('.pageh3');

/* Prevent right Click*/
document.body.addEventListener('contextmenu', e=> e.preventDefault());




/* h3 active & !active*/
pageh3.forEach(pages =>{
	pages.addEventListener('click',()=>{
		/* remove active class*/
		pageh3.forEach(re =>{
			re.classList.remove('active');
		})
		/* add active class*/
		pages.classList.add('active');
		
		/* save and find */
				if (pages.id === "active0"){
					localStorage.setItem("prevPageNum", "active0")
				}else if(pages.id === "active1"){
					localStorage.setItem("prevPageNum", "active1")
				}else if(pages.id === "active2"){
					localStorage.setItem("prevPageNum", "active2")
				}else if(pages.id === "active3"){
					localStorage.setItem("prevPageNum", "active3")
				}else if(pages.id === "active4"){
					localStorage.setItem("prevPageNum", "active4")
				}
			
		
	})
})



/* Loading */
window.addEventListener('load',()=>{

	/* do if window is loaded */
	loadingFunc = ()=>{
		loading.style.left="-100%";
		mainContainer.style.opacity="1";
		clearInterval(count);
	}
	/* timer for loadingFunc */
	var count = setInterval(loadingFunc,1000);




	/* check prev active page */
	checkPage = ()=>{
		if(localStorage.getItem("prevPageNum") === "active0"){
			document.querySelector('#active0').click();
		}else if(localStorage.getItem("prevPageNum") === "active1"){
			document.querySelector('#active1').click();
		}else if(localStorage.getItem("prevPageNum") === "active2"){
			document.querySelector('#active2').click();
		}else if(localStorage.getItem("prevPageNum") === "active3"){
			document.querySelector('#active3').click();
		}else if(localStorage.getItem("prevPageNum") === "active4"){
			document.querySelector('#active4').click();
		}else if(localStorage.getItem("prevPageNum") === ""){
			/* if no prevPageNum is stored */
			localStorage.setItem("prevPageNum", "active0")
		}
	}
	/* run */
	checkPage();



});






/* Color picker*/
color.addEventListener('click', ()=>{
	/* do if color is onClick */
	checkColor = ()=>{
		body.style.background=color.value;
		header.style.background=color.value;
		localStorage.setItem("themeColor", color.value)
	}
	/* timer */
	const countColor = setInterval(checkColor,.1)


	/* clear interval if click is outside color container */
	document.addEventListener('click', (event)=>{
		if(event.target.closest("#colorContainer")){
			/* return none if inside click */
			return true
		}else{
			/* clearn interval if outside click*/
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
/* run */
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


