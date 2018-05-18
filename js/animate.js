$(document).ready(function() {
			// Animates fade in/out the scroll-back-to-the-top arrow 
			$(window).scroll(function(){
				if ($(document).scrollTop() < 200) {
					// $(".up-arrow").css("opacity","1");
					$(".up-arrow").stop().animate({opacity: '0'},150);
				} else {
					// $(".up-arrow").css("opacity","0");
					$(".up-arrow").stop().animate({opacity: '1'},150);
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