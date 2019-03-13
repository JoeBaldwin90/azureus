$(document).on('scroll', function () {
  var pageTop = $(document).scrollTop()

  if (pageTop > 40) {
    $('h1, nav').fadeOut(200)
  } else {
    $('h1, nav').fadeIn(200)
  }
})
