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


        var TxtType = function(el, toRotate, period) {
          this.toRotate = toRotate;
          this.el = el;
          this.loopNum = 0;
          this.period = parseInt(period, 10) || 2000;
          this.txt = '';
          this.tick();
          this.isDeleting = false;
      };
  
      TxtType.prototype.tick = function() {
          var i = this.loopNum % this.toRotate.length;
          var fullTxt = this.toRotate[i];
  
          if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
          } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
          }
  
          this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
          var that = this;
          var delta = 200 - Math.random() * 100;
  
          if (this.isDeleting) { delta /= 2; }
  
          if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
          } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
          }
  
          setTimeout(function() {
          that.tick();
          }, delta);
      };
  
      window.onload = function() {
          var elements = document.getElementsByClassName('typewrite');
          for (var i=0; i<elements.length; i++) {
              var toRotate = elements[i].getAttribute('data-type');
              var period = elements[i].getAttribute('data-period');
              if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
              }
          }
          // INJECT CSS
          var css = document.createElement("style");
          css.type = "text/css";
          css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid}";
          document.body.appendChild(css);
      };