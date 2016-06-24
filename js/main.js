$(document).ready(function(){
	/* ########################Unit Conversion Package###################################### */
	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	console.log(w);
	console.log(h);
	console.log(window.innerWidth);
	console.log(window.innerHeight);
	/* ########################Reused Variables below######################################### */
	var body = $("body");
	/* ########################Specific Objects below####################################### */
	/* ----------------Loading Screen----------------------*/
	//Removes class that displays loading screen after 3 seconds
	setTimeout(function(){
		body.removeClass('loading-screen-open');
		body.addClass('loading-screen-closing');
	}, 5000);

	setTimeout(function(){
		body.removeClass('loading-screen-closing');
	}, 5300);

	/* ----------------Side Nav----------------------*/
	var openNavButton = $('#open-nav-button');
	var body = $("body");
	//Click Hamburger to open Side nav
	openNavButton.click(function() {
		openNavButton.toggleClass('active');
		body.toggleClass('nav-open');
		//return false;
	});
	//Function to reset side nav (used by event listeners)
	function resetSideNav() {
		openNavButton.removeClass('active');
		body.removeClass('nav-open');
	};

	/* ----------------Form Fields----------------------*/
	var contactNameInput = $('#contact-name-input');
	var contactNameContainer = $('#contact-name');
	var contactEmailInput = $('#contact-email-input');
	var contactEmailContainer = $('#contact-email');

	//Apply Focus Effect upon Focus on "Name" Input
	contactNameInput.focusin(function() {
		contactNameContainer.addClass('active');
	});

	//Remove Focus Effect upon leaving "Name" Input
	contactNameInput.focusout(function() {
		contactNameContainer.removeClass('active');
	});

	//Apply Focus Effect upon Focus on "Email" Input
	contactEmailInput.focusin(function() {
		contactEmailContainer.addClass('active');
	});

	//Remove Focus Effect upon leaving "Email" Input
	contactEmailInput.focusout(function() {
		contactEmailContainer.removeClass('active');
	});

	/* ----------------Pop Over----------------------*/
	var popOver = $(".pop-over");
	var popOverBackground = $(".pop-over-background");
	var myCEProjectLink = $("#my-ce-project-link");
	var closePopOverButton = $('#close-pop-over-button');

	//Close PopOver
	closePopOverButton.click(function() {
		body.removeClass("pop-over-open-contents");
		setTimeout(function(){
			body.removeClass("pop-over-open")
		}, 1000);
	});

	//Open My CE Project
	myCEProjectLink.click(function(){
		body.addClass("pop-over-open");
		setTimeout(function(){
			body.addClass("pop-over-open-contents")
		}, 1000);
	});


	/* ########################Reused Event Listeners below################################# */
	/* ----------------Window width detection-----------*/
	//Window width detection
	function checkWidth() {
		//Run Functions dependent on window width
		var windowsize = $(window).width();
		if (windowsize > 200) {
			resetSideNav();
		};
	};
	//Execute on load
	checkWidth();
	//Bind event listener
	$(window).resize(checkWidth);

	/* ----------------Window scroll detection-----------*/
	$(window).on("scroll", function() {
		resetSideNav();
	});

});