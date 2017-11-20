$(document).ready(function() {

// для всплывающих элементов после нажатия
	$(document).ready(function() {
		$(".popup").magnificPopup({type:"image"});
		$(".popup_c").magnificPopup({});
	  });
	//для фиксировоной и резиновой картинки
	$.stellar({
		responsive: true,
		horizontalOffset: 60,
	});


	//карусель
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
	//$(".owl-prev, .owl-next").html("");
	/*
	$(document).ready(function(){
		$(".owl-carousel").owlCarousel({
		  loop: true,
		  center: true,
		  margin: 10,
		  stagePadding: 20,
		  responsive: {
			0: {
			  items: 1,
			  nav: true,
			  autoplay: true,
			  autoplayTimeout: 1000,
			  autoplaySpeed: 500,
			  smartSpeed: 1000
			},
			640: {
			  items: 2,
			  nav: true,
			  autoplay: true,
			  autoplayTimeout: 2000
			},
			800: {
			  items: 3,
			  touchDrag: true,
			  loop: false
			}
		  }
		})
	  });*/
	  
	
//под все экраны image
	function wResize(){
		$("header").css ("min-height",$(window).height());
	};
	wResize();
	$(window).resize(function(){
		wResize()
	});
//табы
$(".top_phone .wrapper .tab").click(function(){
	$(".top_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".top_phone .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active")

//табы
$(".bottom_phone .wrapper .tab").click(function(){
	$(".bottom_phone .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".bottom_phone .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active")
//табы
$(".tabs_header .wrapper .tab").click(function(){
	$(".tabs_header .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tabs_header .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active")

//табы
$(".find_tab .find_wrapper .taba").click(function(){
	$(".find_tab .find_wrapper .taba").removeClass("active").eq($(this).index()).addClass("active");
	$(".find_tab .tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active")


	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				var magnificPopup =$.magnificPopup.instance;
				magnificPopup.close();
			}, 1000);
		});
	});
	
});
// анимация
$(window).load(function() {
	$(".top_header h1").animated("fadeInDown", "fadeOut");
	$(".top_header h2").animated("fadeInUp", "fadeOut");
	$(".tabs_header ").animated("flipInY", "fadeOut");
	$(".profi_item ").animated("fadeInRight", "fadeOut");
	$("form ").animated("lightSpeedIn", "fadeOut");
	$(".flag_title ").animated("fadeInRight", "fadeOut");
	$(".flag_button ").animated("fadeInRight", "fadeOut");
//	$(".find_wrapper ").animated("fadeInLeft", "fadeOut");
	$("footer ").animated("fadeInUp", "fadeOut");

});