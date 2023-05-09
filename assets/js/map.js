function myMap() {
    var mapProp = {
        center:new google.maps.LatLng(42.12198870433121, -8.855884277004535),
        zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    } 