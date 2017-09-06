$(function() {
  var timer;
  $("#button").on("click", function() {
    clearTimeout(timer);
    $("#balloon-tips").toggleClass("visible");
    timer = setTimeout(function() {
      $("#balloon-tips").toggleClass("visible");
    }, 3000);
  });
});
