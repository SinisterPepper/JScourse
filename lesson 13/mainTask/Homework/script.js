
$(document).ready(function() {

	$('div.container:eq(0)').on('click', function(event){
		if (event.target == $('.main_nav li:eq(1) a')[0] || 
			event.target == $('div.main_btna:eq(0)')[0] ||
			event.target == $('div.main_btn:eq(0)')[0]
			) {
				$('.overlay').animate({
					opacity: 'toggle'
				}, 1000);
				$('.modal:eq(0)').slideDown('slow');
			}
	});


	$('button.close:eq(0)').on('click', function(){

			$('.modal:eq(0)').slideUp('slow');

			$('.overlay').animate({
				opacity: 'toggle'
			}, 1000);
		});
});