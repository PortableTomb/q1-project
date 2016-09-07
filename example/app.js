// client_id: 'cf8a5ad4e3dc1198d5853833155de0bc',
//
// $(document).ready(function() {
//   // initialization
//   SC.initialize({
//     client_id: 'cf8a5ad4e3dc1198d5853833155de0bc'
//   });
// });
//
// var $submitButton = $('#submit');
//
//
// $($submitButton).submit(function(event){
//     event.preventDefault();
//
// var $xhr = $.getJSON("https://cors-anywhere.herokuapp.com/&client_id=cf8a5ad4e3dc1198d5853833155de0bc");
//

// });

// client id: c6e1e2a98490d428460f8d36af919bb4
// client secret: 9d72c993565c7fdc22e95fb5e968939e

$(document).ready(function() {
  // initialization
  SC.initialize({
    client_id: 'cf8a5ad4e3dc1198d5853833155de0bc'
  });

  var $submitButton = $('#submit');

  $($submitButton).click(function(event) {
    event.preventDefault();

    var $xhr = $.getJSON('https://cors-anywhere.herokuapp.com/http://api.soundcloud.com/resolve?url=https://soundcloud.com/tycho/tycho-division&client_id=cf8a5ad4e3dc1198d5853833155de0bc');

    $xhr.done(function(track) {
      var count = 0;
      if ($xhr.status !== 200) {
        return;
      }

      SC.oEmbed(track.permalink_url, {
        element: document.getElementById('target')
      });
    });
  });
});
