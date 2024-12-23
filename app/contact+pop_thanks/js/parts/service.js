$('.faq__item-top').each(function (index) {
    $(this).on('click', () => {
        if ($('.faq__item').eq(index).hasClass('active')) {
            $('.faq__item').removeClass('active')
            $('.faq__item-bot').slideUp()
        } else {
            $('.faq__item').removeClass('active')
            $('.faq__item').eq(index).addClass('active')
            $('.faq__item-bot').slideUp()
            $('.faq__item-bot').eq(index).slideDown()
        }
    })
})


