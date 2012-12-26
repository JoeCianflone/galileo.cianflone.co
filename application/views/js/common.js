var lightbox = {
	options : null,
	
	screenWidth: ($(window).width() > $('body').width()) ? $(window).width() : $('body').width(),
	
	screenHeight:($(window).height() > $('body').height()) ? $(window).height() : $('body').height(),
	
	init: function(options) {
		lightbox.options = options; 
		
		$('a', '.photos').click(function() {
			lightbox.overlay();
			lightbox.showBody($(this));
			
			lightbox.kill();
			return false;
		}); 		
	},
	overlay: function() {
		$('body').append("<div id='"+lightbox.options.overlay+"'></div>");
		
		$('#overlay').css({
			display:'none',
			width: lightbox.screenWidth,
			height: lightbox.screenHeight,
			position: 'absolute',
			'z-index': '100',
			opacity: lightbox.options.opacity,
			top: '0',
			left: '0'
		}).fadeIn(500);
	},
	box: function(im) {
		$('body').append("<div id='img'><img src='"+im+"'></div>");
		img = $('#img');
		
		$('#img').css({
			'z-index':101,
			
			position: 'absolute',
			top:(lightbox.screenHeight/2) - (img.height()/2),
			left:(lightbox.screenWidth/2) - (img.width()/2)
		});
		
	},
	
	showBody: function(photoObject) {
		$t = photoObject.attr('href');
		lightbox.box($t);
	},
	
	kill: function() {
		$('#'+lightbox.options.overlay).click(function() {
			$(this).fadeOut(500, function(){
				$(this).remove('#'+lightbox.options.overlay);
			});
		});
		
		$(document).keyup(function(e){
			if (e.keyCode == 27) {
					$('#'+lightbox.options.overlay).click();
			}
		});
	}
	
};

$(document).ready(function(){
	lightbox.init({
		overlay: 'overlay',
		opacity: '0.6'
	});
});
