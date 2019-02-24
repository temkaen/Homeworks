$('.header__menubtn').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('header__btn_active');
    $('.header__menu_btn').toggleClass('header__menu_btn_active');
});
$('.header__search p').on('click', function(sch) {
    sch.preventDefault();
    $(this).toggleClass('header__btn_active');
    $('.header__menu_btn').toggleClass('header__menu_btn_active');
});