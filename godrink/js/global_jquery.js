$(document).ready(function() {
    $(".content_1").mousemove(function(e) {
  parallaxIt(e, "can_page", -30);
});

function parallaxIt(e, target, movement) {
  var $this = $(".content_1");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}
});