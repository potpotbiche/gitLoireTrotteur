var parcours1 = $(".parcours1")
var parcours1_detail = $(".parcours1_detail")
var parcours1_icon = $(".parcours1 i") 

var parcours2 = $(".parcours2")
var parcours2_detail = $(".parcours2_detail")
var parcours2_icon = $(".parcours2 i") 

var parcours3 = $(".parcours3")
var parcours3_detail = $(".parcours3_detail")
var parcours3_icon = $(".parcours3 i") 

var parcours4 = $(".parcours4")
var parcours4_detail = $(".parcours4_detail")
var parcours4_icon = $(".parcours4 i") 

jQuery(document).ready(function() {
	$( ".home_bg" ).fadeOut(5000);

	setTimeout(function(){ $(".menu_parcours").css("display", "block"); },5000)

	parcours1.click(function() {
  		parcours1_detail.slideToggle();
  		if (parcours1_icon.hasClass("fa-plus")) {
  			parcours1_icon.removeClass("fa-plus").addClass("fa-minus");
  		} else {
  			parcours1_icon.removeClass("fa-minus").addClass("fa-plus");
  		}
	});


	parcours2.click(function() {
  		parcours2_detail.slideToggle();
  		if (parcours2_icon.hasClass("fa-plus")) {
  			parcours2_icon.removeClass("fa-plus").addClass("fa-minus");
  		} else {
  			parcours2_icon.removeClass("fa-minus").addClass("fa-plus");
  		}
	});

	parcours3.click(function() {
  		parcours3_detail.slideToggle();
  		if (parcours3_icon.hasClass("fa-plus")) {
  			parcours3_icon.removeClass("fa-plus").addClass("fa-minus");
  		} else {
  			parcours3_icon.removeClass("fa-minus").addClass("fa-plus");
  		}
	});

	parcours4.click(function() {
  		parcours4_detail.slideToggle();
  		if (parcours4_icon.hasClass("fa-plus")) {
  			parcours4_icon.removeClass("fa-plus").addClass("fa-minus");
  		} else {
  			parcours4_icon.removeClass("fa-minus").addClass("fa-plus");
  		}
	});
});
