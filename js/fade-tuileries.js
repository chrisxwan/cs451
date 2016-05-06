$(document).ready(function() {
	$("body").hide();
	$("body").fadeIn(200);


	$('#recurse-versailles').click(function(event) {
		console.log("here");
		$("#recursive-tuileries").addClass("pt-page-moveToLeftFade");
		$(".versailles").addClass("pt-page-moveFromRightFade");
		$(".versailles").css("visibility", "visible");
		console.log("here");
	});


	$(".back").click(function(event) {
		event.preventDefault();
		var newLocation = this.href;
		$(this).parent().parent().fadeOut(300);
		console.log("here");
		window.setTimeout(function() {
				window.location = newLocation;
		}, 300);


	})



});

