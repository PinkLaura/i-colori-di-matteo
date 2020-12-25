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

    //form input controls
    function validationInput (name, email, message){
        const regexName = /^[A-Za-z]+$/; //string control with letters only
        const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/; //check that it's an e-mail
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

        if (message.value.length<1) {
            valid = false;
            errorMessage = errorMessage + "\n- Il campo \"Messaggio\" è vuoto";
        }

        if (!valid) {
            alert(errorMessage);
        } else {
            alert("Il tuo messaggio è stato inviato!");
        }
    }

    // Alert of the page Contattaci
    $('#cdm-button-form-contattaci').on('click', function() {
        let nameContattaci = document.getElementById("inputNameContattaci");
        let emailContattaci = document.getElementById("inputEmailContattaci");
        let messageContattaci = document.getElementById("textMessageContattaci");

        return validationInput(nameContattaci, emailContattaci,messageContattaci);
    });

    // Alert of the page Chi siamo
    $('#cdm-button-form-chi-siamo').on('click', function() {
        let nameChiSiamo = document.getElementById("inputNameChiSiamo");
        let emailChiSiamo = document.getElementById("inputEmailChiSiamo");
        let messageChiSiamo = document.getElementById("textMessageChiSiamo");

        return validationInput(nameChiSiamo, emailChiSiamo,messageChiSiamo);
    });

    // add padding top to show content behind navbar
    $('body').css('padding-top', $('.navbar').outerHeight() + 'px')

    // detect scroll top or down
    if ($('.smart-scroll').length > 0) { // check if element exists
        var last_scroll_top = 0;
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