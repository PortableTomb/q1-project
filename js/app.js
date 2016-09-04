// AJAX / JSON
var $xhr = $.getJSON('http://crossorigin.me/http://api.soundcloud.com/tracks/13158665?client_id=cf8a5ad4e3dc1198d5853833155de0bc"');

$xhr.done(function(data) {
    if ($xhr.status !== 200) {
        return;
    }
    console.log(data);
});


// SITE PLAYLIST CONTENT
$(document).ready(function() {


$('#content-target').children().empty();
















});
