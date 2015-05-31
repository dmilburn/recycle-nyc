var map;

function makeMarkers(map){
  $.getJSON("https://data.cityofnewyork.us/resource/sxx4-xhzg.json", function(data){
    for (var i = 0; i < data.length; i++){
      var myLatlng = new google.maps.LatLng(data[i].latitude, data[i].longitude)
      var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Hello World!'
      });
    };
  });
}

function geocodeLocation(){
  var address = document.getElementById("address").value;
  var boroughForm = document.getElementById('borough');
  var borough = boroughForm.options[boroughForm.selectedIndex].text;
  var location;
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode( { 'address': address}, function(results, status) {
    location = results[0].geometry.location;
    initialize(location);
    makeMarkers(map);

  });
}

// perform geocoding
// make map
// create recycling markers

function initialize(myLatlng) {
  var mapCanvas = document.getElementById('map-canvas');
  var mapOptions = {
    center: myLatlng,
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  map = new google.maps.Map(mapCanvas, mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
}