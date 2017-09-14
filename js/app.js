$(document).ready(function() {
  var timer;
  var windowHeight = $(window).height();
  var triggerHeight = windowHeight;
  var images = $('.slide');
  var index = 0;

  images[index].classList.add('visible');

  $(window).scroll(function() {

    window.clearTimeout(timer);
    timer = window.setTimeout(function() {
      var y = $(window).scrollTop() + windowHeight;

      if (y > triggerHeight) {
        images[index].classList.add('slide');
        images[index].classList.remove('visible');
        index++;
        if (index > images.length - 1) {
          index = 0;
        }
        images[index].classList.add('visible')
        images[index].classList.remove('slide');
      }
    }, 300);
  });


});
