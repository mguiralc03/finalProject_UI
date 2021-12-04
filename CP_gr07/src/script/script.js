"use srict";

$(document).ready(function(){
    // -----------------HOME PAGE script-----------------

    // Search and Filters
    $('.fa-search').click(function(){
        var value = $('#search_input').val().toLowerCase();
        $('#filter_section').css("display", "flex");
        $('#home_images .gallery').filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });

    });
    $('#search_input').on('input', function(){
        var value = $('#search_input').val().toLowerCase();
        if (value == ""){
            $('#home_images .gallery').show();
        }
    });
    $('#submit_btn').click(function(){
        var budget = document.getElementById("price_bar").value
        var place = document.getElementById("place").value
        var preferences = document.getElementById("preferences").value
        // if (budget == 0){
        //     ;
        // }
        for ()
        $('.gallery').not('.'+'.'+budget).hide('100');
        $('.gallery').filter('.'+ '.'+budget).show('100');
    });

    // Likes of the main page
    $('#like1').click(function(){
        $('#like1').css("display", "none");
        $('#filled_like1').css("display", "inline-flex");
    });
    $('#filled_like1').click(function(){
        $('#like1').css("display", "inline-flex");
        $('#filled_like1').css("display", "none");
    });
    $('#like2').click(function(){
        $('#like2').css("display", "none");
        $('#filled_like2').css("display", "inline-flex");
    });
    $('#filled_like2').click(function(){
        $('#like2').css("display", "inline-flex");
        $('#filled_like2').css("display", "none");
    });
    $('#like3').click(function(){
        $('#like3').css("display", "none");
        $('#filled_like3').css("display", "inline-flex");
    });
    $('#filled_like3').click(function(){
        $('#like3').css("display", "inline-flex");
        $('#filled_like3').css("display", "none");
    });
    $('#like4').click(function(){
        $('#like4').css("display", "none");
        $('#filled_like4').css("display", "inline-flex");
    });
    $('#filled_like4').click(function(){
        $('#like4').css("display", "inline-flex");
        $('#filled_like4').css("display", "none");
    });
    $('#like5').click(function(){
        $('#like5').css("display", "none");
        $('#filled_like5').css("display", "inline-flex");
    });
    $('#filled_like5').click(function(){
        $('#like5').css("display", "inline-flex");
        $('#filled_like5').css("display", "none");
    });
    $('#like6').click(function(){
        $('#like6').css("display", "none");
        $('#filled_like6').css("display", "inline-flex");
    });
    $('#filled_like6').click(function(){
        $('#like6').css("display", "inline-flex");
        $('#filled_like6').css("display", "none");
    });
});
