// Code for active state

// when active, border-bottom blue

// when inactive, border-bottom gray

$(document).ready(function(){
  $("input").focus(function() {
    $(this).addClass("active-input");
  });
  $("input").blur(function() {
    $(this).removeClass("active-input");
  });
});

// $(document).on('focus', 'input', function() {

//   $(this).parent().addClass('active-input');

// });
