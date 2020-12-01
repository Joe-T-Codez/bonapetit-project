/////////////////////////Animation appear on Scroll//////////////////////
const faders=document.querySelectorAll("#fade-in");

const appearOptions={
  threshold:1
};
const appearOnScroll=new IntersectionObserver
(function(entries,appearOnScroll){
  entries.forEach(entry=>{
    if(!entry.isIntersecting){
      return;
    }else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  })
},appearOptions);


faders.forEach(fader =>{
  appearOnScroll.observe(fader);
})

////////////////////////////////////////////////////////////////////////////////
const menuBtn=document.querySelector('.menu-btn');
const navmenu=document.querySelector('.nav-links');

let menuOpen=false;
menuBtn.addEventListener('click',function(){
  if(!menuOpen){
menuBtn.classList.add('open');
navmenu.classList.add('clicked');
    menuOpen=true;
     }
  else
  {
  menuBtn.classList.remove('open');
  navmenu.classList.remove('clicked');
    menuOpen=false;
          }

}
)
//////////////////////////////////// Smooth Sroll To Top ////////////////////////////////////////////
//function call
funcScroll ('.scroll');

//scroll function MAIN
function funcScroll(trigger) {
	const button = document.querySelector(trigger);
	button.addEventListener('click', function(e) {
		e.preventDefault();
		scrollTop();
	});

	function scrollTop() {
		let startPosition = window.pageYOffset;
		let startTime = null;

		function easing(t, b, c, d) {
			t /= d/2;
			if (t < 1) return c/2*t*t + b;
			t--;
			return -c/2 * (t*(t-2) - 1) + b;
		};

		function scroll(currentTime) {
			if(startTime == null) startTime = currentTime;
			let elapsedTime = currentTime - startTime;
			let run = easing(elapsedTime, startPosition, -startPosition,1000);
			window.scrollTo(0,run);
			if(elapsedTime < 1000) requestAnimationFrame(scroll);
		}

		requestAnimationFrame(scroll);
	}
}
