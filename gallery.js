// Show different products
$('.filters a').on('click', function() {
  var filter = $(this).attr('data-filter')
  console.log(filter)

  $('.product').hide()
  $(filter).show()
  $('.filters a').removeClass('selected')
  $(this).addClass('selected')

  event.preventDefault()
})

// Hide and show filters
$('.hideshow').on('click', function() {
  if ($('.filters').is(':visible')) {
    $('.filters').slideUp(200)
    $('.hideshow').text('Show filters')
  } else {
    $('.filters').slideDown(200)
    $('.hideshow').text('Hide filters')
  }
  event.preventDefault()
})

// Fade in hero section on scroll
$(document).on('scroll', function() {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height() - 50
  var tags = $('.hero')

  for (var i = 0; i < tags.length; i++) {
    var tag = $(tags[i])

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass('pop')
    } else {
      $(tag).removeClass('pop')
    }
  }
})
