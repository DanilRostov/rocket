const isCheckboxTrue = () => {
	if ( !$('#checkbox-pi').prop('checked') === true ) {
		$('.estimate__form-submit').addClass('estimate__form-submit--disabled').prop('disabled', true);;
	} else {
		$('.estimate__form-submit').removeClass('estimate__form-submit--disabled').prop('disabled', false);
	}
}

$('#checkbox-pi').on('click', function() {
	isCheckboxTrue();
});

const sendForm = () => {
	event.preventDefault();
	const formHeight = $('.estimate__form').height();
	$('.estimate__form-input').css('display', 'none');
	$('.estimate__form-comment').css('display', 'none');
	$('.estimate__form-checkbox-box').css('display', 'none');
	$('.estimate__form-submit').css('display', 'none');
	$('.estimate__form').css('height', formHeight);
	$('.estimate__form-acception').css('display', 'block');
};
$('.burger-checkbox').on('click', function() {
	$('.header__menu').addClass('header__menu--active');
	$('.header__container').addClass('header__container--menu-active');
	$('.header').addClass('header--menu-active');
	$('body').addClass('position-fixed');
	$('.menu__link').addClass('menu__link--mobile');
	$('.header__burger').addClass('header__burger--active');
});

$('.burger-checkbox').on('click', function() {
	if( !$('.burger-checkbox').prop('checked') === true ) {
		$('.header__burger').removeClass('header__burger--active');
		$('.burger-checkbox').prop('checked', false);
		$('.menu__link').removeClass('menu__link--mobile');
		$('body').removeClass('position-fixed');
		$('.header').removeClass('header--menu-active');
		$('.header__container').removeClass('header__container--menu-active');
		$('.header__menu').removeClass('header__menu--active');
	}
});



$(window).on('scroll', function() {
	const scrl = $(this).scrollTop();

	$('.promo__planet1').css({
		"transform" : `translate(0%, -${scrl / 17.5}%)`
	});

	$('.promo__planet2').css({
		"transform" : `translate(0%, -${scrl / 1}%)`
	});

	$('.promo__planet3').css({
		"transform" : `translate(0%, -${scrl / 1}%)`
	});

	$('.promo__planet4').css({
		"transform" : `translate(0%, -${scrl / 1}%)`
	});

	$('.promo__planet5').css({
		"transform" : `translate(0%, -${scrl / 1}%)`
	});

	$('.reviews__planet').css({
		"transform" : `translate(0%, -${scrl / 40}%)`
	});

	$('.frontend-promo__planet').css({
		"transform" : `translate(0%, -${scrl / 3}%)`
	});

	$('.frontend-promo__planet2').css({
		"transform" : `translate(0%, -${scrl / 2}%)`
	});

	$('.frontend-promo__planet3').css({
		"transform" : `translate(0%, -${scrl / 3}%)`
	});

	$('.audit-promo__planet1').css({
		"transform" : `translate(0%, -${scrl / 3}%)`
	});

	$('.audit-promo__planet2').css({
		"transform" : `translate(0%, -${scrl / 2}%)`
	});

	$('.audit-promo__planet3').css({
		"transform" : `translate(0%, -${scrl / 3}%)`
	});

	$('.promo-blog__planet1').css({
		"transform" : `translate(0%, -${scrl / 10}%)`
	});

	$('.promo-blog__planet2').css({
		"transform" : `translate(0%, -${scrl / 3}%)`
	});

	$('.promo-blog__planet3').css({
		"transform" : `translate(0%, -${scrl / 1}%)`
	});

	$('.promo-blog__planet4').css({
		"transform" : `translate(0%, -${scrl / 4}%)`
	});

	$('.promo-blog__planet5').css({
		"transform" : `translate(0%, -${scrl / 2}%)`
	});

	$('.article-promo__planet1').css({
		"transform" : `translate(0%, -${scrl / 15}%)`
	});

	$('.article-promo__planet2').css({
		"transform" : `translate(0%, -${scrl / 2}%)`
	});

	$('.article-promo__planet3').css({
		"transform" : `translate(0%, -${scrl / 5}%)`
	});

});
const hideScrollUpIcon = () => {
	const icon = $('.scroll-up__icon');
	icon.removeClass('scroll-up__icon--active');
}

const showScrollUpIcon = () => {
	const icon = $('.scroll-up__icon');
	icon.addClass('scroll-up__icon--active');
}

const isIconShows = () => {
	const bodyHeight = $('body').height();
	const currentScroll = $( window ).scrollTop();
	const windowHeight = $( window ).height();
	const footerHeight = $('.footer').height();

	if( currentScroll > 300 ) {
		showScrollUpIcon();
	} else {
		hideScrollUpIcon();
	}

	if( ( bodyHeight - (currentScroll + windowHeight) ) < footerHeight ) {
		hideScrollUpIcon();
	}
}

$(window).on('scroll', isIconShows);
$(".scroll").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;

    $('html, body').animate({ scrollTop: destination }, 300);
    return false;
});
var swiper = new Swiper('.reviews__slider', {
      pagination: {
        el: '.reviews__slider-pagination',
        clickable: true
      },
      grabCursor: true,
      loop: true,
      slidesPerView: 2,
		spaceBetween: 30,
      breakpoints: {
      	640: {
      		slidesPerView: 1,
      		spaceBetween: 30
      	},
      	1024: {
      		slidesPerView: 2,
      		spaceBetween: 20
      	}
      }
    });