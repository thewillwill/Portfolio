$(function(){
	// fixed navigation on scroll	
	$(window).on("scroll", function(e) {
		var scroll = $(window).scrollTop();
		var navigation = $('.nav__main')
     	
      if (scroll > 147) {
        navigation.addClass("fix");
      } else {
        navigation.removeClass("fix");
      }
      
    });

	 // smooth scroll
    $("a").on('click', function(event) {
       if (this.hash !== "") {
         event.preventDefault();
         var hash = this.hash;
         $('html, body').animate({
           scrollTop: $(hash).offset().top
         }, 800, function(){
           window.location.hash = hash;
         });
       } 
     });
    
    // initiate wow
    new WOW().init();
    //menu slideIn         
    $('#hamburger').on('click', function(){
    	$('.sideNav').addClass("slideIn");	
    });
    $('.close, .sideNav__link').on('click', function() {
    	$('.sideNav').removeClass("slideIn");
    })

    
});