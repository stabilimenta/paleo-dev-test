$(window).on('load', function(){
  $('#header .flexslider').flexslider({
	start: function(slider){
		$('.flexslider').removeClass('loading');
	},
    animation: "fade",
    directionNav: false,
  });
  $('#portfolio .flexslider').flexslider({
	start: function(slider){
		$('.flexslider').removeClass('loading');
	},
    animation: "slide",
    directionNav: false,
  });

});

