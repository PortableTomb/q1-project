
// ANIMATION
$(function() {
	var canvas = document.querySelector('canvas'),
      ctx = canvas.getContext('2d'),
      color = 'rgba(185,226,222, .75)';

   var w = window.innerWidth;
   var h = window.innerHeight;
    canvas.width = w;
	canvas.height = h;
	ctx.fillStyle = color;
	ctx.lineWidth = 0.75;
	ctx.strokeStyle = color;

	var mousePosition = {
		x: 10 * w / 100,
		y: 10 * h / 100
	};

	var dots = {
    num: 33,
    distance: 600,
    d_radius: 750,
    velocity: -0.1,
    array: []
	};

	function Dot(){
	  this.x = Math.random() * w;
	  this.y = Math.random() * h;
	  this.vx = dots.velocity + Math.random();
	  this.vy = dots.velocity + Math.random();
	  this.radius = Math.random() * 2;
	}
  Dot.prototype = {
	create: function(){
	  ctx.beginPath();
	  ctx.arc(this.x, this.y, this.radius, 10, Math.PI * 3, false);
	  ctx.fill();
	},
	animate: function() {
	  for(i = 0; i < dots.num; i++){
		var dot = dots.array[i];
		  if(dot.y < 0 || dot.y > h){
			dot.vx = dot.vx;
			dot.vy = - dot.vy;
			}
			else if(dot.x < 0 || dot.x > w){
			  dot.vx = - dot.vx;
			  dot.vy = dot.vy;
			}
			dot.x += dot.vx;
			dot.y += dot.vy;
		}
	},
line: function() {
	for(i = 0; i < dots.num; i++){
	  for(j = 0; j < dots.num; j++){
		  i_dot = dots.array[i];
		  j_dot = dots.array[j];

		  if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
				if((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius){
					ctx.beginPath();
					ctx.moveTo(i_dot.x, i_dot.y);
                    ctx.bezierCurveTo(i_dot.x, (h / 2), (w / 2), i_dot.y, j_dot.x, j_dot.y);
					ctx.stroke();
					ctx.closePath();
					}
				}
			}
		}
	}
};

function createDots(){
  ctx.clearRect(0, 0, w, h);
	for(i = 0; i < dots.num; i++){
	  dots.array.push(new Dot());
	  dot = dots.array[i];
	  dot.create();
	}
	  dot.line();
	  dot.animate();
}
  $('canvas').on('mousemove mouseleave', function(e){
	if(e.type == 'mousemove'){
		mousePosition.x = e.pageX;
		mousePosition.y = e.pageY;
	}
	if(e.type == 'mouseleave'){
		mousePosition.x = w / 2;
		mousePosition.y = h / 2;
	}
});
  $('canvas').on('click', function(){
	dots.num += 5;
	});

	setInterval(createDots, 10/10);

  $(window).on('resize', function() {
    canvas.width = w;
    canvas.height = h;
    ctx.fillStyle = color;
    ctx.lineWidth = 0.1;
    ctx.strokeStyle = color;
  });
});

// Jquery Mobile Menu
$(document).ready(function() {
$(".button-collapse").sideNav();
});
