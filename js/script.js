$(document).ready(function(){


    //탭링크
    $('.tab-group li').click(function(){
        console.log(1);
        var tab_id = $(this).attr('data-tab');

        $('.tab-group li').removeClass('active');
        $('.tab-content').removeClass('active');

        $(this).addClass('active');
        $("#"+tab_id).addClass('active');
    })

    //모바일 헤더 
    $('.menu').click(function(){
        if($('header .menu').hasClass('active')){
            $('header .menu').removeClass('active')
            $('.menu-pop-wrap').removeClass('active');
        }else {
            $('header .menu').addClass('active')
            $('.menu-pop-wrap').addClass('active');
        }
    })

    $('.pop-bg').click(function(){
        $('.pop-bg').removeClass('show');
        $('.pop-wrap').removeClass('show');
    })
    $('.pop-wrap .close-btn').click(function(){
        $('.pop-bg').removeClass('show');
        $('.pop-wrap').removeClass('show');
    })
    $('.pop-wrap .enter-btn').click(function(){
        $('.pop-bg').removeClass('show');
        $('.pop-wrap').removeClass('show');
    })

    $('.recruit-wrap .cont-group .recruit-box button').click(function(){
        $('.pop-bg').addClass('show');
        $('.recruit-pop-wrap').addClass('show'); 
    })

    $('.recruit-pop-wrap .recruit-btn').click(function(){
        $('.pop-bg').addClass('show');
        $('.recruit-pop-wrap').removeClass('show'); 
        $('.recruit-success-pop-wrap').addClass('show'); 
    })

    $('.find-password-wrap form button').click(function(){
        $('.pop-bg').addClass('show');
        $('.success-password-pop-wrap').addClass('show');
    })

    $('.controller-wrap .controller-head img').click(function(){
        $('.controller-wrap').removeClass('show');
    })
})


