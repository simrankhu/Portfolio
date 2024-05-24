function inVisible(element) {
    //Checking if the element is
    //visible in the viewport
    var WindowTop = $(window).scrollTop();
    var WindowBottom = WindowTop + $(window).height();
    var ElementTop = element.offset().top;
    var ElementBottom = ElementTop + element.height();
    //animating the element if it is
    //visible in the viewport
    if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
      animate(element);
  }
  
  function animate(element) {
    //Animating the element if not animated before
    if (!element.hasClass('ms-animated')) {
      var maxval = element.data('max');
      var html = element.html();
      element.addClass("ms-animated");
      $({
        countNum: element.html()
      }).animate({
        countNum: maxval
      }, {
        //duration 5 seconds
        duration: 5000,
        easing: 'linear',
        step: function() {
          element.html(Math.floor(this.countNum) + html);
        },
        complete: function() {
          element.html(this.countNum + html);
        }
      });
    }
  
  }
  
  //When the document is ready
  $(function() {
    //This is triggered when the
    //user scrolls the page
    $(window).scroll(function() {
      //Checking if each items to animate are 
      //visible in the viewport
      $("h2[data-max]").each(function() {
        inVisible($(this));
      });
    })
  });
  
  function scrollFunction() {
    let menu = document.getElementById('menu');
    if (window.scrollY > 0) {
      menu.style.position = 'fixed';
      menu.style.top = '0';
      menu.style.right = '0';
      menu.style.transition = '1.2s ease';
   // Ensure it spans the full width of the viewport
    } else {
      menu.style.position = 'relative';
    }
  }
  
  window.onscroll = function() {
    scrollFunction();
  };

  $(document).ready(function() {
    $('#sidemenu').on('click', function() {
      $('#list').toggleClass('active');
      
    });
  });
