/* Author: 

*/

$(function() {
    $('#slider').nivoSlider({
    	controlNav: false
    });
    
    $('.menu :not(.right) a').bind('click', function(e) {
    	$(this).parent().addClass('selected').siblings().removeClass('selected');
    	var elem = $($(this).attr('href'));
    	if (elem.hasClass('visuallyhidden')) {
	    	elem.siblings().filter(':not(.visuallyhidden)').slideUp(300, function() {
	    		$(this).addClass('visuallyhidden');
	    		elem.hide().removeClass('visuallyhidden').slideDown(300);
	    	});	
    	}
    	e.preventDefault();
    });
    
    var changing = false;
    $('.i18n a').bind('click', function(e) {
    	if (changing) { return; }
    	changing = true;
    	var elem = $(this);
    	if (elem.attr('href').indexOf('en') > 0) {
    		$('.is').fadeOut(200, function(){
    			$('.en').fadeIn(200);
    			elem.parent().hide().next().show();
    			changing = false;
    		});
    	} else {
    		$('.en').fadeOut(200, function(){
    			$('.is').fadeIn(200);
    			elem.parent().hide().prev().show();
    			changing = false;
    		});
    	}
    	e.preventDefault();
    });
});


















