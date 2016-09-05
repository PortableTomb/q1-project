$( document ).ready(function() {
    console.log( "ready!" );

var $track1 = $('<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/276851467&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>');
var $animation = $('<canvas id="canvas"></canvas>');


// button press
$("#btn1").click(function() {
// empty #target div
$("#target").empty();
// append player to #target div
 $track1.appendTo($("#target"));
// player style and position
$($track1).css({
  height: "100px",
  width: "500px",
  float: "right",
  position: "absolute",
  bottom: "75px",
  right: "30px",
  border: "5px solid grey",
  zindex: "1"
  });

});



// End document ready
});
