// Sticky header

$(window).scroll(function () {
  if ($(window).scrollTop() >= 114.5) {
    $('.h-top-fixed').addClass('sticky-header');
  }
  else {
    $('.h-top-fixed').removeClass('sticky-header');
  }
});
