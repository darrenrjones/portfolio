'use strict';

$(document).ready(function() {

  window.onscroll = function() {myFunction();};

  var header = document.getElementById('myHeader');
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset >= sticky) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  }

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') 
        || location.hostname === this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 750);
        return false;
      }
    }
  });

});
