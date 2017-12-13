// JavaScript Document

$(function(){ 
	
	//screen1
	//鼠标点击logo
	$('.logo').mouseover(function(){	
		$(this).removeClass('shake').addClass('flip');
	})
	
	//首页gogo
	$('.gogo').mouseover(function(){	
		$(this).addClass('animated rubberBand');
	});
	$('.gogo').mouseout(function(){	
		$(this).removeClass('animated rubberBand');
	});	
	$('.gogo').click(function(){
		$(".gps li").eq(1).addClass('current').siblings().removeClass('current');
		$(".doc").animate({top:-100+'%'},1000);
        $(".doc>div").eq(1).removeClass('start').siblings().addClass('start');
	});   
	
    //$(".doc").css('top','-400%');
    $(".screen01").removeClass('start');
    
    var num=0;
    var timer = null;

    //鼠标点击li发生事件  ol里面的li
    $(".gps li").click(function(){  
        var index = $(this).index();
        $(this).addClass('current').siblings().removeClass('current');
        $(".doc").animate({top:-index*100+'%'},300);
        num = index;
        $(".doc>div").eq(num).removeClass('start').siblings().addClass('start');
    });

    $(document).mousewheel(function(e,d){
        clearTimeout(timer);
	$('.gogo').click(function(){	
		$(".doc").animate({top:-100+'%'},300);			
	});   
        timer = setTimeout(function(){  
            num-=d;
            if(num>4){num=4;}
            if(num<0){num=0;}
            $(".gps li").eq(num).addClass('current').siblings().removeClass('current');
            $(".doc").animate({top:-num*100+'%'},300);
            $(".doc>div").eq(num).removeClass('start').siblings().addClass('start');
        },300);
    });
	
	//screen03
    $('.screen03 .banner_in li').hover(function(e){
        $(this).stop().animate({width:600}).siblings().stop().animate({width:100});
    },function(){   
     $('.screen03 .banner_in li').stop().animate({width:200});
    }); 
	
	//screen02
	$('.screen02 .tou').click(function(){	
		$('.screen02 .left').stop().slideToggle();
	});
	
	//screen02 轮播图
	;(function(){
			
    var timer02 = null;
    var num02 = 0;
    
    function dongdong(){   
        clearInterval(timer02);
        timer02 = setInterval(function(){ 
            
            num02++;
            if(num02>4){  
                num02=0;
            };
            
            $('.left ul').stop().animate({left: -num02*230});
        },3000)    
    }
    
    dongdong()
       
    //鼠标移动到大的区域，清除动画，鼠标移出大的区域，再进行自动播放。
    
    $('.left').hover(function(e) {
        clearInterval(timer02);
    },function(){   
        dongdong();
    });
	})();
	
	//screen02 联系我切换
	;(function(){
		
		$('.right li').hide();
		$('.right p').click(function(){	
			if($(this).html()=='联系我'){		
				$(this).html('Hello');
				$(this).parent().css({'border':'1px solid #000'});
			}else{	
				$(this).html('联系我');
				$(this).parent().css({'border':'0'});
			}
			$('.right li').stop().slideToggle();
		});
	
	
	})();
	
	//screen03 无缝轮播
	$(function(){   
    //网页加载完执行
        //自动播放
    var timer1 = null;//定时器名字
    var num1 = 0;//累加器
    
    function go1(){  
        clearInterval(timer1);
        timer1 = setInterval(function(){ 
            num1+=3;
            if(num1>3000){    
               num1 = 0; 
            }
            $('.banner03_in').css({left:-num1});
        },30);
    }
    go1();
    
    
    $('.banner03_in li').hover(function(e) {
       clearInterval(timer1);
       $(this).siblings().stop().fadeTo(300,0.3);
    },function(){   
        go1();
        $('.banner03_in li').stop().fadeTo(300,1);
    });
    
    
    
    //事件当中执行  
})
	
	//screen03 样式切换
	;(function(){	
		$('.banner03').hide();
		$('.qiehuan').click(function(){	
			$('.banner03').stop().slideToggle();
			$('.banner').stop().slideToggle();
		});
	})();
	
	//screen04 透明凸显   
    $('.screen04_box .screen04_in li').hover(function(e){
        //鼠标移上自身没有变化，兄弟们透明度降低。
        $(this).siblings().stop().fadeTo(500,0.3);
    },function(){   
         $('.screen04_box .screen04_in li').stop().fadeTo(500,1);
    }).click(function(e){
        $(this).children().stop().slideUp().slideDown();
    });
	
	//screen05 tab切换
	$('.screen05_all span').mouseover(function(){	
		$(this).addClass('current').siblings().removeClass('current');
		$('.screen05_all li').eq( $(this).index() ).addClass('current').siblings().removeClass('current')
	});
	
});
























