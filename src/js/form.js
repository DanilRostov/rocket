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
	$('.estimate__form').css('height', formHeight/2);
	$('.estimate__form-acception').css('display', 'block');
};