$(function () {

	// a 태그의 href가 설정 안되어 있는 경우

	var tabAnchor = $('.tabs-nav li'),
		tabPanel = $('.tabs-panel');

	tabAnchor.click(function(e){
        e.preventDefault();

		// 클릭 요소에만 클래스 붙이기
		tabAnchor.find('a').removeClass('active');
		$(this).find('a').addClass('active');

		// 1. content 모두 안보이게 하기
		tabPanel.hide();	

		// 2. 클릭 요소의 순번 알아오기 (index)
        var targetIdx = $(this).index();
        tabPanel.eq(targetIdx).show();

        // 3. 열자마자 0번 클릭한 효과 주기 (trigger)
        tabAnchor.eq(0).trigger('click');	

	})


});

