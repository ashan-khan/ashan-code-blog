const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY >0);
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
sr.reveal('.home-text', {deley:190, origin:'top'})
sr.reveal('.about-img', {deley:190, origin:'left'})
sr.reveal('.about-text', {deley:190, origin:'right'})
sr.reveal('.main-text', {deley:190, origin:'bottom'})
// Services list 
sr.reveal('#bx1', {deley:190, origin:'left'})
sr.reveal('#bx2', {deley:190, origin:'right'})
//sr.reveal('#bx3', {deley:190, origin:'left'})
// protfolio list
sr.reveal('#r1', {deley:190, origin:'left'})
sr.reveal('#r2', {deley:190, origin:'right'})
sr.reveal('#r3', {deley:190, origin:'left'})
sr.reveal('#r4', {deley:190, origin:'right'})
sr.reveal('#r5', {deley:190, origin:'left'})
sr.reveal('#r6', {deley:190, origin:'right'})
// Contact 
sr.reveal('.contact-text', {deley:190, origin:'left'})
sr.reveal('.contact-form', {deley:190, origin:'right'})
// Bottom
sr.reveal('.last-text', {deley:190, origin:'bottom'})
//sr.reveal('.home-text',{delay:190, origin:'bottom'})
//sr.reveal('.about,.services,.portfolio,.contact',{delay:200, origin:'bottom'})

// Fixed Contact button script
let socialLinks= document.querySelector(".FSocial");
		let shareLinks= document.querySelector(".FLinks");
		let changeIcon= document.querySelector(".bx-conversation")
		console.log(changeIcon)
		socialLinks.addEventListener("click", ()=>{
			shareLinks.classList.toggle("Active")
			changeIcon.classList.toggle('bx-conversation')
			changeIcon.classList.toggle('bxs-conversation')
		})






