$(document).ready(function () {
	$('.carousel__inner').slick({
		speed: 1000,
		adaptiveHeight: true,
		prevArrow:
			'<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
		nextArrow:
			'<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
		response: [
			{
				breakpoint: 768,
				settings: {
					dots: true,
					arrows: false,
				},
			},
		],
	});
});
