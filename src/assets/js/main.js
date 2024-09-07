const body = document.body;
const burger = document.querySelector('.burger');
const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.mobile-menu');

burger.addEventListener('click', () => {
	body.classList.toggle('lock');
	burger.classList.toggle('active');
	overlay.classList.toggle('active');
	mobileMenu.classList.toggle('active');
});

overlay.addEventListener('click', () => {
	body.classList.remove('lock');
	burger.classList.remove('active');
	overlay.classList.remove('active');
	mobileMenu.classList.remove('active');
});
