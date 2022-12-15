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

	$('[data-modal=consultation]').on('click', function () {
		$('.overlay, #consultation').fadeIn('slow');
	});

	$('.modal__close').on('click', function () {
		$('.overlay, #consultation, #thanks, #order').fadeOut('slow');
	});

	$('.button_mini').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__text').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		});
	});

	function validateForm(form) {
		$(form).validate({
			rules: {
				name: 'required',
				phone: 'required',
				email: {
					required: true,
					email: true,
				},
			},
			messages: {
				name: 'Пожалуйста, введите имя!',
				phone: 'Пожалуйста, введите номер телефона!',
				email: {
					required: 'Пожалуйста, введите почтовый адрес',
					email: 'Неправильно введен адрес почты',
				},
			},
		});
	}
	validateForm('#consultation-form');
	validateForm('#consultation form');
	validateForm('#order form');

	$('input[name=phone]').mask('+7(999)999-99-99');

	// smooth scroll
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});

	$("a[href^='#']").click(function () {
		const _href = $(this).attr('href');
		$('html, body').animate({ scrollTop: $(_href).offset().top + 'px' });
		return false;
	});
});
