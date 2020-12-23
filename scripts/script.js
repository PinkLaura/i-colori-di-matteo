/* Function to hide the hamburger menu from the desktop and tablet version of the site*/
$(document).ready(function() {

  $(function() {
    $('.navbar-toggler').click(function() {
      $('#ham-icon').toggleClass('d-none');
      $('#ham-closed-icon').toggleClass('d-none');
    });
  });

  $('.cdm-car').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    responsive: [{
      breakpoint: 760,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        dots: true,
        slidesToShow: 1
      }
    }]
  });

  $('.cdm-car-reviews').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    responsive: [{
        breakpoint: 760,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          dots: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '200px',
          dots: true,
          slidesToShow: 1
        }
      }
    ]
  });

  $('#cdm-button-stories').on('click', function() {
    var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    var email = document.getElementById("exampleInputEmail1");

    var regexName = /^[A-Za-z]+$/;
    var name = document.getElementById("exampleInputName1");

    var message = $('#exampleFormControlTextarea1').val();

    var valid = true;

    var errorMessage = "Il tuo messaggio non è stato inviato.\n\nEcco perchè:";

    if (name == null || !regexName.test(name.value)) {
      valid = false;
      errorMessage = errorMessage + "\n- Il campo \"Nome e Cognome\" è vuoto o contiene un numero";
    }

    if (email == null || !regexEmail.test(email.value)) {
      valid = false;
      errorMessage = errorMessage + "\n- Il campo \"Email\" non è valido";
    }

    if (message == null) {
      valid = false;
      errorMessage = errorMessage + "\n- Il campo \"Messaggio\" è vuoto";
    }

    if (!valid) {
      alert(errorMessage);
    } else {
      alert("Il tuo messaggio è stato inviato!");
    }
  });

  // add padding top to show content behind navbar
$('body').css('padding-top', $('.navbar').outerHeight() + 'px')

// detect scroll top or down
if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        }
        else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}

});
