"use srict";

setCookie("scroll", "close");

$(document).ready(function(){
    // COVER PAGE SCRIPTS
    $("#begin_box, #mobile_begin").on("click", function(){
      document.querySelector('#login_page').style.display = 'block';
      document.querySelector('#page_cover').style.display = 'none';
    });

    $("#login_pu").submit(function(e){
      e.preventDefault();
      var username = $("#li_username").val();
      var password = $("#li_password").val();
      // Implement checkCookie
      if(checkCookie(username, password)){
        window.location.href= 'index.html';
        $('#login_pu').each(function(){
          this.reset();
        });
      }
      $('#login_pu').each(function(){
        this.reset();
      });
    });

    $("#signup_pu").submit(function(e){
      e.preventDefault();
      var username = $("#su_username").val();
      var email = $("#su_email").val();
      var password = $("#su_password").val();
      var cookie = email + "," + password;
      var available = getCookie(username);
      if(available == ""){
        setCookie(username, cookie);
        setCookie("logged", "true");
        window.location.href= 'index.html';
        $('#signup_pu').each(function(){
          this.reset();
        });
      }else{
        alert("This username already exists");
        $('#submit_signup').each(function(){
          this.reset();
          });
      }

    });

    $("#google_signup, #fb_signup").on("click", function(){
      var username = "Bentley";
      var email = "bgirard@gmail.com";
      var password = "canada";
      var cookie = email + "," + password;
      setCookie(username, cookie);
      setCookie("logged", "true");
      window.location.href= 'index.html';
    });

    $("#li_guest").on("click", function(){
      setCookie("logged", "false");
      window.location.href= 'index.html';
    });

    $("#li_sign_up").on("click", function(){
      document.querySelector('#signup_pu').style.display = 'flex';
      document.querySelector('#login_pu').style.display = 'none';
    });
    // COVER PAGE STYLING ENDS HERE

    // -----------------HOME PAGE script-----------------

    // Search and Filters
    $('.fa-search').click(function(){
        var value = $('#search_input').val().toLowerCase();
        $('#home_images .gallery').filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
        $('.gallery').filter('.'+value).show('100');

    });

    $('#search_input').click(function(){
        $('#filter_section').slideDown("slow");
        $('#filter_section').css("display", "flex");
    });

    $('#search_input').on('input', function(){
        var value = $('#search_input').val().toLowerCase();
        if (value == ""){
            $('#home_images .gallery').show();
            $('#filter_section').slideUp("slow");
        }
    });

    $('#submit_filters').click(function(e){
        e.preventDefault();
        var value = document.getElementById("search_input").value
        var budget = document.getElementById("price_bar").value
        var place = document.getElementById("place").value
        var preferences = document.getElementById("preferences").value
        // if (value != ""){
        if (place != ""){
            if (preferences != "default"){
                $("#home_images .gallery").filter(function(){
                    $(this).toggle($(this).text().toLowerCase().indexOf(place) > -1 && $(this).text().toLowerCase().indexOf(preferences) > -1);
                    if (parseInt($(this).attr("value")) > budget){
                        $(this).hide();
                    }
                });
            }else{
                $("#home_images .gallery").filter(function(){
                    $(this).toggle($(this).text().toLowerCase().indexOf(place) > -1);
                    if (parseInt($(this).attr("value")) > budget){
                        $(this).hide();
                    }
                });
            }
        }else if (preferences != "default"){
                $("#home_images .gallery").filter(function(){
                    $(this).toggle($(this).text().toLowerCase().indexOf(preferences) > -1);
                    if (parseInt($(this).attr("value")) > budget){
                        $(this).hide();
                    }
                });
        }else{
          $(".gallery").each(function(index, element){
              if (parseInt($(this).attr("value")) > budget){
                  $(this).hide();
              }else{
                  $(this).show();
              }
          });
        }
     });

     $('#delete_btn').on("click", function(){
        $('#home_images .gallery').show();
     });

     $('#filters_arrow').on("click", function(){
        $('#filter_section').slideUp("slow");
     });

        // $('.gallery').filter($('.gallery').text().toLowerCase().indexOF(place) > -1).show('100');
        // for (let step = 0; step <= budget ; step++) {
        //
        // }

    // Likes of the main page
    $('#like1').click(function(){
      if(checkLogged()){
        $('#like1').css("display", "none");
        $('#filled_like1').css("display", "inline-flex");
      }else{
        alert("Please log in or sign up to like");
      }

    });
    $('#filled_like1').click(function(){
        $('#like1').css("display", "inline-flex");
        $('#filled_like1').css("display", "none");
    });
    $('#like2').click(function(){
      if(checkLogged()){
        $('#like2').css("display", "none");
        $('#filled_like2').css("display", "inline-flex");
      }else{
        alert("Please log in or sign up to like");
      }

    });

    $('#filled_like2').click(function(){
        $('#like2').css("display", "inline-flex");
        $('#filled_like2').css("display", "none");
    });
    $('#like3').click(function(){
      if(checkLogged()){
        $('#like3').css("display", "none");
        $('#filled_like3').css("display", "inline-flex");
      }else{
        alert("Please log in or sign up to like");
      }

    });

    $('#filled_like3').click(function(){
        $('#like3').css("display", "inline-flex");
        $('#filled_like3').css("display", "none");
    });
    $('#like4').click(function(){
      if(checkLogged()){
        $('#like4').css("display", "none");
        $('#filled_like4').css("display", "inline-flex");
      }else{
        alert("Please log in or sign up to like");
      }

    });
    $('#filled_like4').click(function(){
        $('#like4').css("display", "inline-flex");
        $('#filled_like4').css("display", "none");
    });
    $('#like5').click(function(){
      if(checkLogged()){
        $('#like5').css("display", "none");
        $('#filled_like5').css("display", "inline-flex");
      }else{
        alert("Please log in or sign up to like");
      }
    });

    $('#filled_like5').click(function(){
        $('#like5').css("display", "inline-flex");
        $('#filled_like5').css("display", "none");
    });

    $('#like6').click(function(){
      if(checkLogged()){
        $('#like6').css("display", "none");
        $('#filled_like6').css("display", "inline-flex");
      }else{
        alert("Please log in or sign up to like");
      }
    });

    $('#filled_like6').click(function(){
        $('#like6').css("display", "inline-flex");
        $('#filled_like6').css("display", "none");
    });

    if (getCookie("scroll") == "close"){
      $(".fa-ellipsis-v").click(function(e){
          e.preventDefault();
          $("#side_menu").animate({width:'toggle'},350);
          $("body").css("overflow-y", "hidden");
          setCookie("scroll", "open");
      });
    }else{
        $(".fa-ellipsis-v").click(function(e){
            e.preventDefault();
            $("body").css("overflow-y", "scroll");
            setCookie("scroll", "close");
        });
    }
});


/*This function sets a cookie with an expiration date*/
function setCookie(name, value){
  document.cookie = name + "=" + value + ";expires=Thu, 25 Dec 2050 12:00:00 UTC";
}

/*This function is used to return a cookie given the name of the cookie exists*/
function getCookie(cname){

  let name = cname + "="; //this name var will allow us to get the value of our cookie
  console.log("Cookie name is: " + name);
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookie_array = decodedCookie.split(';'); //split the values in  document.cookie and store them in an array
  for(let i = 0; i <cookie_array.length; i++) {
    let cookie = cookie_array[i]; //store cookie to be checked
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1); //substring our cookie in case of whitespaces at the beggining
    }
    if (cookie.indexOf(name) == 0) { //condition that checks if we have found our cookie
      return cookie.substring(name.length, cookie.length); //return the value of our cookie
    }
  }
  return ""; //if our cookie was not found return an empty string
}

function checkCookie(username, password){
  cookie = getCookie(username);
  if(cookie != ""){
    user_info = cookie.split(",");
    cookie_password = user_info[1];
    if(cookie_password == password){
      alert("User and Password are correct");
      return true;
    }else{
      alert("Incorrect Password");
      return false;
    }
  }else{
    alert("User does not exist");
    return false;
  }
}

function checkLogged(){
  var logged = getCookie("logged");
  if (logged == "true"){
    return true;
  }else{
    return false;
  }
}
