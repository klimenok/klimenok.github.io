$(document).ready(function () {


    $('.menu-icon').click(function () {
        $('nav ul').slideToggle(500);
    });
    $(window).resize(function () {
        if ($(window).width() < 300) {
            $('nav ul').removeAttr('style');
        }
    });

    $('.contact').click(function () {
        $('.contact_me').slideToggle(500);
    });
    $(window).resize(function () {
        if ($(window).width() < 300) {
            $('nav ul').removeAttr('style');
        }
    });
    
    $(".owl-carousel").owlCarousel({
		loop: true,
		responsive : {
			0 : {
			items : 1,
			nav : true
		}
	 },
     navText: ""
    });

});
$(window).scroll(function() {
    $('.mov').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+400) {
        $(this).addClass('fadeInRight');
      }
    });
    $('.move').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+400) {
          $(this).addClass('fadeInDown');
        }
      });
  });
