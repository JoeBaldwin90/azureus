console.log('it works')

$(document).on('scroll', function() {

  var scroll = $(document).scrollTop()
 // Fade out "Azureus" header on scroll
 if (scroll > 150) {
    $('h2').fadeOut(300)
  } else {
    $('h2').fadeIn(300)
  }
//  desaturate main portrait
  if (scroll > 500) {
    $('.boy').addClass('desaturate')
  } else {
    $('.boy').removeClass('desaturate')
  }
  console.log(scroll)
})

// use a for loop to check if the sections are within the viewport area, less 150px buffer
// if they are, saturate the image by adding a class. remove it if not. 
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
