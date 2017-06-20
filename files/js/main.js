function main() {
    $('.menu-row').hide();
    $('.menu-row').fadeIn(1000);
    $('.description').hide();
    $('.clickable-title').on('click', function(){
        $(this).next().slideToggle(550);
        $(this).toggleClass('active');
    });
}
$(document).ready(main);