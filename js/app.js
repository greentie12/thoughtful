$(document).ready(function() {

    $('.form').submit(function(event) {

        event.preventDefault();

        var thoughts = $('#thoughts').val();

        if (thoughts !== "") {

            $('.thread').prepend("<li>" + thoughts + "</li>");
            $('#thoughts').val("");
            $('li:nth-child(11)').html("");

        }

        return false;
    });

});
