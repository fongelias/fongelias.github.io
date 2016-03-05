$(document).ready(function(){
	/* ########################Reused Objects below######################################### */
	/* ----------------Add Button----------------------*/

	/* ########################Reused Event Listeners below################################# */
	/* ----------------Window width detection-----------*/
	//Window width detection
	function checkWidth() {
		var windowsize = $(window).width();
		if (windowsize > 837) {
			hideExpandedNav();
			hideDropDownNav();
		};
	};
	//Execute on load
	checkWidth();
	//Bind event listener
	$(window).resize(checkWidth);

	/* ----------------Window scroll detection-----------*/
	$(window).on("scroll", function() {
		hideDropDownFilterMenu();
		hideDropDownNav();
	});
});