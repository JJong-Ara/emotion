$(function(){
    $("input[type='text']").attr("type", "search");

    // aryicle, aside, close 변수저장
    var $items = $("article");
    var $aside = $("aside");
    var $close = $aside.find("span");

    // .each - jquery 반복문 메서드
    $items.each (function(){
        var $el = $(this); // this = article
        $el.on("mouseenter",function(e){
            // (e) - 이벤트 핸들러 함수의 매개변수
            // currentTarget - 현재 이벤트가 일어나 요소
            $(e.currentTarget).find("video")[0].play();
            // .play(); - 비디오 재생 메서드
        });
        $el.on("mouseleave",function(e){
            $(e.currentTarget).find("video")[0].pause();
            // .paues(); - 비디오 일시정지
        });

        // article 클릭했을 때 실행
        $el.on("click",function(e){
            var $currentTarget = $(e.currentTarget);
            var tit = $currentTarget.find("h2").text(); //클릭한 article의 텍스트 h2 가져옴
            var txt = $currentTarget.find("p").text(); //클릭한 article의 텍스트 p 가져옴
            var vidSrc = $currentTarget.find("video").attr("src"); //클릭한 article의 비디오 소스 가져옴

            // article의 제목과 내용을 aside의 제목과 내용으로 넣어주기 위해 가져옴


            $aside.find("h3").text(tit);
            $aside.find("p").text(txt);
            $aside.find("video").attr("src",vidSrc)[0].play(); // article의 비디오 설정 후 재생
            $aside.addClass("on"); // 투명도 100%, 위치값 left:0; 속성 추가
        });
    });
        // 닫기 버튼 클릭시 aside 닫기
        $close.on("click",function(){
            $aside.removeClass("on");
            $aside.find("video")[0].pause();
        });
        // aside 클릭시 닫기
        $aside.on("click",function(){
            $aside.removeClass("on");
            $aside.find("video")[0].pause();
        });

        // 검색 버튼 클릭 시 검색창 보기
        $("#searchButton").on("click",function(){
            $("#searchContainer").toggle();
        });
        // .toggle - on>off / off>on
        // 아무데나 눌렀을 때 검색창 닫기
        $(document).on("click",function(event){
            if (!$(event.target).closest("#serchContainer, #serchButton").length){
                $("#serchContainer").hide();
            };
        });
        // ! 연산자 - 부정연산자 (조건이 거짓일때 참을 반환)


});