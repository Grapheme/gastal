var Gastal = {};
Gastal.faq = function() {
    $('.js-faq-question').on('click', function(){
        $(this).toggleClass('opened')
            .siblings().removeClass('opened')
            .find('.js-faq-answer').slideUp();
        $(this).find('.js-faq-answer').slideToggle();
    });
}
$(function(){
    Gastal.faq();
});
