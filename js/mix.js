var currentTrack = 0;
// var iframeElement = document.querySelector('iframe');
// var widget = SC.Widget(iframeElement);
var finish = SC.Widget.Events.FINISH;
var animationRunning = false;

var songURLs = [
    "https://soundcloud.com/danger_mouse/somersault-feat-sia-danger-mouse-remix-rejected",
    "https://soundcloud.com/massappealrecs/dj-shadow-nobody-speak-feat-run-the-jewels",
    "https://soundcloud.com/artemov111/jay-electronica-exhibit-b-feat-mos-def",
    "https://soundcloud.com/littlesimz/wings-prod-iamnobodi",
    "https://soundcloud.com/adultswimsingles/dj-paypal",
    "https://soundcloud.com/botany/raw-light-overture",
    "https://soundcloud.com/massive-attack-2/nas-vs-massive-attack",
    "https://soundcloud.com/yppah/never-mess-with-sunday",
    "https://soundcloud.com/tycho/tycho-division"
];

// READY
$( document ).ready(function() {

// TOASTS
Materialize.toast('Hit a button to load a track. Press all for autoplay.', 5000, 'rounded');


// SC initialization
  console.log(SC);
  SC.initialize({
    client_id: 'cf8a5ad4e3dc1198d5853833155de0bc'
  });

// LoadSONG function
 function loadSong(track){
     currentTrack = track;
     $("#target").empty();

     if (!animationRunning) {
        anim();
        animationRunning = true;
     }

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
       })
       .then(function(embed) {
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

           var iframeElement = document.querySelector("iframe");
           var widget = SC.Widget(iframeElement);
           widget.bind(finish, function(){
             currentTrack++;
             if (currentTrack < 10) {
                 loadSong(currentTrack);
             }
             });
       });
     });
 }
// Event Handler
 $('#all-buttons').on('click', 'a', function(event){
    var trackNumber = $(event.target).text();
    var songNumber = parseInt(trackNumber);
    var track = songNumber -1;
    console.log(track);
    loadSong(track);

 });

  // End document ready
});

// ================================================
// CANVAS ANIMATION FROM CODEPEN
// ================================================

window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;

var c = document.getElementById("canvas");
var w = c.width = window.innerWidth;
var h = c.height = window.innerHeight;
var ctx = c.getContext("2d");

var maxParticles = 100;
var particles = [];
var hue = 128;

mouse = {};
mouse.size = 10;
mouse.x = mouse.tx = w/2;
mouse.y = mouse.ty = h/2;

var clearColor = "rgba(0, 0, 0, .3)";

function random(min, max){
	return Math.random() * (max - min) + min
}

function distance(x1, y1, x2, y2){
	return Math.sqrt( (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2) );
}

function P(){}

P.prototype = {
	init: function(){
		this.size = this.origSize = random(3, 8);
		this.x = mouse.x;
		this.y = mouse.y;
		this.sides = random(3, 10);
		this.vx = random(-5, 5);
		this.vy = random(-5, 5);
		this.life = 0;
		this.maxLife = random(50, 500);
		this.alpha = 2;
	},

	draw: function(){
		ctx.globalCompositeOperation = "lighter";
		ctx.strokeStyle = "hsla("+hue+", 100%, 50%, "+this.alpha+")";
		ctx.beginPath();
		ctx.moveTo(this.x + this.size * Math.cos(0), this.y + this.size *  Math.sin(1));
		for(var i=0; i<this.sides; i++){
			ctx.lineTo(this.x + this.size * Math.cos(i * 2 * Math.PI / this.sides), this.y + this.size * Math.sin(i * 2 * Math.PI / this.sides));
		}
		ctx.closePath();
		ctx.lineWidth = this.size/20;
		ctx.fill();
		ctx.stroke();
		this.update();
	},

	update: function(){
		var rad = this.size/2;

		if(this.life <= this.maxLife){
			if((this.x - rad <= 0  && this.vx < 0) || (this.x + rad >= w && this.vx > 0)){
				this.vx *= -1;
			}

			if((this.y - rad <= 0 && this.vy < 0) || (this.y + rad >= h && this.vy > 0)){
				this.vy *= -1;
			}
			this.alpha *= .978;
			this.x += this.vx;
			this.y += this.vy;
			this.vy += .1;
			this.size += .4;
			this.life++;
		} else {
			this.init();
		}

	}
}


mouse.move = function(){
	if(!distance(mouse.x, mouse.y, mouse.tx, mouse.ty) <= .1){
  	mouse.x += (mouse.tx - mouse.x) * .2;
		mouse.y += (mouse.ty - mouse.y) * .2;
	}
	ctx.strokeRect(mouse.x - (mouse.size/2), mouse.y - (mouse.size/2), mouse.size, mouse.size);
};

mouse.touches = function(e) {
	var touches = e.touches;
	if(touches){
		mouse.tx = touches[0].clientX;
		mouse.ty = touches[0].clientY;
	} else {
		mouse.tx = e.clientX;
	  mouse.ty = e.clientY;
	}
	e.preventDefault();
};

mouse.mouseleave = function(e){
	mouse.tx = w/2;
	mouse.ty = h/2;
};

window.addEventListener("mousemove", mouse.touches);
window.addEventListener("touchstart", mouse.touches);
window.addEventListener("touchmove", mouse.touches)

c.addEventListener("mouseleave", mouse.mouseleave)

window.addEventListener("resize", function(){
	w = c.width = window.innerWidth;
	h = c.height = window.innerHeight;
	mouse.x = w/2;
	mouse.y = h/2;
});

for(var i=1; i<=maxParticles; i++) {
	setTimeout(function(){
		var p = new P();
		p.init();
		particles.push(p);
	}, i * 50);
}

function anim(){
	ctx.fillStyle = clearColor;
	ctx.globalCompositeOperation = "source-over";
	ctx.fillRect(0,0,w, h);
	mouse.move();

	for(var i in particles){
		var p = particles[i];
		p.draw();
	}

	hue += 0.1;
	requestAnimationFrame(anim);
}
