$(function() {
	setTimeout(function() { // let images load a bit (bug in plugin)
		$('#slider').nivoSlider({
			controlNav: false
		});
	}, 500);

    $('.menu :not(.right) a').bind('click', function(e) {
		$(".menu li:not(.right)").removeClass("selected");
		$(this).parent().addClass('selected');
    	var elem = $($(this).attr('href'));
    	if (elem.hasClass('visuallyhidden')) {
	    	elem.siblings().filter(':not(.visuallyhidden)').slideUp(300, function() {
	    		$(this).addClass('visuallyhidden');
	    		elem.hide().removeClass('visuallyhidden').slideDown(300);
	    	});	
    	}
    	e.preventDefault();
    });
    
    $('.i18n a').bind('click', function(e) {
    	var elem = $(this);
    	if (elem.attr('href').indexOf('en') > 0) {
    		$('.is').hide();
    		$('.en').show();
    		elem.parent().hide().next().show();
    	} else {
    		$('.en').hide();
    		$('.is').show();
    		elem.parent().hide().prev().show();
    	}
    	e.preventDefault();
    });
});


















