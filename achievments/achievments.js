const swiper = new Swiper(".swiper", {
	// Optional parameters
	loop: true,

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

function goToNextPage() {
	// Navigate to the next page
	window.location.assign("/contactMe/contactMe.html");
}
