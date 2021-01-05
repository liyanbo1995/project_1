$('.btn_nav').click(function() {
  // animate content
  $('.page__style').addClass('animate_content');
  $('.page__description').fadeOut(100).delay(2800).fadeIn();

  setTimeout(function() {
    $('.page__style').removeClass('animate_content');
  }, 3200);

  //remove fadeIn class after 1500ms
  setTimeout(function() {
    $('.page__style').removeClass('fadeIn');
  }, 1500);

});

// on click show page after 1500ms
$('.home_link').click(function() {
  setTimeout(function() {
    $('.home').addClass('fadeIn');
  }, 1500);
});

$('.projects_link').click(function() {
  setTimeout(function() {
    $('.projects').addClass('fadeIn');
  }, 1500);
});

$('.skills_link').click(function() {
  setTimeout(function() {
    $('.skills').addClass('fadeIn');
  }, 1500);
});

$('.about_link').click(function() {
  setTimeout(function() {
    $('.about').addClass('fadeIn');
  }, 1500);
});

$('.contact_link').click(function() {
  setTimeout(function() {
    $('.contact').addClass('fadeIn');
  }, 1500);
});

/*animation for skill bar*/
        var i = 0;
        function makeProgressHtml(){
            if(i < 90){
                i +=1;
                $(".progress-bar_html_css").css("width", i + "%");
            }
            // Wait for sometime before running this script again
            setTimeout("makeProgressHtml()",100);
        }
        function makeProgressJsReact(){
          if(i < 80){
              i +=1;
              $(".progress-bar_js_react").css("width", i + "%");
          }
          // Wait for sometime before running this script again
          setTimeout("makeProgressJsReact()",100);
      }
        
        $(document).ready(function(){
          $("div").scroll(function(){
            makeProgressHtml();
            makeProgressJsReact();
          });
        });
        //makeProgress();