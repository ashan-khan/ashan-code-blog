const header = document.querySelector("header");
const dashboardMenu = document.querySelector(".sidebar")

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY >0);
});
window.addEventListener ("scroll", function() {
	dashboardMenu.classList.toggle ("scroll", window.scrollY >0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '25px',
	duration: 1000,
	reset: true
})
