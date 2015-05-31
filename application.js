$(document).ready(function(){
  $('#map-canvas').hide();


  $('#search').on('submit', function(event){
    event.preventDefault();
    var address = document.getElementById("address").value;
    var boroughForm = document.getElementById('borough');
    var borough = boroughForm.options[boroughForm.selectedIndex].text;
    $('#map-canvas').show();
    initialize(40.696110, -73.995235);


  });

})
