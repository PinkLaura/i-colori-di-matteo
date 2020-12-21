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
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                dots: true,
                slidesToShow: 1
            }
        }]
    });

});