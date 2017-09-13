$(document).ready(function() {
  $("img#cat").click(function() {
    $(".meow ul").prepend("<li>MEOW</li");
  })

  $("img#dog").click(function() {
    $(".woof ul").prepend("<li>WOOF</li>");
  });
});
