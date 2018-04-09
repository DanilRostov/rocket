var swiper = new Swiper('.reviews__slider', {
      pagination: {
        el: '.reviews__slider-pagination',
        clickable: true
      },
      grabCursor: true,
      loop: true,
      slidesPerView: 4,
  		spaceBetween: 20,
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