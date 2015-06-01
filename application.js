$(document).ready(function(){


  $('#search').on('submit', function(event){
    event.preventDefault();
    location.hash = '#map-canvas'
    initializeMap();
  });

})
