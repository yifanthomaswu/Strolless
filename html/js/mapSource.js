
function duration(origin, destinations, callback) {
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
        origins: [origin],
        destinations: destinations,
        travelMode: google.maps.TravelMode.WALKING,
        region: "GB"
    }, callback);
}

function showRoute(postCode1, postCode2, map) {
    var directionsService = new google.maps.DirectionsService();
    var directionsRequest = {
        origin: postCode1,
        destination: postCode2,
        travelMode: google.maps.TravelMode.WALKING,
        region: "GB"
    };
    directionsDisplay = new google.maps.DirectionsRenderer();
    directionsDisplay.setMap(map);
    directionsService.route(directionsRequest, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(result);
        }
    });
}

//https://developers.google.com/maps/documentation/javascript/3.exp/reference
