/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

/*document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#fff',
    lineColor: '#fff'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);

*/

// jQuery plugin example:
/*$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#fff',
    lineColor: '#fff'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});*/

$(document).ready(function() {

$('#particles').particleground({

  minSpeedX: 0.1,

  maxSpeedX: 0.7,

  minSpeedY: 0.1,

  maxSpeedY: 0.7,

  directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges

  directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges

  density: 10000, // How many particles will be generated: one particle every n pixels

  dotColor: 'rgba(255, 255, 255, 0.39)',

  lineColor: 'rgba(255, 255, 255, 0.39)',

  particleRadius: 7, // Dot size

  lineWidth: 1,

  curvedLines: false,

  proximity: 100, // How close two dots need to be before they join

  parallax: true,

  parallaxMultiplier: 5, // The lower the number, the more extreme the parallax effect

  onInit: function() {},

  onDestroy: function() {}

});
});
