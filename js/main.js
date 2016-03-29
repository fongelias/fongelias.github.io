$(document).ready(function(){
	/* ########################Reused Objects below######################################### */
	/* ########################Specific Objects below####################################### */
	/* ----------------Side Nav----------------------*/
	var hamburger = $('#nav-burger');
	var body = $("body");

	//Hamburger to expanded nav
	hamburger.click(function() {
		hamburger.toggleClass('active');
		body.toggleClass('active-side-nav');
		//return false;
	});

	/* ########################Reused Event Listeners below################################# */
	/* ----------------Window width detection-----------*/
	//Window width detection
	function checkWidth() {
		var windowsize = $(window).width();
		if (windowsize > 837) {
		};
	};
	//Execute on load
	checkWidth();
	//Bind event listener
	$(window).resize(checkWidth);

	/* ----------------Window scroll detection-----------*/
	$(window).on("scroll", function() {
	});
});