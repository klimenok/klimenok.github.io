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

    $(window).load(function() {
        $(".title_text").animated("fadeInDown", "fadeOut");
        $(".top_header h2").animated("fadeInUp", "fadeOut");
        $(".tabs_header ").animated("flipInY", "fadeOut");
        $(".profi_item ").animated("fadeInRight", "fadeOut");
        $("form ").animated("lightSpeedIn", "fadeOut");
        $(".flag_title ").animated("fadeInRight", "fadeOut");
        $(".flag_button ").animated("fadeInRight", "fadeOut");
    //	$(".find_wrapper ").animated("fadeInLeft", "fadeOut");
        $("footer ").animated("fadeInUp", "fadeOut");
    
    });
});