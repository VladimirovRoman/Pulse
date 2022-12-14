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

	function toggleSlide(itemClass) {
		$(itemClass).each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault();
				$('.catalog-item__content')
					.eq(i)
					.toggleClass('catalog-item__content_active');
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			});
		});
	}

	toggleSlide('.catalog-item__back');
	toggleSlide('.catalog-item__link');
});
