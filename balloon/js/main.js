$(function() {
  $("#button").on("click", function() {
    $("#balloon-tips")
      .toggleClass("visible")
      .delay(3000)
      .queue(function() {
        $("#balloon-tips").removeClass('visible').dequeue();
      });
  });
});
