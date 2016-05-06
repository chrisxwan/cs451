$(document).ready(function() {
	$("body").hide();
	$("body").fadeIn(400);
	// $('.holder').toggleClass("visible");


	$('#recurse-tuileries').click(function(event) {
		console.log("here");
		// $("#book").fadeOut();
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

	$(".back #history ").click(function(event) {
		event.preventDefault();
		var newLocation = this.href;
		$(this).parent().parent().fadeOut(500);
		// Delays action
		// console.log(newLocation);
		window.setTimeout(function() {
			// $('html').hide();
			// $('html').load(newLocation);
			// $('html').fadeIn();
		    // Redirects to new destination
				window.location = newLocation;
		}, 500);
		// $(".tuileries").css("visibility", "hidden");
		// $(".versailles").attr("class", "tuileries");
		// console.log("back");
		// var curr = $(this).parent().parent().parent();
		// console.log(curr);
		// curr.fadeOut();
		// $("#book").addClass("pt-page-moveFromLeftFade");
		// // $("#book").css("visibility", "visible");
		


	})

	// $('a').click(function(event) {
	// 	console.log("hello");
	// 	// Over-rides the link
	// 	event.preventDefault();
	// 	// Sets the new destination to the href of the link
	// 	newLocation = this.href;
	// 	color = $(this).data("color");
	// 	$('body').css('background-color', color );
	// 	$('#holder').css('opacity','0' );
	// 	// Delays action
	// 	window.setTimeout(function() {
	// 	    // Redirects to new destination
	// 			window.location = newLocation;
	// 	}, 250);
	// });

// newLocation = this.href;
// 		console.log("recursing");
// 		$(".holder").animate({
// 			opacity: '0',
// 			marginLeft: '-=1000px'
// 		}, {
// 			queue: false,
// 			duration: 600,
// 			complete: function() {
// 				window.setTimeout(function() {
// 			    // Redirects to new destination
// 					window.location = newLocation;
// 				}, 250);
// 				console.log("done");
// 			}
// 		});


});



/*$(document).ready(function() {
	// $('.holder').toggleClass("visible");

	doneCurr = false;
	doneNext = false;
	$('#recurse-tuileries').click(function(event) {
		$curr = $("#book");
		$next = $(".tuileries");
		console.log("here");
		$("#book").addClass("pt-page-moveToLeftFade", function() {
			doneCurr = true;
			if(doneNext) {
				resetAll($curr, $next);
			}
		});
		$(".tuileries").addClass("pt-page-moveFromRightFade", function() {
			doneNext = true;
			if(doneCurr) {
				resetAll($curr, $next);
			}
		});
		console.log("here");
	});


	$('#recurse-versailles').click(function(event) {
		$curr = $(".tuileries");
		$next = $(".versailles");
		console.log("here");
		$(".tuileries").addClass("pt-page-moveToLeftFade", function() {
			doneCurr = true;
			if(doneNext) {
				resetAll($curr, $next);
			}
		});
		$(".versailles").addClass("pt-page-moveFromRightFade", function() {
			doneNext = true
			if(doneCurr) {
				resetAll($curr, $next);
			}
		});
	});

	$(".back").click(function(event) {
		console.log("back");
		$curr = $(this).parent().parent().parent();
		$next = $("#back");
		$curr.addClass("pt-page-moveToRightFade", function() {
			doneCurr = true;
			if(doneNext) {
				resetAll($curr, $next);
			}
		});
		$("#book").addClass("pt-page-moveFromLeftFade", function() {
			doneNext = true;
			if(doneCurr) {
				resetAll($curr, $next);
			}
		});
	})

	// $('a').click(function(event) {
	// 	console.log("hello");
	// 	// Over-rides the link
	// 	event.preventDefault();
	// 	// Sets the new destination to the href of the link
	// 	newLocation = this.href;
	// 	color = $(this).data("color");
	// 	$('body').css('background-color', color );
	// 	$('#holder').css('opacity','0' );
	// 	// Delays action
	// 	window.setTimeout(function() {
	// 	    // Redirects to new destination
	// 			window.location = newLocation;
	// 	}, 250);
	// });

// newLocation = this.href;
// 		console.log("recursing");
// 		$(".holder").animate({
// 			opacity: '0',
// 			marginLeft: '-=1000px'
// 		}, {
// 			queue: false,
// 			duration: 600,
// 			complete: function() {
// 				window.setTimeout(function() {
// 			    // Redirects to new destination
// 					window.location = newLocation;
// 				}, 250);
// 				console.log("done");
// 			}
// 		});


});*/