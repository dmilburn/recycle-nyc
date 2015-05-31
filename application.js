$(document).ready(function(){


  $('#search').on('submit', function(event){
    event.preventDefault();
    geocodeLocation();
  });

})
