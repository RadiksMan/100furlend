$.scrollbarWidth=function(){var a,b,c;if(c===undefined){a=$('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');b=a.children();c=b.innerWidth()-b.height(99).innerWidth();a.remove()}return c};

function mobileMenu(){
    $(document).on('click', '.mobile_menu', function(event) {
        if($(window).width()<=768-$.scrollbarWidth()){
            $('.sub_menu').stop().toggleClass('active');
            $('.header_item.item_2').stop().toggleClass('active');
        }else{
            $('.sub_menu').stop().removeClass('active');
            $('.header_item.item_2').stop().removeClass('active');
        }
    });

    $(document).on('click touchstart',function (event){
        if($(window).width()<=768-$.scrollbarWidth()){
            var div = $('.sub_menu');
            if (!div.is(event.target) && div.has(event.target).length === 0 && !$('.mobile_menu').is(event.target) && $('.mobile_menu').has(event.target).length === 0){
                    $('.sub_menu').stop().removeClass('active');
                    $('.header_item.item_2').stop().removeClass('active');
                }
        }
    });
}


$(document).ready(function(){
    mobileMenu();
});

$(window).load(function(){

});

$(window).resize(function(){

});