$(window).on('scroll', function() {
	if( $(window).scrollTop() > 300 ) {
		$('.icon-scroll-up').css({
			'opacity' : '1',
			'z-index' : '9999'
		});
	} else {
		$('.icon-scroll-up').css({
			'opacity' : '0',
			'z-index' : '-9999'
		});
	}
});
