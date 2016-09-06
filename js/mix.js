$( document ).ready(function() {
    console.log( "ready!" );

var $track1 = $('<iframe width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/276851467&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"></iframe>');
var $animation = $('<canvas id="canvas"></canvas>');

// Background Animations
var $gif1 = $('<img id="gif1" src="https://assets.ello.co/uploads/asset/attachment/4221674/ello-optimized-95a29a26.gif"/>');
var $gif2 = $('<img id="gif2" src="https://assets.ello.co/uploads/asset/attachment/4500905/ello-optimized-456dbb93.gif"/>');
var $gif3 = $(' <div class="carousel carousel-slider"><a class="carousel-item" href="#one!"><img id="gif3" src="https://assets.ello.co/uploads/asset/attachment/4493128/ello-optimized-809bf883.gif"></a><a class="carousel-item" href="#two!"><img id="gif4" src="https://assets.ello.co/uploads/asset/attachment/4497268/ello-optimized-1e3b1442.gif"></a></div>');

// Materialize.toast('Hit a green button to load a track!', 5000, 'rounded');




// BUTTON#1
// button press
$("#btn1").click(function() {
// empty #target div
$("#target").empty();
// append audio player to #target div
 $track1.appendTo($("#target"));
// player style and position
$($track1).css({
  height: "100px",
  width: "500px",
  float: "right",
  position: "absolute",
  bottom: "75px",
  right: "30px",
  zindex: "99"
  });
 // append animation to #target div
   $gif1.appendTo($("#target"));
 // style gif
  $($gif1).css({
     display: "block",
     margin: "auto",
     });
});

// BUTTON#2
// button press
$("#btn2").click(function() {
// empty #target div
$("#target").empty();
// append audio player to #target div
 $track1.appendTo($("#target"));
// player style and position
$($track1).css({
  height: "100px",
  width: "500px",
  float: "right",
  position: "absolute",
  bottom: "75px",
  right: "30px",
  zindex: "99"
  });
  // append animation to #target div
   $gif2.appendTo($("#target"));
   // style gif
  $($gif2).css({
     display: "block",
     margin: "auto",
    });
});

    // BUTTON#3
     // button press
     $("#btn3").click(function() {
     // empty #target div
     $("#target").empty();
     // append audio player to #target div
      $track1.appendTo($("#target"));
     // player style and position
     $($track1).css({
       height: "100px",
       width: "500px",
       float: "right",
       position: "absolute",
       bottom: "75px",
       right: "30px",
       zindex: "99"
       });
        $('.carousel').carousel();
       // append animation to #target div
        $gif3.appendTo($("#target"));
        // style gif
       $($gif3).css({
          display: "block",
          margin: "auto",
          });

});






// End document ready
// });
});
