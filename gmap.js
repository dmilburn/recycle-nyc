

function initialize(lat, lng) {
  var mapCanvas = document.getElementById('map-canvas');
  var myLatlng = new google.maps.LatLng(lat, lng)
  var mapOptions = {
    center: myLatlng,
    zoom: 16,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
}