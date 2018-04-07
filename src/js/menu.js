$('.header__burger').click(function() {
	$('.header__menu').css({
		'display': 'flex',
		'background-color': '#000',
		'padding-bottom' : '50px'
	});
	$('body').addClass('position-fixed');
	$('.menu__link').addClass('menu__link--mobile');
	$('.about-audit__planet1').css('z-index', '-1');
	$('.about-audit__title').css('display', 'none');
});

$('.header__burger').click(function() {
	if( !$('.burger-checkbox').prop('checked') === true ) {
		$('body').removeClass('position-fixed');
		$('.header__menu').css('display', 'none');
		$('.burger-checkbox').prop('checked', false);
		$('.menu__link').removeClass('menu__link--mobile');
		$('.about-audit__planet1').css('z-index', '10');
	}
});


