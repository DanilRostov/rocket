$(window).on('scroll', function() {
	const scrl = $(this).scrollTop();

	$('.about-audit__planet1').css({
		"transform" : `translate(0%, ${scrl / 7}%)`
	});

	$('.about-audit__planet2').css({
		"transform" : `translate(0%, ${scrl / 3}%)`
	});

	$('.about-audit__planet3').css({
		"transform" : `translate(0%, ${scrl / 25}%)`
	});
});