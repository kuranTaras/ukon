$('.cabinet-refactor-js').on('click', () => {
    $('.cabinet__items').toggleClass('active')
    $('.cabinet-refactor-js').toggleClass('active')
    if ($('.cabinet-refactor-js').hasClass('active')) {
        $('.cabinet-refactor-js').text($('.cabinet-refactor-js').attr('data-refactor'))
    } else {
        $('.cabinet-refactor-js').text($('.cabinet-refactor-js').attr('data-save'))
    }
})


$('.open-up-1').on('click', () => {
    $('.up-1').addClass('active')
    $('body').addClass('scroll')
})

$('.cabinet__wallet-load').on('click', () => {
    $('.up-2').addClass('active')
    $('body').addClass('scroll')
})

$('.cabinet__wallet-item-choose, .cabinet__wallet-item-resend, .cabinet__wallet-item-licvidation').on('click', () => {
    $('.up-3').addClass('active')
    $('body').addClass('scroll')
})

$('.cabinet__wallet-item-more').on('click', () => {
    $('.up-4').addClass('active')
    $('body').addClass('scroll')
})


$('.cabinet__wallet-photo, .cabinet__wallet-photo-two').on('click', () => {
    $('.up-5').addClass('active')
    $('body').addClass('scroll')
})


$('.up-close, .up-bg, .up-close-js').on('click', () => {
    $('.up').removeClass('active')
    $('body').removeClass('scroll')
})


$('.profile__link').each(function (index) {
    $(this).on('click', () => {
        $('.profile__link').removeClass('active')
        $(this).addClass('active')
        $('.cabinet__tab').removeClass('active')
        $('.cabinet__tab').eq(index).addClass('active')
    })
})


$('.up__photo-item img').each(function (index) {
    $(this).on('click', () => {
        $('.big img').attr('src', $(this).attr('src'))
        $('.big').addClass('active')
    })
})

$('.big-bg').on('click', () => {
    $('.big').removeClass('active')
})