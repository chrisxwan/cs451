$(document).ready(function() {
	$("body").hide();
	$("body").fadeIn(200);


	$('#recurse-tuileries').click(function(event) {
		console.log("here");
		$("#book").addClass("pt-page-moveToLeftFade");
		$(".tuileries").addClass("pt-page-moveFromRightFade");
		$(".tuileries").css("visibility", "visible");
		console.log("here");
	});


	$('#recurse-versailles').click(function(event) {
		$(".tuileries").attr("class", "tuileries");
		console.log("here");
		$(".tuileries").addClass("pt-page-moveToLeftFade");
		$(".versailles").addClass("pt-page-moveFromRightFade");
		$(".versailles").css("visibility", "visible");
		console.log("here");
	});

	$(".back").click(function(event) {
		event.preventDefault();
		var newLocation = this.href;
		$(this).parent().parent().fadeOut(300);
		window.setTimeout(function() {
				window.location = newLocation;
		}, 300);

	})


});
