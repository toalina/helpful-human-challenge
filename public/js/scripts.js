// Code for active state

// when active, border-bottom blue

// when inactive, border-bottom gray

$(document).ready(function(){
  $("input").focus(function() {
    $(this).addClass("active");
  });
  $("input").blur(function() {
    $(this).removeClass("active");
  });

  $("textarea").focus(function() {
    $(this).addClass("active");
  });
  $("textarea").blur(function() {
    $(this).removeClass("active");
  });
});



