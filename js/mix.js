$(document).ready(function() {
    // Materialize.toast('Hit a green button to load a track!', 3000, 'rounded');

    console.log(SC);
    // SC initialization
    SC.initialize({
        client_id: 'cf8a5ad4e3dc1198d5853833155de0bc'
    });

    // BUTTON#1
    var $btn1 = $('#btn1');
    // button click event
    $($btn1).click(function(event) {
        // empty target
        $("#target").empty();
        // getJSON for track
        var $xhr = $.getJSON('https://cors-anywhere.herokuapp.com/http://api.soundcloud.com/resolve?url=https://soundcloud.com/tycho/tycho-division&client_id=cf8a5ad4e3dc1198d5853833155de0bc');
            $xhr.done(function(track) {
            var count = 0;
            if ($xhr.status !== 200) {
                return;
            }
            // track number variable
            var track1 = track.permalink_url;
            SC.oEmbed(track1, {
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
    });

    // BUTTON#2
    var $btn2 = $('#btn2');
    // button click event
    $($btn2).click(function(event) {
        // empty target
        $("#target").empty();
        // getJSON for track
        var $xhr2 = $.getJSON('https://cors-anywhere.herokuapp.com/http://api.soundcloud.com/resolve?url=https://soundcloud.com/massive-attack-2/nas-vs-massive-attack&client_id=cf8a5ad4e3dc1198d5853833155de0bc');
            $xhr2.done(function(track) {
            var count = 0;
            if ($xhr2.status !== 200) {
                return;
            }
            // embed track link to target
            var track2 = track.permalink_url;
            SC.oEmbed(track2, {
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
    });

    // BUTTON#3
    var $btn3 = $('#btn3');
    // button click event
    $($btn3).click(function(event) {
        // empty target
        $("#target").empty();
        // getJSON for track
        var $xhr3 =   $.getJSON('https://cors-anywhere.herokuapp.com/http://api.soundcloud.com/resolve?url=https://soundcloud.com/eskmo/the-sun-is-a-drum-1&client_id=cf8a5ad4e3dc1198d5853833155de0bc');
            $xhr3.done(function(track) {
            var count = 0;
            if ($xhr3.status !== 200) {
                return;
            }
            // embed track link to target
            var track3 = track.permalink_url;
            SC.oEmbed(track3, {
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
    });

    // BUTTON#4
    var $btn4 = $('#btn4');
    // embed track link to target
    $($btn4).click(function(event) {
        // empty target
        $("#target").empty();
        // getJSON for track
        var $xhr4 =   $.getJSON('https://cors-anywhere.herokuapp.com/http://api.soundcloud.com/resolve?url=https://soundcloud.com/littlesimz/wings-prod-iamnobodi&client_id=cf8a5ad4e3dc1198d5853833155de0bc');
            $xhr4.done(function(track) {
            var count = 0;
            if ($xhr4.status !== 200) {
                return;
            }
            // embed track link to target
            var track4 = track.permalink_url;
            SC.oEmbed(track4, {
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
    });

    // BUTTON#5
    var $btn5 = $('#btn5');

    $($btn5).click(function(event) {
        // empty target
        $("#target").empty();
        // getJSON for track
        var $xhr5 =   $.getJSON('https://cors-anywhere.herokuapp.com/http://api.soundcloud.com/resolve?url=https://soundcloud.com/adultswimsingles/dj-paypal&client_id=cf8a5ad4e3dc1198d5853833155de0bc');
            $xhr5.done(function(track) {
            var count = 0;
            if ($xhr5.status !== 200) {
                return;
            }
            // embed track link to target
            var track5 = track.permalink_url;
            SC.oEmbed(track5, {
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
    });


    // BUTTON#6
    var $btn6 = $('#btn6');

    $($btn6).click(function(event) {
        // empty target
        $("#target").empty();
        // getJSON for track
        var $xhr6 =   $.getJSON('https://cors-anywhere.herokuapp.com/http://api.soundcloud.com/resolve?url=https://soundcloud.com/botany/raw-light-overture&client_id=cf8a5ad4e3dc1198d5853833155de0bc');
        $xhr6.done(function(track) {
            var count = 0;
            if ($xhr6.status !== 200) {
                return;
            }
            // embed track link to target
            var track6 = track.permalink_url;
            SC.oEmbed(track6, {
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
    });

    // BUTTON#7
    var $btn7 = $('#btn7');

    $($btn7).click(function(event) {
        // empty target
        $("#target").empty();
        // getJSON for track
        var $xhr7 =   $.getJSON('https://cors-anywhere.herokuapp.com/http://api.soundcloud.com/resolve?url=https://soundcloud.com/massappealrecs/dj-shadow-nobody-speak-feat-run-the-jewels&client_id=cf8a5ad4e3dc1198d5853833155de0bc');
            $xhr7.done(function(track) {
            var count = 0;
            if ($xhr7.status !== 200) {
                return;
            }
            // embed track link to target
            var track7 = track.permalink_url;
            SC.oEmbed(track7, {
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
    });

    // BUTTON#8
    var $btn8 = $('#btn8');

    $($btn8).click(function(event) {
        // empty target
        $("#target").empty();
        // getJSON for track
        var $xhr8 =   $.getJSON('https://cors-anywhere.herokuapp.com/http://api.soundcloud.com/resolve?url=https://soundcloud.com/artemov111/jay-electronica-exhibit-b-feat-mos-def&client_id=cf8a5ad4e3dc1198d5853833155de0bc');
            $xhr8.done(function(track) {
            var count = 0;
            if ($xhr8.status !== 200) {
                return;
            }
            // embed track link to target
            var track8 = track.permalink_url;
            SC.oEmbed(track8, {
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
    });

    // BUTTON#9
    var $btn9 = $('#btn9');

    $($btn9).click(function(event) {
        // empty target
        $("#target").empty();
        // getJSON for track
        var $xhr9 =   $.getJSON('https://cors-anywhere.herokuapp.com/http://api.soundcloud.com/resolve?url=https://soundcloud.com/massappealrecs/j-dilla-fuck-the-police&client_id=cf8a5ad4e3dc1198d5853833155de0bc');
            $xhr9.done(function(track) {
            var count = 0;
            if ($xhr9.status !== 200) {
                return;
            }
            // embed track link to target
            var track9 = track.permalink_url;
            SC.oEmbed(track9, {
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
