/* Function to hide the hamburger menu from the desktop and tablet version of the site*/
$(document).ready(function() {

    $(function() {
        $('.navbar-toggler').click(function() {
            $('#ham-icon').toggleClass('d-none');
            $('#ham-closed-icon').toggleClass('d-none');
        });
    });

    $('.box-container').height(function(){
        return $(this).width();
    });

});