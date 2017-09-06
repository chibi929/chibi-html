$(function() {
  var timer;
  $("#button").on("click", function() {
    clearTimeout(timer);
    $("#balloon-tips").show();
    timer = setTimeout(function() {
      $("#balloon-tips").hide();
    }, 3000);
  });
});
