$('.prices__btn').each(function (index) {
    $(this).on('click', () => {
        $('.prices__btn').removeClass('active')
        $(this).addClass('active')
        $('.prices__tab').removeClass('active')
        $('.prices__tab').eq(index).addClass('active')
    })
})

$('.all-btn').each(function (index) {
    $(this).on('click', () => {
        $('.all-btn').removeClass('active')
        $(this).addClass('active')
        $('.all__tab').removeClass('active')
        $('.all__tab').eq(index).addClass('active')
    })
})
