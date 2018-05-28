function() {
	console.log(window.innerWidth + " X " + window.innerHeight);

	let navHeight = $('.navbar').outerHeight();

	console.log(navHeight);

	$(".full-size").css({
		height : window.innerHeight - navHeight
	});
}();


$(document).ready(function() {

    // code here...

});
