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