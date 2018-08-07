$(document).ready(function() {
	$(".up-arrow").css("display", "none");

	// Displays/Hides the scroll-back-to-the-top arrow 
	$(window).scroll(function(){
		if ($(document).scrollTop() < 200) {
			$(".up-arrow").css("display", "none");
		} else {
			$(".up-arrow").css("display", "block");
		}
	});

	$("a").click(function(){
		// Function defining smooth scrolling
		$("html, body").animate({
			scrollTop: $(this.hash).offset().top
				}, 800, function(){
		});
	});
	
	// Change scroll-back-to-the-top arrow's color when clicked
	$(".up-arrow").on({
		mousedown: function(){
			$(this).css("color", "white");
		},
		mouseup: function(){
			$(this).css("color", "#989898");
		}
	});

});