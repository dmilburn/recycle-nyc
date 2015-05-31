$(document).ready(function(){
  $('#map-canvas').hide();


  $('#search').on('submit', function(event){
    event.preventDefault();
    var address = document.getElementById("address").value;
    var boroughForm = document.getElementById('borough');
    var borough = boroughForm.options[boroughForm.selectedIndex].text;
    var location;
    $('#map-canvas').show();
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': address}, function(results, status) {
      location = results[0].geometry.location;
      initialize(location);
    });
  });

})
