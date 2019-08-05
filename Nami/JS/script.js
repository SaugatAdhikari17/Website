//nav

$(window).scroll(function(){
  var stick = nav.offsetTop;
   if (window.pageYOffset >= stick) {
   $('nav').addClass("stick")
  } else {
   $('nav').removeClass("stick")
  }
})


 //Back to top
  window.onscroll = function() {
    scrollFunction();
  };
 
  function scrollFunction() {
    if ($("body")[0].scrollTop > 20 || $("html")[0].scrollTop > 20) {
      $("#top").css("display", "block");
    } else {
      $("#top").css("display", "none");
    }
  }
  $("#top").click(function() {
    $("html,body").animate({ scrollTop: 0 }, "slow");
    // window.scroll(0,0);
    // return false;
  });



    


