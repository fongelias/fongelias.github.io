$(document).ready(function(){
	/* ########################Reused Objects below######################################### */
	/* ########################Specific Objects below####################################### */
	/* ----------------Side Nav----------------------*/
	var hamburger = $('#nav-burger');
	var body = $("body");
	var sideNavButton = $(".side-nav-button")

	//Click Hamburger to open Side nav
	hamburger.click(function() {
		hamburger.toggleClass('active');
		body.toggleClass('active-side-nav');
		//return false;
	});

	//Click Icon to close Side nav
	sideNavButton.click(function() {
		hamburger.toggleClass('active');
		body.toggleClass('active-side-nav');
		//return false;
	});

	/* ----------------Side Nav----------------------*/
	var projectTitle = $('.project-title');
	var body = $("body");

	//Click Hamburger to open Side nav
	projectTitle.click(function() {
		//this.toggleClass('selected-project');
		body.toggleClass('active-project');
		//return false;
	});

	//Click Hamburger to open Side nav
	//sideNavButton.click(function() {
		//hamburger.toggleClass('active');
		//body.toggleClass('active-side-nav');
		//return false;
	//});
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