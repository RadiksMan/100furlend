function mobileMenu(){
    $(document).on('click', '.mobile_menu', function(event) {
        if($(window).width()<=768){
            console.log('123');
            $('.sub_menu').stop().slideToggle(600);
        }else{
            $('.sub_menu').removeAttr('style');
        }
    });
}


$(document).ready(function(){
    mobileMenu();
});

$(window).load(function(){

});

$(window).resize(function(){
    mobileMenu();
});