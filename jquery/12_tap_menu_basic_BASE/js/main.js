$(function () {

	// a 태그의 href가 설정되어 있는 경우

	var tabAnchor = $('.tabs-nav li a'),
		tabPanel = $('.tabs-panel');

	tabAnchor.click(function(e){

		// a 태그의 기본 기능을 (href="#work01") 막음
		e.preventDefault();

		// 클릭 요소에만 클래스 붙이기 1
		tabAnchor.removeClass('active');
		$(this).addClass('active');

		// 클릭 요소에만 클래스 붙이기 2
		// $(this).addClass('active').siblings().removeClass('active');
		// 현재 li > a 1개씩 들어서 사용 불가능

		// 1. content 모두 안보이게 하기
		tabPanel.hide();

		// 2. a의 href 값을 가진 요소 보여지기
		var _target = $(this).attr('href');
		$(_target).show();

	})


});

