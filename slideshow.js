console.log('it works!')

var currentSlide = 0
var totalSlides = $('.holder div').length

// Move slide funnction
var moveSlide = function (slide) {
  var leftPosition = (-slide * 100) + 'vw'
  $('.holder').css('left', leftPosition)
  // Update slide number
  var slideNumber = slide + 1
  $('.steps').text(slideNumber + ' / ' + totalSlides)
}

// Next slide function
var nextSlide = function() {
  currentSlide = currentSlide + 1

  if (currentSlide >= 4) {
    currentSlide = 0
  }
  moveSlide(currentSlide)
}

// Previous slide function
var prevSlide = function() {
  // We have to minus one so the current slide # matches the index number of the array of slides
  currentSlide = currentSlide - 1

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1
  }
  moveSlide(currentSlide)
}
// Auto scroll function
var autoSlide = setInterval(function() {
  nextSlide()
}, 7000)

// Next button
$('.next').on('click', function() {
  clearInterval(autoSlide)
  nextSlide()
})
// Previous button
$('.prev').on('click', function() {
  clearInterval(autoSlide)
  prevSlide()
})

// Show slide number
var slideNumber = currentSlide + 1
$('.steps').text(slideNumber + ' / ' + totalSlides)

// Scroll using keyboard direction keys
$('body').on('keydown', function (event) {

  var keyCode = event.keyCode

  if (keyCode == 37) {
    clearInterval(autoSlide)
    prevSlide()
  }
  if (keyCode == 39) {
    clearInterval(autoSlide)
    nextSlide()
  }
  console.log(event.keyCode)
})
