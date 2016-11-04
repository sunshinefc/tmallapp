$(function () {
    var mySwiper = new Swiper ('#banner', {
        direction: 'horizontal',
        pagination:'.swiper-pagination',
        loop: false,
        autoplay : 2000,
        freeModeMomentumBounceRatio : 5,

    })

    $('.nav').on('click',function(){
    	$('.tab-box').css('display','block')
    	 $('.tab-box').addClass('ani fade-in-left').delay(800).queue(function(){
	    $('.tab-box').removeClass('ani fade-out-left').dequeue();
	        })
    })
    
   $('.tab-kongbai').on('click',function(){
   	 $('.tab-box').addClass('ani fade-out-left').delay(800).queue(function(){
	    $('.tab-box').removeClass('ani fade-in-left').dequeue();
	            $('.tab-box').css('display','none')
	        })
   })
   
    


	 var mySwiper = new Swiper('#ads', {
	        direction: 'vertical',
	        pagination:'.swiper-pagination',
	        loop: false,
	        autoplay:1000
	    });

   
})