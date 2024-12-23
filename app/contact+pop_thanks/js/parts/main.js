$('.open-pop-1').on('click', () => {
    $('.pop-1').addClass('active')
    $('body').addClass('scroll')
})

$('.open-pop-2').on('click', () => {
    $('.pop-2').addClass('active')
    $('body').addClass('scroll')
})

$('.pop-close-js').on('click', () => {
    $('.pop').removeClass('active')
    $('body').removeClass('scroll')
})

// console.log($(window).width())


$('.we-btn').each(function (index) {
    $(this).on('click', () => {
        $('.we-btn').removeClass('active')
        $(this).addClass('active')
        $('.we__tab').removeClass('active')
        $('.we__tab').eq(index).addClass('active')
    })
})


$('.we__tab .we__link').each(function (index) {
    $(this).on('click', () => {
        // $(this).parents('.we__tab').find('.we__link').removeClass('active')
        // $(this).addClass('active')
        // $(this).parents('.we__tab').find('.we__tab-item').removeClass('active')
        // $(this).parents('.we__tab').find('.we__tab-item').eq(index).addClass('active')

        $(this).parents('.we__tab').find('.we__link').removeClass('active')
        $(this).addClass('active')
        $(this).parents('.we__tab').find('.we__tab-item').removeClass('active')
        $('.we__tab-item').eq(index).addClass('active')
    })
})



$('.mob__link-top').each(function (index) {
    $(this).on('click', () => {
        if ($('.mob__link').eq(index).hasClass('active')) {
            $('.mob__link').removeClass('active')
            $('.mob__link-bot').slideUp()
        } else {
            $('.mob__link').removeClass('active')
            $('.mob__link').eq(index).addClass('active')
            $('.mob__link-bot').slideUp()
            $('.mob__link-bot').eq(index).slideDown()
        }
    })
})

$('.header__burger').on('click', () => {
    $('.mob').toggleClass('active')
    $('.header__burger').toggleClass('active')
    $('body').toggleClass('scroll')
})


$('.typed-words').each(function (i, el) {
    var $el = $(el);
    var strings = $el.text().split('|');
    var typeSpeed = +$el.attr('data-type-speed') || 50;

    $el
        .typed({
            strings: strings,
            typeSpeed: typeSpeed,
            backDelay: 700,
            loop: true,
            preStringTyped: function () {
                // Avoid content flicker on load
                $el.css({visibility: 'visible'})
            }
        });
});

if ($('.select').length) {
    $('.select').select2()
}


$('.select').on('select2:open', function (e) {
    $('.profile__links').addClass('active')
});

$('.select').on('select2:close', function (e) {
    $('.profile__links').removeClass('active')
});


$('.select').on('select2:select', function (e) {
    $('.profile__link').removeClass('active')
    $('.profile__link').eq($('.select').select2('val')).addClass('active')
});




$('.password svg').each(function (index) {
    $(this).on('click', () => {
        $('.password').eq(index).toggleClass('active')
        if ($('.password').eq(index).hasClass('active')) {
            $('.password input').eq(index).attr('type', 'text')
        } else {
            $('.password input').eq(index).attr('type', 'password')
        }
    })
})
function fadeIn (item) {
    $(item).each(function () {
        if ($(window).width > 999) {
            if ($(window).scrollTop() >= $(this).offset().top - $(window).height() + 200) {
                $(this).addClass('fade-out')
            }
        } else {
            if ($(window).scrollTop() >= $(this).offset().top - $(window).height() + 50) {
                $(this).addClass('fade-out')
            }
        }
    })
}
$(window).on('scroll', () => {
    fadeIn('.fade-in')
    fadeIn('.title')
    fadeIn('.sub')
})

fadeIn('.fade-in')
fadeIn('.title')
fadeIn('.sub')




