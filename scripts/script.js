/* Function to hide the hamburger menu from the desktop and tablet version of the site*/
$(document).ready(function() {

  //function that controls the menu icons on mobile
  $(function() {
    $('.navbar-toggler').click(function() {
      // on mobile when you click the hamburger menu, the hamburger icon disappears and the X icon appears
      $('#ham-icon').toggleClass('d-none');
      // on mobile when you click the X icon, the X icon disappears and the hamburger icon appears
      $('#ham-closed-icon').toggleClass('d-none');
    });
  });

  //function to control I NOSTRI PROGETTI carousel
  $('.cdm-car').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        dots: true,
        slidesToShow: 1
      }
    }]
  });

  //function to control TESTIMONIANZE carousel
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
        breakpoint: 992,
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

  //fuction to control the form inputs
  function validationInput(name, email, message) {
    const regexName = /^[A-Za-z\s]+$/; //regex to control that there are no number in name and surname
    const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/; //regex to control the email format
    var valid = true;
    var errorMessage = "Il tuo messaggio non è stato inviato.\n\nEcco perchè:"; //error message

    //the name is not valid if it is empty or it contains numbers
    if (name == null || !regexName.test(name.value)) {
      valid = false;
      errorMessage = errorMessage + "\n- Il campo \"Nome e Cognome\" è vuoto o contiene un numero";
    }

    //email is not valid if it is empty or it doesn't have the correct format
    if (email == null || !regexEmail.test(email.value)) {
      valid = false;
      errorMessage = errorMessage + "\n- Il campo \"Email\" non è valido";
    }

    //message is not valid if it is empty
    if (message.value.length < 1) {
      valid = false;
      errorMessage = errorMessage + "\n- Il campo \"Messaggio\" è vuoto";
    }

    if (!valid) {
      alert(errorMessage); //the error message appears only if at least one input is incorrect
    } else {
      alert("Il tuo messaggio è stato inviato!"); //otherwise the message is sent correctly
    }
  }

  // Alert for CONTATTACI form
  $('#cdm-button-form-contattaci').on('click', function() {
    let nameContattaci = document.getElementById("inputNameContattaci");
    let emailContattaci = document.getElementById("inputEmailContattaci");
    let messageContattaci = document.getElementById("textMessageContattaci");

    return validationInput(nameContattaci, emailContattaci, messageContattaci);
  });

  // Alert for CHI SIAMO form
  $('#cdm-button-form-chi-siamo').on('click', function() {
    let nameChiSiamo = document.getElementById("inputNameChiSiamo");
    let emailChiSiamo = document.getElementById("inputEmailChiSiamo");
    let messageChiSiamo = document.getElementById("textMessageChiSiamo");

    return validationInput(nameChiSiamo, emailChiSiamo, messageChiSiamo);
  });


// function to hide the first part of the header only on desktop and tablet
  $(function () {

    var windowSizeWide = $(window).width(); //the window width is assigned to the windowSizeWide variable
    if (windowSizeWide > 768) {
      // add padding top to show content behind navbar
      $('body').css('padding-top', $('.navbar').outerHeight() + 'px')
    }

  });

// function to hide the first part of the header only on desktop and tablet everytime the window is resized
  $(window).on('resize', function(event) {

    var windowSizeWide = $(window).width(); //the window width is assigned to the windowSizeWide variable

    if (windowSizeWide > 768) {
      // add padding top to show content behind navbar
      $('body').css('padding-top', $('.navbar').outerHeight() + 'px')

    }
    else{
      //set the padding top to 0
      $('body').css('padding-top', 0 + 'px')
    }

  });


// function to detect scroll top or down
if ($('.smart-scroll').length > 0) { // check if element exists
  var last_scroll_top = 0; //the last scroll top is set to 0
  $(window).on('scroll', function() {
    scroll_top = $(this).scrollTop();
    if (scroll_top < last_scroll_top) {
      $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
    } else {
      $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
    }
    last_scroll_top = scroll_top;
  });
}

});
