console.log('it works')

$(document).on('scroll', function() {

  var scroll = $(document).scrollTop()
// Fade out title
 if (scroll > 150) {
    $('h2').fadeOut(300)
  } else {
    $('h2').fadeIn(300)
  }
//  desaturate main portrait
  if (scroll > 500) {
    $('.boy').addClass('fadeout')
  } else {
    $('.boy').removeClass('fadeout')
  }
  console.log(scroll)
})

// fade in sections
$(document).on('scroll', function() {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height() - 150
  var tags = $('section')

  for (var i = 0; i < tags.length; i++) {
    var tag = $(tags[i])

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass('saturate')
    } else {
      $(tag).removeClass('saturate')
    }
  }
})
