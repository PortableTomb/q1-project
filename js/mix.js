var currentTrack = 0;
// var iframeElement = document.querySelector('iframe');
// var widget = SC.Widget(iframeElement);
var finish = SC.Widget.Events.FINISH;

var songURLs = [
    "https://soundcloud.com/tycho/tycho-division",
    "https://soundcloud.com/massive-attack-2/nas-vs-massive-attack",
    "https://soundcloud.com/littlesimz/wings-prod-iamnobodi",
    "https://soundcloud.com/eskmo/the-sun-is-a-drum-1",
    "https://soundcloud.com/adultswimsingles/dj-paypal",
    "https://soundcloud.com/botany/raw-light-overture",
    "https://soundcloud.com/massappealrecs/dj-shadow-nobody-speak-feat-run-the-jewels",
    "https://soundcloud.com/artemov111/jay-electronica-exhibit-b-feat-mos-def",
    "https://soundcloud.com/yppah/never-mess-with-sunday"
];

// READY
$( document ).ready(function() {

// TOASTS
// Materialize.toast('Hit a green button to load a track!', 3000, 'rounded');

// SC initialization
  console.log(SC);
  SC.initialize({
    client_id: 'cf8a5ad4e3dc1198d5853833155de0bc'
  });

// LoadSONG function
 function loadSong(track){
     $("#target").empty();
     // getJSON for track
     var $xhr = $.getJSON(`https://cors-anywhere.herokuapp.com/http://api.soundcloud.com/resolve?url=${songURLs[track]}&client_id=cf8a5ad4e3dc1198d5853833155de0bc`);
     $xhr.done(function(track) {
       var count = 0;
       if ($xhr.status !== 200) {
         return;
       }
       // track number variable
       var trackURL = track.permalink_url;
       SC.oEmbed(trackURL, {
         auto_play: true,
         element: document.getElementById('target')
       });
       // player style and position
       $("#target").css({
         height: "100px",
         width: "500px",
         float: "right",
         position: "absolute",
         bottom: "75px",
         right: "30px",
         zindex: "99"
       });
     });
 }
// Event Handler
 $('#all-buttons').on('click', 'a', function(event){
     var trackNumber = $(event.target).text();
     var songNumber = parseInt(trackNumber);
     var track = songNumber -1;
     console.log(track);
    //  loadSong(track);
 });

  // *Buttons
  // BUTTON#1
var $btn1 = $('#btn1');
  $($btn1).click(function(event) {
    loadSong(0);
  });
  // BUTTON#2
var $btn2 = $('#btn2');
  $($btn2).click(function(event) {
      loadSong(1);
  });
  // BUTTON#3
var $btn3 = $('#btn3');
  $($btn3).click(function(event) {
      loadSong(2);
  });
  // BUTTON#4
var $btn4 = $('#btn4');
  $($btn4).click(function(event) {
      loadSong(3);
  });
  // BUTTON#5
var $btn5 = $('#btn5');
  $($btn5).click(function(event) {
     loadSong(4);
  });
  // BUTTON#6
var $btn6 = $('#btn6');
  $($btn6).click(function(event) {
    loadSong(5);
  });
  // BUTTON#7
  var $btn7 = $('#btn7');
    $($btn7).click(function(event) {
      loadSong(6);
    });
  // BUTTON#8
  var $btn8 = $('#btn8');
  $($btn8).click(function(event) {
    loadSong(7);
  });
  // BUTTON#9
  var $btn9 = $('#btn9');
  $($btn9).click(function(event) {
    loadSong(8);
  });
  // BUTTON#9
  var $playall = $('#btn-all');
  $($playall).click(function(event) {
var iframeElement = document.querySelector("iframe");
var widget = SC.Widget(iframeElement);
widget.bind(finish, function(){
    currentTrack ++;
    if (currentTrack < 10) {
        loadSong(currentTrack);
    }
});
});





  // button press
  // $("#btn1").click(function() {
  // empty #target div
  // $("#target").empty();
  // append audio player to #target div
  //  $track1.appendTo($("#target"));
  // player style and position
  // $($track1).css({
  //   height: "100px",
  //   width: "500px",
  //   float: "right",
  //   position: "absolute",
  //   bottom: "75px",
  //   right: "30px",
  //   zindex: "99"
  //   });
  //  append animation to #target div
  //    $gif1.appendTo($("#target"));
  //  style gif
  //   $($gif1).css({
  //      display: "block",
  //      margin: "auto",
  //      });
  // });


  // button press
  // $("#btn2").click(function() {
  // empty #target div
  // $("#target").empty();
  // append audio player to #target div
  // $track1.appendTo($("#target"));
  // player style and position
  // $($track1).css({
  //   height: "100px",
  //   width: "500px",
  //   float: "right",
  //   position: "absolute",
  //   bottom: "75px",
  //   right: "30px",
  //   zindex: "99"
  //   });
  // append animation to #target div
  // $gif2.appendTo($("#target"));
  // style gif
  //   $($gif2).css({
  //      display: "block",
  //      margin: "auto",
  //     });
  // });









  // End document ready
});


// var $animation = $('<canvas id="canvas"></canvas>');
//
// Background Animations
// var $gif1 = $('<img id="gif1" src="https://assets.ello.co/uploads/asset/attachment/4221674/ello-optimized-95a29a26.gif"/>');
