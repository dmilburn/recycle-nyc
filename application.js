$(document).ready(function(){
  initialize(40.696110, -73.995235);

  $('#search').on('submit', function(event){
    event.preventDefault();
    var address = document.getElementById("address").value;
    var boroughForm = document.getElementById('borough');
    var borough = boroughForm.options[boroughForm.selectedIndex].text;
    console.log(borough)
  });

})
