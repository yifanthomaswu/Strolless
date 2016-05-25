var map;

/*
* Takes two postcodes and a callback-function
*
* calls callback-function with duration (sec) to get from
* first to second postcode bz foot.
*/
function duration(postCode1, postCode2, callback) {
  var directionsService = new google.maps.DirectionsService();
  var directionsRequest = {
    origin: postCode1,
    destination: postCode2,
    travelMode: google.maps.TravelMode.WALKING,
    region: "GB"
  }
  directionsService.route(directionsRequest, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      dur = result.routes[0].legs[0].duration.value;
      callback(dur);
    } else {
      callback(-1);
    }
  })
}

function initMap() {
  var mapDiv = document.getElementById('map');
  map = new google.maps.Map(mapDiv, {
    center: {lat: 51.498672, lng: -0.179381},
    zoom: 15
  });
  duration("SW7 1AW", "SW7 1AE", function(dur){
    alert(dur);
  });
}



//https://developers.google.com/maps/documentation/javascript/3.exp/reference
