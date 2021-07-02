$(window).scroll(function(){
  if($(window).scrollTop()>0)
    $(".navbar").removeClass("transparent")
  else
    $(".navbar").addClass("transparent")

});

// var s = skrollr.init();
