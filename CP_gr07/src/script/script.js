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
        setCookie("logged", "true");
        window.location.href= 'index.html';
        var myArray = getCookie(username);
        myArray = myArray.split(",");
        email = myArray[0];
        setCookie( email, "");
        setCookie("userlogged", username + "," + email);
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
      var cookie = email + "," + password + "icon-user-default.png" +"coverMountain.jpeg";
      var available = getCookie(username);
      if(available == ""){
          setCookie(username, cookie);
          setCookie("logged", "true");
          setCookie( email, "");
          setCookie("userlogged", username + "," + email);
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

    $("#mp_login_pu").submit(function(e){
      e.preventDefault();
      var username = $("#li_username").val();
      var password = $("#li_password").val();
      // Implement checkCookie
      if(checkCookie(username, password)){
        setCookie("logged", "true");
        setCookie( email, "");
        var myArray = getCookie(username);
        myArray = myArray.split(",");
        email = myArray[0];
        setCookie("userlogged", username + "," + email);
        $('#mp_form_container').css("display", "none");
        $('#overlay').fadeOut();
        $("body").css("overflow-y", "scroll");
        setCookie("scroll", "close");
        $('#login_pu').each(function(){
          this.reset();
        });
      }
      $('#login_pu').each(function(){
        this.reset();
      });
    });

    $("#mp_signup_pu").submit(function(e){
      e.preventDefault();
      var username = $("#su_username").val();
      var email = $("#su_email").val();
      var password = $("#su_password").val();
      var cookie = email + "," + password;
      var available = getCookie(username);
      if(available == ""){
          setCookie(username, cookie);
          setCookie("logged", "true");
          setCookie("userlogged", username + "," + email);
          $('#mp_form_container').css("display", "none");
          $("#overlay").fadeOut();
          $("body").css("overflow-y", "scroll");
          setCookie("scroll", "close");
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

    $("#google_signup, #fb_signup").on("click", function(e){
        e.preventDefault();
        var username = "Bentley";
        var email = "bgirard@gmail.com";
        var password = "canada";
        var pic = "BentleyGirard.png"
        var banner = "coverMountain.jpeg"
        var cookie = email + "," + password + "," + pic + "," + banner;
        setCookie(username, cookie);
        setCookie("logged", "true");
        setCookie("userlogged", username + "," + email);
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
        if (getCookie("scroll") == "open"){
            $("#side_menu").animate({width:'toggle'},350);
            setCookie("scroll", "close");
            $("body").css("overflow-y", "scroll")
        }
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

    $('#like7').click(function(){
      if(checkLogged()){
        $('#like7').css("display", "none");
        $('#filled_like7').css("display", "inline-flex");
      }else{
        alert("Please log in or sign up to like");
      }
    });

    $('#filled_like7').click(function(){
        $('#like7').css("display", "inline-flex");
        $('#filled_like7').css("display", "none");
    });

    $('#like8').click(function(){
      if(checkLogged()){
        $('#like8').css("display", "none");
        $('#filled_like8').css("display", "inline-flex");
      }else{
        alert("Please log in or sign up to like");
      }
    });

    $('#filled_like8').click(function(){
        $('#like8').css("display", "inline-flex");
        $('#filled_like8').css("display", "none");
    });

    $('#like9').click(function(){
      if(checkLogged()){
        $('#like9').css("display", "none");
        $('#filled_like9').css("display", "inline-flex");
      }else{
        alert("Please log in or sign up to like");
      }
    });

    $('#filled_like9').click(function(){
        $('#like9').css("display", "inline-flex");
        $('#filled_like9').css("display", "none");
    });

    $('#like10').click(function(){
      if(checkLogged()){
        $('#like10').css("display", "none");
        $('#filled_like10').css("display", "inline-flex");
      }else{
        alert("Please log in or sign up to like");
      }
    });

    $('#filled_like10').click(function(){
        $('#like10').css("display", "inline-flex");
        $('#filled_like10').css("display", "none");
    });

    $(".fa-ellipsis-v").click(function(){
        if (getCookie("scroll") == "close"){
            if (checkLogged()){
                  $("#myprofile").css("display", "block");
                  $("#myprofile_dot").css("display", "block");

                  $("#mycollections").css("display", "block");
                  $("#mycollections_dot").css("display", "block");

                  $("#addexperience").css("display", "block");
                  $("#addexperience_dot").css("display", "block");

                  $("#dmessages").css("display", "block");
                  $("#dmessages_dot").css("display", "block");

                  $("#logout").css("display", "inline-flex");

                  $("#su_option").css("display", "none");
                  $("#su_dot").css("display", "none");

                  $("#li_option").css("display", "none");


                  var logged_cookie = getCookie("userlogged");
                  var myArray = logged_cookie.split(',');
                  var user_info = getCookie(myArray[0]);
                  user_info = user_info.split(',');
                  document.getElementById("name").innerText = myArray[0];
                  $("#email").css("display", "flex");
                  document.getElementById("email").innerText = myArray[1];
                  $('#profile_img img').attr("src", "./images/" + user_info[2]);
            }

            $("#side_menu").animate({width:'toggle'},350);
            $("body").css("overflow-y", "hidden");
            setCookie("scroll", "open");
            $('#filter_section').slideUp("slow");
        }else{
            $("#side_menu").animate({width:'toggle'},350);
            $("body").css("overflow-y", "scroll");
            setCookie("scroll", "close");
        }
    });

    $("#myprofile").click(function(e){
        e.preventDefault();
        window.location.href = 'profile.html';
    });

    $('#mycollections').click(function(e){
      e.preventDefault();
      window.location.href= 'collections.html';
    });
// SIGNUP AND LOGIN POPUPS WITHIN MAIN PAGE
    $("#su_option").click(function(e){
        e.preventDefault();
        $("#overlay").fadeIn();
        $("#side_menu").animate({width:'toggle'},350);
        $("#mp_form_container").css("display", "flex");
        $("#mp_signup_pu").css("display", "flex");
    });

    $("#li_option").click(function(e){
        e.preventDefault();
        $("#overlay").fadeIn();
        $("#side_menu").animate({width:'toggle'},350);
        $("#mp_form_container").css("display", "flex");
        $("#mp_login_pu").css("display", "flex");
        $(".li_or").css("display", "none");
        $("#li_sign_up").css("display", "none");
        $("#li_guest").css("display", "none");
    });

    $(".close_btn").click(function(e){
        e.preventDefault();
        $("body").css("overflow-y", "scroll");
        setCookie("scroll", "close");
        $("#overlay").fadeOut();
        $("#mp_form_container").fadeOut();
        $("#mp_signup_pu").fadeOut();
        $("#mp_login_pu").fadeOut();
        $("#edit_profile").fadeOut();
        $("#add_collection_form").fadeOut();
        $(".add_experience_form").fadeOut();
        $("#profile_form_container").fadeOut();
    });

    $('#lo_option').click(function(){
      setCookie("logged", "false");
    });

//Add experience POPUP in  myprofile PAGE
    $('#add_experience').click(function(e){
      e.preventDefault();
      $("#overlay").fadeIn();
      $("#profile_form_container").css("display", "flex");
      $(".add_experience_form").css("display", "flex");
      $("body").css("overflow-y", "hidden");
      if (getCookie("scroll") == "open"){
        $("#side_menu").animate({width:'toggle'},350);
        setCookie("scroll", "close");
      }
    });

    $('#add_experience_tablet').click(function(e){
      e.preventDefault();
      $("#overlay").fadeIn();
      $("#profile_form_container").css("display", "flex");
      $(".add_experience_form").css("display", "flex");
      $("body").css("overflow-y", "hidden");
      if (getCookie("scroll") == "open"){
        $("#side_menu").animate({width:'toggle'},350);
        setCookie("scroll", "close");
      }
    });

    $('#addexperience').click(function(e){
      e.preventDefault();
      $("#overlay").fadeIn();
      $("#profile_form_container").css("display", "flex");
      $(".add_experience_form").css("display", "flex");
      $("body").css("overflow-y", "hidden");
      if (getCookie("scroll") == "open"){
        $("#side_menu").animate({width:'toggle'},350);
        setCookie("scroll", "close");
      }
    });


    $("#addexp_form").submit(function(e){
      e.preventDefault();
      var user_info = getCookie("userlogged");
      user_info = user_info.split(",");
      var exp_title = $("#exp_input_title").val();
      var cname = user_info[0] + exp_title;
      var exp_photo = document.getElementById("new_exp_photo").files[0].name;
      var exp_place = $("#exp_input_place").val();
      var exp_budget = $("#exp_input_budget").val();
      var exp_tags = $("#exp_input_tags").val();
      var exp_collaborator = $("#exp_input_collaborator").val();
      var exp_desc = $("#exp_input_description").val();
      var cvalue = exp_title + "," + exp_photo + "," + exp_place + "," + exp_budget + ","
      + exp_tags + "," + exp_collaborator + "," + exp_desc;
      setCookie(cname, cvalue);

      var myDiv = document.createElement("div");
      myDiv.classList.add("gallery");
      var myImage = document.createElement("img");
      myImage.src = "./images/" + exp_photo;
      myImage.classList.add("publication_image");
      myDiv.appendChild(myImage);
      document.getElementById("publications_container").prepend(myDiv);
      $("#addexp_form").each(function(){
        this.reset();
      });
      $("#overlay").fadeOut();
      $("#profile_form_container").fadeOut();
      $("body").css("overflow-y", "scroll");
    });

//Experiences poup in profile page
    $("#publication_image").click(function(e){
      e.preventDefault();
      $("#profile_form_container").css("display", "flex");
      $("#experience_data").css("display", "flex");
      $("#overlay").fadeIn();
      $("body").css("overflow-y", "hidden");
    });

// Experiences POPUPS in Main Page
    $('#cliff_image').click(function(e){
      e.preventDefault();
      $('#filter_section').slideUp("slow");
      $('#mp_form_container').css("display", "flex");
      $("#cliff").css("display", "flex");
      $("#overlay").fadeIn();
      $("body").css("overflow-y", "hidden");
      if (getCookie("scroll") == "open"){
        $("#side_menu").animate({width:'toggle'},350);
        setCookie("scroll", "close");
      }
    });

    $('#forest_image').click(function(e){
      e.preventDefault();
      $('#filter_section').slideUp("slow");
      $('#mp_form_container').css("display", "flex");
      $("#autum").css("display", "flex");
      $("#overlay").fadeIn();
      $("body").css("overflow-y", "hidden");
      if (getCookie("scroll") == "open"){
        $("#side_menu").animate({width:'toggle'},350);
        setCookie("scroll", "close");
      }
    });

    $('#lavander_image').click(function(e){
      e.preventDefault();
      $('#filter_section').slideUp("slow");
      $('#mp_form_container').css("display", "flex");
      $("#lavander").css("display", "flex");
      $("#overlay").fadeIn();
      $("body").css("overflow-y", "hidden");
      if (getCookie("scroll") == "open"){
        $("#side_menu").animate({width:'toggle'},350);
        setCookie("scroll", "close");
      }
    });

    $('#windmill_image').click(function(e){
      e.preventDefault();
      $('#filter_section').slideUp("slow");
      $('#mp_form_container').css("display", "flex");
      $("#windmill").css("display", "flex");
      $("#overlay").fadeIn();
      $("body").css("overflow-y", "hidden");
      if (getCookie("scroll") == "open"){
        $("#side_menu").animate({width:'toggle'},350);
        setCookie("scroll", "close");
      }
    });

    $('#mountain_image').click(function(e){
      e.preventDefault();
      $('#filter_section').slideUp("slow");
      $('#mp_form_container').css("display", "flex");
      $("#mountain").css("display", "flex");
      $("#overlay").fadeIn();
      $("body").css("overflow-y", "hidden");
      if (getCookie("scroll") == "open"){
        $("#side_menu").animate({width:'toggle'},350);
        setCookie("scroll", "close");
      }
    });

    $('#village_image').click(function(e){
      e.preventDefault();
      $('#filter_section').slideUp("slow");
      $('#mp_form_container').css("display", "flex");
      $("#village").css("display", "flex");
      $("#overlay").fadeIn();
      $("body").css("overflow-y", "hidden");
      if (getCookie("scroll") == "open"){
        $("#side_menu").animate({width:'toggle'},350);
        setCookie("scroll", "close");
      }
    });

    $('#waterfall_image').click(function(e){
      e.preventDefault();
      $('#filter_section').slideUp("slow");
      $('#mp_form_container').css("display", "flex");
      $("#waterfall").css("display", "flex");
      $("#overlay").fadeIn();
      $("body").css("overflow-y", "hidden");
      if (getCookie("scroll") == "open"){
        $("#side_menu").animate({width:'toggle'},350);
        setCookie("scroll", "close");
      }
    });

    $('#sea_image').click(function(e){
      e.preventDefault();
      $('#filter_section').slideUp("slow");
      $('#mp_form_container').css("display", "flex");
      $("#sea").css("display", "flex");
      $("#overlay").fadeIn();
      $("body").css("overflow-y", "hidden");
      if (getCookie("scroll") == "open"){
        $("#side_menu").animate({width:'toggle'},350);
        setCookie("scroll", "close");
      }
    });

    $('#camells_image').click(function(e){
      e.preventDefault();
      $('#filter_section').slideUp("slow");
      $('#mp_form_container').css("display", "flex");
      $("#cammels").css("display", "flex");
      $("#overlay").fadeIn();
      $("body").css("overflow-y", "hidden");
      if (getCookie("scroll") == "open"){
        $("#side_menu").animate({width:'toggle'},350);
        setCookie("scroll", "close");
      }
    });

    $('#beach_image').click(function(e){
      e.preventDefault();
      $('#filter_section').slideUp("slow");
      $('#mp_form_container').css("display", "flex");
      $("#beach").css("display", "flex");
      $("#overlay").fadeIn();
      $("body").css("overflow-y", "hidden");
      if (getCookie("scroll") == "open"){
        $("#side_menu").animate({width:'toggle'},350);
        setCookie("scroll", "close");
      }
    });

    $('#exp_close').click(function(e){
      e.preventDefault();
      $("#overlay").fadeOut();
      $('#mp_form_container').css("display", "none");
      $("#cliff").css("display","none");
      $("#forest").css("display", "none");
      $("body").css("overflow-y", "scroll");
    });

    $('#like_exp1').click(function(){
      if(checkLogged()){
        $('#like_exp1').css("display", "none");
        $('#filled_like_exp1').css("display","block");
      }
      else{
        alert("Please log in or sign up to like");
      }

    });

    $('#filled_like_exp1').click(function(){
      $('#filled_like_exp1').css("display", "none");
      $('#like_exp1').css("display","block");
    });

    $('#bookmark_exp1').click(function(){
      if(checkLogged()){
        $('#bookmark_exp1').css("display", "none");
        $('#filled_bookmark_exp1').css("display","block");
      }else{
        alert("Please log in or sign up to like");
      }
    });

    $('#filled_bookmark_exp1').click(function(){
      $('#filled_bookmark_exp1').css("display", "none");
      $('#bookmark_exp1').css("display","block");
    });


    // ----- RANKINGS STYLE -----
    $('#link_Home, #home_icon').click(function(e){
        e.preventDefault();
        window.location.href = 'index.html';
    });

    $('#link_Rankings, #icon_rankings').click(function(e){
      e.preventDefault();
      window.location.href= 'rankings.html';
    });

    $('#all_time_option').click(function(){
      $('#all_time_container').css("display", "flex");
      $('#monthly_container').css("display", "none");
      $('#weekly_container').css("display", "none");
      $('#all_time_option').css("color", "#80673B");
      $('#monthly_option').css("color", "#000000");
      $('#weekly_option').css("color", "#000000");
    });

    $('#monthly_option').click(function(){
      $('#monthly_container').css("display", "flex");
      $('#all_time_container').css("display", "none");
      $('#weekly_container').css("display", "none");
      $('#monthly_option').css("color", "#80673B");
      $('#all_time_option').css("color", "#000000");
      $('#weekly_option').css("color", "#000000");
    });

    $('#weekly_option').click(function(){
      $('#weekly_container').css("display", "flex");
      $('#all_time_container').css("display", "none");
      $('#monthly_container').css("display", "none");
      $('#weekly_option').css("color", "#80673B");
      $('#monthly_option').css("color", "#000000");
      $('#all_time_option').css("color", "#000000");
    });

    /*Rankings follwing buttons -> Change depending on whether you're
    following that user or not (all buttons corresponding to that user must change)*/
    $('.follow_btn_u1').click(function(){
      if(checkLogged()){
        var follow = document.querySelector('.follow_btn_u1').innerText;
        if(follow == "Follow"){
          document.querySelector('.follow_btn_u1').innerText = "Following";
          $('.follow_btn_u1').css("color", "white");
          $('.follow_btn_u1').css("background", "rgb(153, 136, 121)");
        }
        else{
          document.querySelector('.follow_btn_u1').innerText = "Follow";
          $('.follow_btn_u1').css("color", "rgb(153, 136, 121)");
          $('.follow_btn_u1').css("background", "white");
        }
    }else{
      alert("Please log in or sign up to follow users");
    }

    });

    $('.follow_btn_u3').click(function(){
      if(checkLogged()){
        var follow = document.querySelector('.follow_btn_u3').innerText;
        if(follow == "Follow"){
          document.querySelector('.follow_btn_u3').innerText = "Following";
          $('.follow_btn_u3').css("color", "white");
          $('.follow_btn_u3').css("background", "rgb(153, 136, 121)");
        }
        else{
          document.querySelector('.follow_btn_u3').innerText = "Follow";
          $('.follow_btn_u3').css("color", "rgb(153, 136, 121)");
          $('.follow_btn_u3').css("background", "white");
        }
    }else{
      alert("Please log in or sign up to follow users");
    }

    });

    $('.follow_btn_u5').click(function(){
      if(checkLogged()){
        var follow = document.querySelector('.follow_btn_u5').innerText;
        var x = document.getElementsByClassName('follow_btn_u5');
        if(follow == "Follow"){
          for(var i = 0; i < x.length; i++){
            x[i].innerText = "Following"
          }
          document.querySelector('.follow_btn_u5').innerText = "Following";
          $('.follow_btn_u5').css("color", "white");
          $('.follow_btn_u5').css("background", "rgb(153, 136, 121)");
        }
        else{
          for(var i = 0; i < x.length; i++){
            x[i].innerText = "Follow"
          }
          document.querySelector('.follow_btn_u5').innerText = "Follow";
          $('.follow_btn_u5').css("color", "rgb(153, 136, 121)");
          $('.follow_btn_u5').css("background", "white");
        }
    }else{
      alert("Please log in or sign up to follow users");
    }

    });

    $('.follow_btn_u6').click(function(){
      if(checkLogged()){
        var follow = document.querySelector('.follow_btn_u6').innerText;
        var x = document.getElementsByClassName('follow_btn_u6');
        if(follow == "Follow"){
          for(var i = 0; i < x.length; i++){
            x[i].innerText = "Following"
          }
          document.querySelector('.follow_btn_u6').innerText = "Following";
          $('.follow_btn_u6').css("color", "white");
          $('.follow_btn_u6').css("background", "rgb(153, 136, 121)");
        }
        else{
          for(var i = 0; i < x.length; i++){
            x[i].innerText = "Follow"
          }
          document.querySelector('.follow_btn_u6').innerText = "Follow";
          $('.follow_btn_u6').css("color", "rgb(153, 136, 121)");
          $('.follow_btn_u6').css("background", "white");
        }
    }else{
      alert("Please log in or sign up to follow users");
    }

    });

    $('.follow_btn_u7').click(function(){
      if(checkLogged()){
        var follow = document.querySelector('.follow_btn_u7').innerText;
        var x = document.getElementsByClassName('follow_btn_u7');
        if(follow == "Follow"){
          for(var i = 0; i < x.length; i++){
            x[i].innerText = "Following"
          }
          document.querySelector('.follow_btn_u7').innerText = "Following";
          $('.follow_btn_u7').css("color", "white");
          $('.follow_btn_u7').css("background", "rgb(153, 136, 121)");
        }
        else{
          for(var i = 0; i < x.length; i++){
            x[i].innerText = "Follow"
          }
          document.querySelector('.follow_btn_u7').innerText = "Follow";
          $('.follow_btn_u7').css("color", "rgb(153, 136, 121)");
          $('.follow_btn_u7').css("background", "white");
        }
    }else{
      alert("Please log in or sign up to follow users");
    }

    });

    $('.follow_btn_u8').click(function(){
      if(checkLogged()){
        var follow = document.querySelector('.follow_btn_u8').innerText;
        if(follow == "Follow"){
          document.querySelector('.follow_btn_u8').innerText = "Following";
          $('.follow_btn_u8').css("color", "white");
          $('.follow_btn_u8').css("background", "rgb(153, 136, 121)");
        }
        else{
          document.querySelector('.follow_btn_u8').innerText = "Follow";
          $('.follow_btn_u8').css("color", "rgb(153, 136, 121)");
          $('.follow_btn_u8').css("background", "white");
        }
    }else{
      alert("Please log in or sign up to follow users");
    }

    });



    // -----RANKINGS END -----


    // MY PROFILE SECTION BEGINS
    $('#settings, #settings_mobile').click(function(e){
      e.preventDefault();
      $("#overlay").fadeIn();
      $("#profile_form_container").css("display", "flex");
      $("#edit_profile").css("display", "flex");
      $('body').css("overflow-y", "hidden");
    });

    $('#change_username_btn').click(function(e){
      e.preventDefault();
      var user_info = getCookie("userlogged");
      user_info = user_info.split(",");
      var new_username = $('#edit_username').val();
      var old_user = getCookie(user_info[0]);
      old_user = old_user.split(',');
      var new_cookie = old_user[0] + "," + old_user[1] + ","+ old_user[2] + "," + old_user[3];;
      if(confirm("Do you want to change your username?")){
        document.cookie = user_info[0] + "= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
        setCookie(new_username, new_cookie);
        setCookie("userlogged", new_username + "," + old_user[0]);
        $('#edit_username').val('');
        $('#puser').text("@" + new_username);
      }
    });

    $('#change_mail_btn').click(function(e){
      e.preventDefault();
      var user_info = getCookie("userlogged");
      user_info = user_info.split(",");
      var new_email = $('#edit_email').val();
      var old_user = getCookie(user_info[0]);
      old_user = old_user.split(',');
      var new_cookie = new_email + "," + old_user[1] + ","+ old_user[2] + "," + old_user[3];;
      if(confirm("Do you want to change your email?")){
        setCookie(user_info[0], new_cookie);
        setCookie("userlogged", user_info[0] + "," + new_email);
        $('#edit_email').val('');
      }
    });

    $('#change_pass_btn').click(function(e){
      e.preventDefault();
      var user_info = getCookie("userlogged");
      user_info = user_info.split(",");
      var new_pass = $('#edit_password').val();
      var old_user = getCookie(user_info[0]);
      old_user = old_user.split(',');
      var new_cookie = old_user[0] + "," + new_pass + ","+ old_user[2] + "," + old_user[3];
      if(confirm("Do you want to change your email?")){
        setCookie(user_info[0], new_cookie);
        $('#edit_password').val('');
      }
    });

    $("#change_pic_btn").change(function(){
       previewProfilePic(this);
   });

   $("#change_banner_btn").change(function(){
       previewBanner(this);
   });

    $("#submit_pic").click("click", function(){
      var user = getCookie("userlogged");
      user = user.split(',');
      user = user[0];
      var old_cookie = getCookie(user);
      old_cookie = old_cookie.split(',');
      var new_pic = document.getElementById("change_pic_btn").files[0].name;
      var new_cookie = old_cookie[0] + "," + old_cookie[1] + ","+ new_pic + "," + old_cookie[3];
      if(confirm("Do you want to change your profile pic?")){
        setCookie(user, new_cookie);
        $('#profile_picture').attr('src',"./images/" + new_pic);
        $('#change_pic_btn').val('');
      }
      else{
        $('#change_pic_btn').val('');
        $('#edit_profile_pic').attr('src', "./images/" + old_cookie[2]);
      }
    });

    $("#submit_banner").click("click", function(){
      var user = getCookie("userlogged");
      user = user.split(',');
      user = user[0];
      var old_cookie = getCookie(user);
      old_cookie = old_cookie.split(',');
      var new_banner = document.getElementById("change_banner_btn").files[0].name;
      var new_cookie = old_cookie[0] + "," + old_cookie[1] + ","+ old_cookie[2] + "," + new_banner;
      if(confirm("Do you want to change your banner pic?")){
        setCookie(user, new_cookie);
        $('#banner_image').attr('src',"./images/" + new_banner);
        $('#change_banner_btn').val('');
      }
      else{
        $('#change_banner_btn').val('');
        alert(old_cookie[3]);
        $('#edit_banner').attr('src', "./images/" + old_cookie[3]);
      }
    });

    $("#my_collections_btn").click(function(e){
       e.preventDefault();
       window.location.href= 'collections.html';

    });

    $("#my_collections_btn_tablet").click(function(e){
       e.preventDefault();
       window.location.href= 'collections.html';

    });

    // MY PROFILE SECTION ENDS



    // MY COLLECTIONS SECTIONS
    $("#addcollection_btn").click(function(e){
        e.preventDefault();
        $("#overlay").fadeIn();
        $("#profile_form_container").css("display", "flex");
        $("#add_collection_form").css("display", "flex");
        $("body").css("overflow-y", "hidden");
        if (getCookie("scroll") == "open"){
          $("#side_menu").animate({width:'toggle'},350);
          setCookie("scroll", "close");
        }

    });


    $("#add_collection_form").submit(function(e){
        e.preventDefault();
        var user_info = getCookie("userlogged");
        user_info = user_info.split(",");
        var cname = user_info[1];
        var prevValue = getCookie(cname);
        var collection_title = document.getElementById("new_title_col").value;
        var cvalue = prevValue + "(" + collection_title + "/" + "banner.jpg" + "/" + "banner2.jpg" + "/" + "banner3.jpg" + "/" + "banner4.jfif" + "),";
        var new_collection = document.createElement("div");
        setCookie(cname, cvalue);
        new_collection.classList.add('profile_collections');

        var collection_container = document.createElement("div");
        collection_container.classList.add("collection");
        var first_half = document.createElement("div");
        first_half.classList.add("first_half");
        var photo1 = document.createElement("div");
        photo1.classList.add("photo1_col");
        var image1 = document.createElement("img");
        image1.src = "./images/banner.jpg";
        var photo2 = document.createElement("div");
        photo2.classList.add("photo2_col");
        var image2 = document.createElement("img");
        image2.src = "./images/banner2.jpg";
        photo2.appendChild(image2);
        photo1.appendChild(image1);
        first_half.appendChild(photo1);
        first_half.appendChild(photo2);

        var second_half = document.createElement("div");
        second_half.classList.add("second_half");
        var photo3 = document.createElement("div");
        photo3.classList.add("photo3_col");
        var image3 = document.createElement("img");
        image3.src = "./images/banner3.jpg";
        var photo4 = document.createElement("div");
        photo4.classList.add("photo4_col");
        var image4 = document.createElement("img");
        image4.src = "./images/banner4.jfif";
        photo3.appendChild(image3);
        photo4.appendChild(image4);
        second_half.appendChild(photo3);
        second_half.appendChild(photo4);

        collection_container.appendChild(first_half);
        collection_container.appendChild(second_half);

        var col_title = document.createElement("h3");
        col_title.classList.add("title_col");
        col_title.innerText = collection_title;

        new_collection.appendChild(collection_container);
        new_collection.appendChild(col_title);

        document.getElementById("collections_container").prepend(new_collection);

        $("#add_collection_form").css("display", "none");
        $("body").css("overflow-y", "scroll");
        setCookie("scroll", "close");
        $("#overlay").fadeOut();
        document.getElementById('add_collection_form').reset();

    });

    $("#add_collection-close").click(function(e){
        document.getElementById('add_collection_form').reset();
    });
    // MY COLLECTIONS SECTIONS END

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

function previewProfilePic(input) {
       if (input.files && input.files[0]) {
           var reader = new FileReader();

           reader.onload = function (e) {
               $('#edit_profile_pic').attr('src', e.target.result);
           }

           reader.readAsDataURL(input.files[0]);
       }
}

function previewBanner(input) {
       if (input.files && input.files[0]) {
           var reader = new FileReader();

           reader.onload = function (e) {
               $('#edit_banner').attr('src', e.target.result);
           }

           reader.readAsDataURL(input.files[0]);
       }
}
