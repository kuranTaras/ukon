if ($('input.checkbox_check').is(':checked')) {


}

$('.radio-virtual input').each(function () {
  $(this).on('change', () => {
      if ($(this).parents('.radio-virtual').hasClass('radio-virtual-true')) {
          $('.reg__item-virtual').addClass('active')
          $('.reg__item-jobs').addClass('active')
          $('.reg__item-not-jobs').removeClass('active')
      } else {
          $('.reg__item-virtual').removeClass('active')
          $('.reg__item-jobs').removeClass('active')
          $('.reg__item-not-jobs').addClass('active')
      }
  })
})

$('.radio-another input').each(function () {
    $(this).on('change', () => {
        if ($(this).parents('.radio-another').hasClass('radio-another-true')) {
            $('.reg__item-inputs-cont-another').addClass('active')
        } else {
            $('.reg__item-inputs-cont-another').removeClass('active')
        }
    })
})

$('.radio-institution input').each(function () {
    $(this).on('change', () => {
        if ($(this).parents('.radio-institution').hasClass('radio-institution-true')) {
            $('.reg__item-inputs-cont-institution').addClass('active')
        } else {
            $('.reg__item-inputs-cont-institution').removeClass('active')
        }
    })
})

$('.radio-another-2 input').each(function () {
    $(this).on('change', () => {
        if ($(this).parents('.radio-another-2').hasClass('radio-another-true')) {
            $('.reg__item-inputs-cont-another-2').addClass('active')
        } else {
            $('.reg__item-inputs-cont-another-2').removeClass('active')
        }
    })
})

$('.radio-institution-2 input').each(function () {
    $(this).on('change', () => {
        if ($(this).parents('.radio-institution-2').hasClass('radio-institution-true')) {
            $('.reg__item-inputs-cont-institution-2').addClass('active')
        } else {
            $('.reg__item-inputs-cont-institution-2').removeClass('active')
        }
    })
})


$('.radio-for-auth input').each(function () {
    $(this).on('change', () => {
        if ($(this).parents('.radio-for-auth').hasClass('radio-auth')) {
            $('.reg__item-not-auth').addClass('active')
            $('.reg__item-auth').removeClass('active')
            $('.reg-next').text($('.reg-next').attr('data-login'))
        } else if ($(this).parents('.radio-for-auth').hasClass('radio-not-auth')) {
            $('.reg__item-not-auth').removeClass('active')
            $('.reg__item-auth').addClass('active')
            $('.reg-next').text($('.reg-next').attr('data-next-step'))
        }
    })
})



$('.radio-desired input').each(function () {
    $(this).on('change', () => {
        if ($(this).parents('.radio-desired').hasClass('radio-desired-true')) {
            $('.reg__item-input-desired').addClass('active')
        } else {
            $('.reg__item-input-desired').removeClass('active')
        }
    })
})
$('.radio-pay input').each(function () {
    $(this).on('change', () => {
        if ($(this).parents('.radio-pay').hasClass('radio-pay-online')) {
            $('.reg__item-pay-btn').addClass('active')
        } else {
            $('.reg__item-pay-btn').removeClass('active')
        }
    })
})


$('.reg__item-radio-signature input').each(function () {
    $(this).on('change', () => {
        if ($(this).parents('.reg__item-radio-signature').hasClass('radio-signature')) {
            $('.reg__item-signature').addClass('active')
            $('.reg__item-signature-download').removeClass('active')
            $('.reg__item-signature-email').removeClass('active')
        } else if  ($(this).parents('.reg__item-radio-signature').hasClass('radio-signature-download')) {
            $('.reg__item-signature').removeClass('active')
            $('.reg__item-signature-download').addClass('active')
            $('.reg__item-signature-email').removeClass('active')
        } else if  ($(this).parents('.reg__item-radio-signature').hasClass('radio-signature-email')) {
            $('.reg__item-signature').removeClass('active')
            $('.reg__item-signature-download').removeClass('active')
            $('.reg__item-signature-email').addClass('active')
        }
    })
})


$('.reg__item-radio-prove input').each(function () {
    $(this).on('change', () => {
        if ($(this).parents('.reg__item-radio-prove').hasClass('reg__item-radio-prove-send')) {
            $('.reg__item-email').addClass('active')
            $('.reg__item-files').removeClass('active')
        } else if ($(this).parents('.reg__item-radio-prove').hasClass('reg__item-radio-prove-download')) {
            $('.reg__item-email').removeClass('active')
            $('.reg__item-files').addClass('active')
        }
    })
})

$('.reg__item-radio-ip input').each(function () {
    $(this).on('change', () => {
        if ($(this).parents('.reg__item-radio-ip').hasClass('reg__item-radio-ip-send')) {
            $('.reg__item-ip-email').addClass('active')
            $('.reg__item-ip-files').removeClass('active')
        } else if ($(this).parents('.reg__item-radio-ip').hasClass('reg__item-radio-ip-download')) {
            $('.reg__item-ip-email').removeClass('active')
            $('.reg__item-ip-files').addClass('active')
        }
    })
})



$('.radio-invoice input').each(function () {
    $(this).on('change', () => {
        if ($(this).parents('.radio-invoice').hasClass('radio-invoice-employer')) {
            $('.reg__item-employer').addClass('active')
            $('.reg__item-physical').removeClass('active')
            $('.reg__item-legal').removeClass('active')
        } else if ($(this).parents('.radio-invoice').hasClass('radio-invoice-physical')) {
            $('.reg__item-employer').removeClass('active')
            $('.reg__item-physical').addClass('active')
            $('.reg__item-legal').removeClass('active')
        }
        else if ($(this).parents('.radio-invoice').hasClass('radio-invoice-legal')) {
            $('.reg__item-employer').removeClass('active')
            $('.reg__item-physical').removeClass('active')
            $('.reg__item-legal').addClass('active')
        }
    })
})


let step = 0;
$('.reg-next').on('click', () => {
    if (step < 6) {
        step++;
    }
    if (step < 5) {
        $('.reg__left-top-num-current').text(step+1)
    }
    if (step === 6) {
        window.location.replace("/thanks.html");
    }
    $('.reg__step').eq(step).addClass('active')
    $('.reg__tab').removeClass('active')
    $('.reg__tab').eq(step).addClass('active')
    $('.reg-next').text($('.reg-next').attr('data-next-step'))
    if (step === 1) {
        $('.reg__left-top-title').text($('.reg__left-top-title').attr('data-step-2'))
    } else if (step === 2) {
        $('.reg__left-top-title').text($('.reg__left-top-title').attr('data-step-3'))
    } else if (step === 3) {
        $('.reg__left-top-title').text($('.reg__left-top-title').attr('data-step-4'))

    } else if (step === 4) {
        $('.reg__left-top-title').text($('.reg__left-top-title').attr('data-step-5'))
        $('.reg-next').text($('.reg-next').attr('data-check'))
    } else if (step === 5) {
        $('.reg__left-top-title').text($('.reg__left-top-title').attr('data-step-6'))
        $('.reg-next').text($('.reg-next').attr('data-end'))
    }
})

$('.reg__left-top-prev').on('click', () => {
    if (step > 0) {
        step--;
    }
    if (step < 5) {
        $('.reg__left-top-num-current').text(step+1)
    }
    $('.reg__step').eq(step+1).removeClass('active')
    $('.reg__tab').removeClass('active')
    $('.reg__tab').eq(step).addClass('active')
    $('.reg-next').text($('.reg-next').attr('data-next-step'))
    if (step === 0) {
        $('.reg__left-top-title').text($('.reg__left-top-title').attr('data-step-1'))
    }
    if (step === 1) {
        if ($('.radio-auth input').is(':checked')) {
            $('.reg-next').text($('.reg-next').attr('data-login'))
        }
        $('.reg__left-top-title').text($('.reg__left-top-title').attr('data-step-2'))
    } else if (step === 2) {



        $('.reg__left-top-title').text($('.reg__left-top-title').attr('data-step-3'))
    } else if (step === 3) {

        $('.reg__left-top-title').text($('.reg__left-top-title').attr('data-step-4'))

    } else if (step === 4) {
        $('.reg__left-top-title').text($('.reg__left-top-title').attr('data-step-5'))
        $('.reg-next').text($('.reg-next').attr('data-check'))
    } else if (step === 5) {
        $('.reg__left-top-title').text($('.reg__left-top-title').attr('data-step-6'))
        $('.reg-next').text($('.reg-next').attr('data-end'))
    }
})

$('.input-password .input-text-hidden').each(function (index) {
    $(this).on('click', () => {
        $(this).toggleClass('active')
        if ($(this).hasClass('active')) {
            $('.input-password input').eq(index).attr('type', 'text')
        } else {
            $('.input-password input').eq(index).attr('type', 'password')
        }
    })
})

$('.pop__reg-item-top').each(function (index) {
    $(this).on('click', () => {
        if ($(this).parents('.pop__reg-item').hasClass('active')) {
            $('.pop__reg-item').removeClass('active')
            $('.pop__reg-item-bot').slideUp()
        } else {
            $('.pop__reg-item').eq(index).addClass('active')
            $('.pop__reg-item-bot').slideUp()
            $(this).parents('.pop__reg-item').find('.pop__reg-item-bot').slideDown()
        }
    })
})

$('.custom-select-top').each(function () {
    $(this).on('click', () => {
        $(this).parents('.custom-select').toggleClass('active')
    })
})

$('.custom-select-bot-item').each(function () {
    $(this).on('click', () => {
        $(this).toggleClass('active')
        if ($(this).parents('.custom-select').hasClass('custom-select-item-on-click-close')) {
            $(this).parents('.custom-select').removeClass('active')
            $(this).parents('.custom-select').find('.custom-select-top span').text($(this).find('span').text())
            $(this).parents('.custom-select').find('.custom-select-top img').attr('src', $(this).find('img').attr('src'))
        }
    })
})


$('.reg__item-radio-have input').each(function () {
    $(this).on('change', () => {
        if ($(this).parents('.reg__item-radio-have').hasClass('reg__item-radio-have-true')) {
            $('.reg__item-old').addClass('active')
            $('.reg__item-radio-have-true-label').addClass('active')
            $('.reg__item-radio-have-false-label').removeClass('active')
        } else {
            $('.reg__item-old').removeClass('active')
            $('.reg__item-radio-have-true-label').removeClass('active')
            $('.reg__item-radio-have-false-label').addClass('active')
        }
    })
})

$('.reg__item-radio-old input').each(function () {
    $(this).on('change', () => {
        if ($(this).parents('.reg__item-radio-old').hasClass('reg__item-radio-old-true')) {
            $('.reg__item-radio-old-true-label').addClass('active')
            $('.reg__item-radio-old-false-label').removeClass('active')
        } else {
            $('.reg__item-radio-old-true-label').removeClass('active')
            $('.reg__item-radio-old-false-label').addClass('active')
        }
    })
})

$('.reg__item-radio-have-2 input').each(function () {
    $(this).on('change', () => {
        if ($(this).parents('.reg__item-radio-have-2').hasClass('reg__item-radio-have-true-2')) {
            $('.reg__item-old-2').addClass('active')
            $('.reg__item-radio-have-true-label-2').addClass('active')
            $('.reg__item-radio-have-false-label-2').removeClass('active')
        } else {
            $('.reg__item-old-2').removeClass('active')
            $('.reg__item-radio-have-true-label-2').removeClass('active')
            $('.reg__item-radio-have-false-label-2').addClass('active')
        }
    })
})

$('.reg__item-radio-old-2 input').each(function () {
    $(this).on('change', () => {
        if ($(this).parents('.reg__item-radio-old-2').hasClass('reg__item-radio-old-true-2')) {
            $('.reg__item-radio-old-true-label-2').addClass('active')
            $('.reg__item-radio-old-false-label-2').removeClass('active')
        } else {
            $('.reg__item-radio-old-true-label-2').removeClass('active')
            $('.reg__item-radio-old-false-label-2').addClass('active')
        }
    })
})
$('html').on('click', () => {
    setTimeout(() => {
        $('.reg__tab .reg__item').each(function () {
            if ($(this).css('display') === 'flex')
            {
                $(this).addClass('border')
            } else {
                $(this).removeClass('border')
            }
        })
        $('.reg__items').each(function () {
            $(this).find('.border').last().removeClass('border')
        })

    },1)

})

$('.reg__tab .reg__item').each(function () {
    if ($(this).css('display') === 'flex')
    {
        $(this).addClass('border')
    } else {
        $(this).removeClass('border')
    }

})
$('.reg__items').each(function () {
    $(this).find('.border').last().removeClass('border')
})




