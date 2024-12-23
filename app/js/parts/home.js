const swiperBlog = new Swiper('.blog__slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.blog .swiper-pagination'
    },
    breakpoints: {
        1279: {
            spaceBetween: 30,
            slidesPerView: 4,
        },
        999: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        759: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }
});

$('.text .btn-more').on('click', () => {
    $('.text').toggleClass('active')
    if ($('.text').hasClass('active')) {
        $('.text .btn-more span').text($('.text .btn-more').attr('data-less'))
    } else {
        $('.text .btn-more span').text($('.text .btn-more').attr('data-more'))
    }
})

const anim = lottie

anim.loadAnimation({
    container: document.querySelector('.hero__img'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "./lotties/W4PfNYEfKM.json"
})

anim.loadAnimation({
    container: document.querySelector('.about__img'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: "./lotties/ApZ0kDHf3T.json"
})

// if ($('.numbers-js').length) {
//     let scrolled = false
//     $('.numbers-js').text($('.numbers-js').text() - 5)
//     let number = parseInt($('.numbers-js').text())
//     $(window).on('scroll', () => {
//         if ($(window).scrollTop() >= $('.numbers-js').offset().top - $(window).height() + 100) {
//             if (scrolled === false) {
//                 let i = 0
//                 let interval = setInterval(() => {
//                     i++
//                     $('.numbers-js').text(number + i)
//                     if (i === 5) {
//                         clearInterval(interval)
//                     }
//                 }, 200)
//                 scrolled = true
//             }
//         }
//     })
//     if ($(window).scrollTop() >= $('.numbers-js').offset().top - $(window).height() + 100) {
//         if (scrolled === false) {
//             let i = 0
//             let interval = setInterval(() => {
//                 i++
//                 $('.numbers-js').text(number + i)
//                 if (i === 5) {
//                     clearInterval(interval)
//                 }
//             }, 200)
//             scrolled = true
//         }
//
//     }
// }




$('.services__item').each(function (index) {
    $(this).hover(() => {
        $(this).removeClass('nohover')
        $(this).addClass('hover')
    }, () => {
        $(this).removeClass('hover')
        $(this).addClass('nohover')

        // setTimeout(() => {
        //     $(this).addClass('notransition')
        //     $(this).removeClass('hover')
        //     $(this).removeClass('nohover')
        // }, 400)
        // setTimeout(() => {
        //     $(this).removeClass('notransition')
        // }, 410)
    })
})







if ($('.numbers-js').length) {
    var number = $('.numbers-js').text().trim()
    $('.numbers-js').addClass('swiper')
    $('.numbers-js').text(number.slice(0, -1))
    let startNumber = number[number.length -1];

    $('.numbers-js').append('<div class="numbers-js-swiper swiper"></div>')
    $('.numbers-js-swiper').append('<div class="numbers-js-wrapper swiper-wrapper"></div>')
    for (let i=0; i<7; i++) {
        $('.numbers-js-wrapper').append(`<div class="swiper-slide">${i}</div>`)
    }
    $('.numbers-js-wrapper').append('<div class="numbers-js-wrapper swiper-wrapper"></div>')

    const numbersJsSwiper = new Swiper('.numbers-js-swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        speed: 10000,
        direction: 'vertical',
    });



    $(window).on('scroll', () => {
        if ($(window).width() > 759) {
            if ($(window).scrollTop() > $('.numbers-js').offset().top - $(window).height() + 200) {
                numbersJsSwiper.slideTo($('.numbers-js .swiper-slide').length-1)
            }
        } else {
            if ($(window).scrollTop() > $('.numbers-js').offset().top - $(window).height() + 50) {
                numbersJsSwiper.slideTo($('.numbers-js .swiper-slide').length-1)
            }
        }

    })
}



















