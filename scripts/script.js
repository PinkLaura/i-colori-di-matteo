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

        var message = $('textarea:input[name=message]').val();

        var valid = true;

        var errorMessage = "Il tuo messaggio non è stato inviato.\n\nEcco perchè:";

        if (name == null || !regexName.test(name.value)) {
            valid = false;
            errorMessage = errorMessage + "\n- Il campo \"Nome e Cognome\" è vuoto o contiene un numero";
        }

        if (email == null || !regexName.test(name.value)) {
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
            alert("Il tuo messaggio è stato inviato!")
        }
    });



});