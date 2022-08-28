$(function () {
	var tabAnchor = $('.tabs-nav li'),
		tabPanel = $('.tabs-panel');
		
	tabAnchor.on('click',function(e){
		e.preventDefault();
		tabAnchor.find('a').removeClass('active');
		$(this).find('a').addClass('active');

		tabPanel.hide();		
		tabPanel.eq($(this).index()).show();
	});
	
	tabAnchor.eq(0).trigger('click');		

});

