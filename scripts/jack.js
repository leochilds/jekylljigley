//<![CDATA[
$(document).ready(function(){


jQuery.fn.fadeTo = function(speed,to,callback) { 
    return this.animate({opacity: to}, speed, function() { 
        if (to == 1 && jQuery.browser.msie)  
            this.style.removeAttribute('filter');  
        if (jQuery.isFunction(callback)) 
            callback();  
    }); 
}; 

// content fade in
	$("#content").css(
		{"opacity": "0"}
		);	
	$('#content').fadeTo(1000, 1.0);
	
/*$('#content').fadeIn(function(){
    this.style.removeAttribute("filter");
});*/

// start opacity
	$("ul.navbar li").not('.current').css(
		{"opacity": "0.25"}
		);
	$("ul.navbar li.current").css(
		{"opacity": "0.50"}
		);
// menu hover
$("ul.navbar li").not('.current').hover(
		function(){
			$(this).fadeTo(200, 0.5);
		},
		function(){
			$(this).fadeTo(200, 0.25);
	});
// h1 hover
$("h1").hover(
		function(){
			$(this).fadeTo(200, 0.75);
		},
		function(){
			$(this).fadeTo(200, 1);
	});


// Cycle gallery
	$('.slideshow').cycle({ 
		fx:    'fade', 
		speed:  1000,
		timeout: 0,
		//speedIn:     null,  // speed of the "in" transition 
		//speedOut:    null,  // speed of the "out" transition
		next:   '#next', 
		prev:   '#previous',
		//width:	'1272'
		//pause: '#pause'
		pager:   '.aside', 
    	//pagerEvent: 'click',
		pagerAnchorBuilder: function(idx, slide) { 
       		// return selector string for existing anchor 
        	return '.thumbs li:eq(' + idx + ') a'; 
    	} 
	});


// thumb hovers
	$(".thumbs img").css(
		{"opacity": "0.5"}
		);	
	$(".thumbs img").hover(
		function(){
			$(this).fadeTo(200, 1.0);
		},
		function(){
			$(this).fadeTo(200, 0.5);
	});
	
	
}); //close doc ready
//]]>
