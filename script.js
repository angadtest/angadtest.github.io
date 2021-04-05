var header = document.getElementById("header");
var banner = document.querySelector("#banner");
var projects = document.querySelector("#projects");
/*
document.addEventListener("mousemove",function(e){
	
	var s = 0;
	for (var i =  cursor.children.length - 1; i >= 0 ; i--) {
		s = s + 0.1;
		cursor.children[i].style.transform = "scale("+s+")";
		cursor.children[i].style.top = e.pageY + "px";
		cursor.children[i].style.left = e.pageX + "px";
		//cursor.children[i].style.transform = "translate("+e.pageX+"px,"+e.pageY+"px) scale("+s+")";
		//cursor.children[i].style.transition = (i/150)+"s";
	}
},false);
(function($) {
  
  $('a').hover(function() {
   
$('.cursor > span').width(50);
$('.cursor > span').height(50);
$('.cursor > span').css('background-color', 'yellow');

  }, function() {
    // on mouseout, reset the background colour
$('.cursor > span').width('');
$('.cursor > span').height('');
$('.cursor > span').css('background-color', '');
  });

})(jQuery);*/


      


document.addEventListener("scroll",function(){
	


	if(window.pageYOffset>= window.innerHeight){
		
		banner.style.height = "0px";
	}else{
		//projects.style.padding = "100vh";
		banner.style.height = window.innerHeight - window.pageYOffset + "px";
	}
	
	/*
	for (var i = bannerElements.length - 1; i >= 0; i--) {
		bannerElements[i].style.transform = "translateY("+ ((window.pageYOffset)/4) +"px)";
	}*/
	
	if (window.pageYOffset > 120) {
		header.style.opacity = "0";
		header.style.transition = "opacity .5s";
	}
	if (window.pageYOffset < 120) {
		header.style.opacity = "1";
		header.style.transition = "opacity .5s";
	}
	if(window.pageYOffset >= (window.innerHeight - header.clientHeight)){
		header.classList.add("no-display");
	}else{
		header.classList.remove("no-display");
	}

},false);

var projectTitles = document.querySelectorAll(".project-title");
var thumbnails = document.querySelectorAll(".thumbnail");

for (var i = projectTitles.length - 1; i >= 0; i--) {
	projectTitles[i].addEventListener("mouseenter",function(){
			console.log(this.innerHTML);
			var thumbnail = document.querySelector("."+this.innerHTML);

			thumbnail.style.top = window.pageYOffset + ((window.innerHeight)/2) - (thumbnail.clientHeight/2) + "px" ;
			thumbnail.style.transform = "scale(1)";
			thumbnail.style.transition = "transform .5s";

		
	},false);
	
	projectTitles[i].addEventListener("mouseleave",function(){
		for (var j = thumbnails.length - 1; j >= 0; j--) {
			thumbnails[j].style.transform = "scale(0)";
			thumbnails[j].style.transition = "transform .5s";
		}

		},false);
}

var toggleButton = document.querySelector(".toggle-button");
var navLinks = document.querySelector("#nav-links");
var navLinksMobile = document.querySelector(".nav-links-mobile");
var navLinksMobileList = document.querySelector(".nav-links-mobile ul");
var navLinksMobileLinks = document.querySelectorAll(".nav-links-mobile ul li");
if (window.innerWidth < 990) {
		navLinks.classList.add("no-display");
	}else{
		navLinks.classList.remove("no-display");
	}
window.addEventListener("resize",function(){
	if (window.innerWidth < 990) {
		navLinks.classList.add("no-display");
	}else{
		navLinks.classList.remove("no-display");
	}
},false);

toggleButton.addEventListener("mouseover",function(){
	this.children[0].classList.add("translate-top-toggle-button-bar");
	this.children[2].classList.add("translate-bottom-toggle-button-bar");

	
},false);
toggleButton.addEventListener("mouseleave",function(){
	this.children[0].classList.remove("translate-top-toggle-button-bar");
	this.children[2].classList.remove("translate-bottom-toggle-button-bar");

	
},false);
toggleButton.addEventListener("click",function(){
	this.children[1].classList.toggle("no-display");

	this.children[0].classList.toggle("translate-top-toggle-button-bar");
	this.children[2].classList.toggle("translate-bottom-toggle-button-bar");

	this.children[0].classList.toggle("rotate-top-toggle-button-bar");
	this.children[2].classList.toggle("rotate-bottom-toggle-button-bar");
	
	navLinksMobile.classList.toggle("no-display");
	navLinksMobile.classList.toggle("display-nav-links-mobile");
	navLinksMobile.style.width = document.body.clientWidth + "px";
	navLinksMobile.style.height = document.body.clientHeight + "px";
	navLinksMobileList.style.top = ((window.innerHeight)/2) + "px";
	
},false);

for (var i = navLinksMobileLinks.length - 1; i >= 0; i--) {
	navLinksMobileLinks[i].addEventListener("click",function(){
		toggleButton.children[1].classList.toggle("no-display");
		toggleButton.children[0].classList.toggle("rotate-top-toggle-button-bar");
		toggleButton.children[2].classList.toggle("rotate-bottom-toggle-button-bar");
		navLinksMobile.classList.toggle("no-display");
		navLinksMobile.classList.toggle("display-nav-links-mobile");
	},false);
}



/************************ scrolling ****************************/
/*var projects = document.querySelector(".projects-link");
projects.addEventListener("click",scrollToProjects,false);

function scrollToProjects(){
	for (var i = 0; i <=window.innerHeight; i++) {
			window.scrollTo(0,i);
	}
}

var contact = document.querySelector(".contact");
contact.addEventListener("click",scrollToProjects,false);

function scrollToContact(){
	for (var i = 0; i <=window.innerHeight; i++) {
			window.scrollTo(0,i);
	}
}*/




/*noise*/

const noise = () => {
    let canvas, ctx;

    let wWidth, wHeight;

    let noiseData = [];
    let frame = 0;

    let loopTimeout;


    // Create Noise
    const createNoise = () => {
        const idata = ctx.createImageData(wWidth, wHeight);
        const buffer32 = new Uint32Array(idata.data.buffer);
        const len = buffer32.length;

        for (let i = 0; i < len; i++) {
            if (Math.random() < 0.5) {
                buffer32[i] = 0xff000000;
            }
        }

        noiseData.push(idata);
    };


    // Play Noise
    const paintNoise = () => {
        if (frame === 9) {
            frame = 0;
        } else {
            frame++;
        }

        ctx.putImageData(noiseData[frame], 0, 0);
    };


    // Loop
    const loop = () => {
        paintNoise(frame);

        loopTimeout = window.setTimeout(() => {
            window.requestAnimationFrame(loop);
        }, (1000 / 25));
    };


    // Setup
    const setup = () => {
        wWidth = window.innerWidth;
        wHeight = window.innerHeight;

        canvas.width = wWidth;
        canvas.height = wHeight;

        for (let i = 0; i < 10; i++) {
            createNoise();
        }

        loop();
    };


    // Reset
    let resizeThrottle;
    const reset = () => {
        window.addEventListener('resize', () => {
            window.clearTimeout(resizeThrottle);

            resizeThrottle = window.setTimeout(() => {
                window.clearTimeout(loopTimeout);
                setup();
            }, 200);
        }, false);
    };


    // Init
    const init = (() => {
        canvas = document.getElementById('noise');
        ctx = canvas.getContext('2d');

        setup();
    })();
};

noise();