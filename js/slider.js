$(document).ready(function() {
	// body...
	if ($('.slider__body').length>0){
	$('.slider__body').slick({
		dots: false,
		arrows: false,
		slidesToShow:1,
		autoplay:true,
		autoplaySpeed: 1500,
		responsive: [{
			breakpoint: 1200,
			settings:{

			}
		}]
	});
}
})