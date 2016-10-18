$(document).ready(function() {
  $("#cat").click(function() {
    $("ul#bark").before("<li>Woof!</li>");
  });
  $("#dog").click(function() {
    $("ul#meow").before("<li>MEOW!</li>");
  });
  $("#stop-noise").click(function() {
    
    $("#showing").toggle();
    $("#hidden").toggle();
  });
});
