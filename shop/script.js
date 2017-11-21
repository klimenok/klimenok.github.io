$(document).ready(function() {
        
            $('.menu-icon').click(function() {
                $('nav ul').slideToggle(500);
            });
            $(window).resize(function(){
                if ($(window).width()<500){
                    $('nav ul').removeAttr('style');
                }
            });
}