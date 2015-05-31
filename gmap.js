var map;

function markBins(map){
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

function initialize(){
  var address = document.getElementById("address").value;
  var boroughForm = document.getElementById('borough');

  var borough = boroughForm.options[boroughForm.selectedIndex].text;
  fullAddress = address + ", " + borough + ", NY, US"
  var location;
  var geocoder = new google.maps.Geocoder();
  geocoder.geocode( { 'address': fullAddress}, function(results, status) {
    location = results[0].geometry.location;
    createMap(location);
    markBins(map);
  });
}


function createMap(myLatlng) {
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