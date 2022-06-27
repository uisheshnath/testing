    $(function () {
        $("#toggle_pwd").click(function () {
            $(this).toggleClass("bi bi-x-lg");  
            $(".menu-list").toggle(500);
        });


        $("#thepass").click(function () {
                     $(this).toggleClass("bi bi-eye-slash");
                   var type = $(this).hasClass("bi-eye-slash") ? "text" : "password";
                    $("#pass").attr("type", type);
                });
          $("#thepass2").click(function () {
                    $(this).toggleClass("bi bi-eye-slash");
                  var type = $(this).hasClass("bi-eye-slash") ? "text" : "password";
                  $("#pass2").attr("type", type);
            });          
           

                var refTop =$("#myslider").offset().top;
                var stickyTop = $('#sticky').offset().top;
                $(window).scroll(function() {
                    var windowTop = $(window).scrollTop();
                
                    if (stickyTop  < windowTop &&  refTop-80 > windowTop ) {
                      $("#adds").addClass("offset-lg-4")
                      $('#sticky').css({'position':'fixed', 'background':'#fff','top':'80px'});
                    } else {
                      $('#sticky').css('position', 'relative');
                    }
                  });
              








    });
    

