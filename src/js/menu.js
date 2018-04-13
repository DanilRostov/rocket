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


