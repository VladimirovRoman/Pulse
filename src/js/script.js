$(document).ready(function () {
	$('.carousel__inner').slick({
		speed: 1000,
		adaptiveHeight: false,
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

	(function ($) {
		$(function () {
			$('ul.catalog__tabs').on(
				'click',
				'li:not(.catalog__tab_active)',
				function () {
					$(this)
						.addClass('catalog__tab_active')
						.siblings()
						.removeClass('catalog__tab_active')
						.closest('div.container')
						.find('div.catalog__content')
						.removeClass('catalog__content_active')
						.eq($(this).index())
						.addClass('catalog__content_active');
				}
			);
		});
	})(jQuery);
});
