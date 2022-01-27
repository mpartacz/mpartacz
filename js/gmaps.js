var map;
window.initMap = function(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 50.1929,
      lng: 21.4787
    },
    zoom: 12
  });
}
