jQuery(document).ready(function($) {
  /*           ---------------------     
                  | Translation -start- |
                   ---------------------
      */

  let browser_lang = navigator.language
  let sesion_lang = sessionStorage.getItem('language')
  let lang_val = 'english'
  let browser_location = null

  function language_selector(val) {
    switch (val) {
      case 'en':
        translate('english')
        lang_val = 'english'
      case 'id':
        translate('bahasa')
        lang_val = 'bahasa'
        break
      case 'mn':
        translate('mongolian')
        lang_val = 'mongolian'
        break
      default:
        document.getElementById('lang_flag').innerHTML = 'English'
    }
  }

  function changePlayStoreLink(val) {
    switch (val) {
      case 'english':
        $('#playStore_link').attr('href', 'https://play.google.com/store/apps/details?id=com.oky')
        $('#direct_link').attr('href', 'download/app-release-english.apk')
        break
      case 'bahasa':
        $('#playStore_link').attr(
          'href',
          'https://play.google.com/store/apps/details?id=com.oky.id',
        )
        $('#direct_link').attr('href', 'download/app-release-indonesia.apk')
        break
      case 'mongolian':
        $('#playStore_link').attr(
          'href',
          'https://play.google.com/store/apps/details?id=com.oky.mn',
        )
        $('#direct_link').attr('href', 'download/app-release-mongolia.apk')
        break
    }
  }

  function translate(lang) {
    $('[data-translate]').each(function(e) {
      let key = $(this).data('translate')
      if (key) {
        if (lang == 'bahasa') {
          document.getElementById('lang_flag').innerHTML = 'Bahasa'
          document.getElementById('en-lang').innerHTML = 'Engels'
          document.getElementById('id-lang').innerHTML = 'Bahasa'
          document.getElementById('mn-lang').innerHTML = 'Mongolian'
          $('.calendar-phone').css(
            'background-image',
            'url(./img/desktop/img_home-phone-1-I@2x.png)',
          )
          $('.encyclopedia-phone').css(
            'background-image',
            'url(./img/desktop/img_home-phone-2-I@2x.png)',
          )
          $('.daily-diaries-phone').css(
            'background-image',
            'url(./img/desktop/img_home-phone-3-I@2x.png)',
          )
          $('.daily-diaries-img-card').css(
            'background-image',
            'url(./img/desktop/img_card-factor-I@2x.png)',
          )
          if (lang_val == 'english') {
            sessionStorage.setItem($(this).data('translate'), $(this).html())
          }
          $(this).html(bahasa[key])
        } else if (lang == 'mongolian') {
          document.getElementById('lang_flag').innerHTML = 'Монгол'
          document.getElementById('en-lang').innerHTML = 'Англи хэл'
          document.getElementById('id-lang').innerHTML = 'Хэл'
          document.getElementById('mn-lang').innerHTML = 'Монгол'
          $('.calendar-phone').css(
            'background-image',
            'url(./img/desktop/img_home-phone-1-M@2x.png)',
          )
          $('.encyclopedia-phone').css(
            'background-image',
            'url(./img/desktop/img_home-phone-2-M@2x.png)',
          )
          $('.daily-diaries-phone').css(
            'background-image',
            'url(./img/desktop/img_home-phone-3-M@2x.png)',
          )
          $('.daily-diaries-img-card').css(
            'background-image',
            'url(./img/desktop/img_card-factor-M@2x.png)',
          )
          if (lang_val == 'english') {
            sessionStorage.setItem($(this).data('translate'), $(this).html())
          }
          $(this).html(mongolian[key])
        } else if (lang == 'english') {
          document.getElementById('lang_flag').innerHTML = 'English'
          document.getElementById('en-lang').innerHTML = 'English'
          document.getElementById('id-lang').innerHTML = 'Bahasa'
          document.getElementById('mn-lang').innerHTML = 'Mongolian'
          $('.calendar-phone').css('background-image', 'url(./img/desktop/img_home-phone-1@2x.png)')
          $('.encyclopedia-phone').css(
            'background-image',
            'url(./img/desktop/img_home-phone-2@2x.png)',
          )
          $('.daily-diaries-phone').css(
            'background-image',
            'url(./img/desktop/img_home-phone-3@2x.png)',
          )
          $('.daily-diaries-img-card').css(
            'background-image',
            'url(./img/desktop/img_card-factor@2x.png)',
          )
          if (lang_val != 'english') {
            $(this).html(sessionStorage.getItem($(this).data('translate')))
          }
        }
      }
    })
  }
  if (sesion_lang) {
    language_selector(sesion_lang)
  } else {
    try {
      $.get(
        'https://ipinfo.io',
        response => {
          browser_location = response.country
          if (response.country === 'ID') {
            language_selector('id')
          }
          if (response.country === 'MN') {
            language_selector('mn')
          }
        },
        'jsonp',
      )
    } catch {
      console.log('failed')
    }
    if (browser_location === null) {
      language_selector(browser_lang)
    }
  }
  changePlayStoreLink(lang_val)

  $('.lang-button').click(function() {
    console.log('click')

    let lang = $(this).data('lg')
    if (lang == 'gb') {
      if (lang_val != 'english') {
        translate('english')
        sessionStorage.clear()
        lang_val = 'english'
      }
      sessionStorage.setItem('language', 'en')
      $('.articles-unicef-img').css(
        'background-image',
        'url(./img/mobile/Unicef-logo-compressed.png)',
      )
    } else if (lang == 'bah') {
      translate('bahasa')
      sessionStorage.setItem('language', 'id')
      lang_val = 'bahasa'
      $('.articles-unicef-img').css('background-image', 'url(./img/mobile/Unicef-logo-id.png)')
    } else if (lang == 'mn') {
      translate('mongolian')
      sessionStorage.setItem('language', 'mn')
      lang_val = 'mongolian'
      $('.articles-unicef-img').css('background-image', 'url(./img/mobile/Unicef-logo-mn.png)')
    }
    changePlayStoreLink(lang_val)
  })

  /*             ---------------------     
                    | Translation  -end-  |
                     ---------------------
      */

  /*             ---------------------     
                    |  Navbar   -start-   |
                     ---------------------
      */
  $('.navbar-toggler').click(function() {
    if ($('.collapser').hasClass('none')) {
      $('.collapser').removeClass('none')
      $('html, body').addClass('hidden')
    } else {
      $('.collapser').addClass('none')
      $('html, body').removeClass('hidden')
    }
  })
  $('body').click(function() {
    if ($('.dropdown-menu').hasClass('show')) {
      $('.dropdown-menu').removeClass('show')
    }
  })
  $('#lang_flag').click(function() {
    if (!$('.dropdown-menu').hasClass('show')) {
      $('.dropdown-menu').addClass('show')
    } else {
      $('.dropdown-menu').removeClass('show')
    }
    return false
  })
  $('.lang-button').click(function() {
    $('.dropdown-menu').removeClass('show')
  })
  $('.collapser').click(function() {
    $('.collapser').addClass('none')
    $('html, body').removeClass('hidden')
    $('.dropdown-menu').removeClass('show')
  })

  var scrollTopOld = 0
  $(window).scroll(function() {
    var scrollTopNew = $(window).scrollTop()
    if (scrollTopNew > scrollTopOld) {
      $('.navbar').css('top', 0) // add -270 to animate
      $('.dropdown-menu').removeClass('show')
    } else if (scrollTopNew < scrollTopOld) {
      $('.navbar').css('top', 0)
    }
    scrollTopOld = $(window).scrollTop()
  })

  /*             ---------------------     
                    |  Navbar     -end-   |
                     ---------------------
      */

  /*             --------------------------------     
                    |  Form validation     -start-   |
                     --------------------------------
      */
  $('.form_button').on('click', function(e) {
    e.preventDefault()
    var name = $('[name=name]').val()
    var email = $('#inp').val()
    var emailFilled = $('#inpHidden').val()
    var message = $('[name=message]').val()
    var platform = 'website'
    var locale = 'en'
    var reason = $('.custom-select').val()
    var organization = 'user'
    var dateRec = new Date().toISOString()
    var validation = true

    if (name == '') {
      $('[data-invalid=name]').css('opacity', '1')
      var validation = false
    } else {
      $('[data-invalid=name]').css('opacity', '0')
    }
    // || (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    if (!$('.emailAdd').length) {
      $('[data-invalid=email]').css('opacity', '1')
      var validation = false
    } else {
      $('[data-invalid=email]').css('opacity', '0')
    }
    if ($('.custom-select option:checked').val() == 'default') {
      $('[data-invalid=select]').css('opacity', '1')
      var validation = false
    } else {
      $('[data-invalid=select]').css('opacity', '0')
    }
    if (message == '') {
      $('[data-invalid=message]').css('opacity', '1')
      var validation = false
    } else {
      $('[data-invalid=message]').css('opacity', '0')
    }
    if (validation) {
      const data = {
        name,
        dateRec,
        organization,
        platform,
        reason,
        email: emailFilled,
        status: 'open',
        content: message,
        lang: locale,
      }
      $.ajax({
        //@TODO: change if beta moved
        url: 'https://cms.okyapp.info/mobile/suggestions/',
        type: 'POST',
        data: data,
        success: result => {
          $('.form_button').popover('show')
          $('[name=name]').val('')
          $('.emailAdd').remove()
          $('#inp').val('')
          $('.custom-select').val('default')
          $('[name=message]').val('')
          setTimeout(function() {
            $('.form_button').popover('hide')
          }, 2000)
        },
        error: error => {
          console.log(error)
        },
      })
    }
  })

  /*             --------------------------------     
                    |  Form validation       -end-   |
                     --------------------------------
      */
  $('#direct_link').on('click', () => {
    let locale = 'en'
    let endpoint = 'https://cms.okyapp.info/analytics/events'
    if (lang_val === 'bahasa') {
      locale = 'id'
      endpoint = 'https://cms.okyindonesia.info/analytics/events'
    }
    if (lang_val === 'mongolian') {
      locale = 'mn'
      endpoint = 'https://cms.okymongolia.info/analytics/events'
    }
    const data = {
      type: 'DIRECT_DOWNLOAD',
      payload: { locale: locale },
      metadata: { user: 'anonymous' },
    }
    $.ajax({
      url: endpoint,
      type: 'POST',
      data: data,
      success: result => {},
      error: error => {
        console.log(error)
      },
    })
  })
})
