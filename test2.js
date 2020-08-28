$(document).ready(() => {

    $(window).keydown(function (e) { 
       if (e.keyCode === 13) {
           alert('test is over! ' + e.key + ' was pressed.');
           location.reload();
       }
       else {
        $('body').append('<p> this key was pressed: ' + e.key + '</p>');
       }
    });

});