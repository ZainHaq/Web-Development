//Programmer: Zain Haq
//Last modified: Dec 1st 2014

//Executes the preloading screen until page is fully laoded  
$(document).ready(function() {		
	$(window).load(function() {
		$('body').addClass('loaded');
		$('h1').css('color', '#222222');
	}); 
});