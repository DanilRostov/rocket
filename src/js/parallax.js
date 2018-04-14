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