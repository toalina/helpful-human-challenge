$(document).ready(function(){
  // Switch input between active/inactive states
  $("input").focus(function() {
    $(this).addClass("active");
  });
  $("input").blur(function() {
    $(this).removeClass("active");
  });

  // Switch textarea between active/inactive states
  $("textarea").focus(function() {
    $(this).addClass("active");
  });
  $("textarea").blur(function() {
    $(this).removeClass("active");
  });

  // Toggle breadcrumb active/inactive states
  $(".breadcrumbs li").hover(function() {
    $(this).toggleClass("active-crumb");
  });
});



