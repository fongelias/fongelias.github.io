$(document).ready(function(){
	/* ########################Unit Conversion Package###################################### */
	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	console.log(w);
	console.log(h);
	console.log(window.innerWidth);
	console.log(window.innerHeight);
	/* ########################Reused Objects below######################################### */
	/* ########################Specific Objects below####################################### */
	/* ----------------Side Nav----------------------*/
	

	/* ----------------Project Card----------------------*/
	
	/* ########################Reused Event Listeners below################################# */
	/* ----------------Window width detection-----------*/
	//Window width detection
	function checkWidth() {
		var windowsize = $(window).width();
		if (windowsize > 200) {
			
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