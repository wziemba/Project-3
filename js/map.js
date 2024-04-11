function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.8336, lng: -87.6275 },
    zoom: 5
});
const locations = [
  {
    position: {lat: 40.6892494, lng: -74.0470753 },
    name: "Statue of Liberty",
    icon: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
  },
  {
    position: {lat: 43.8803357, lng: -103.4563495 },
	name: "Mount Rushmore",
	icon: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
  },
  {
	position: {lat: 36.0997622, lng: -112.1227843 },
	name: "Grand Canyon",
	icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  },
]
function getRoute() {
  var request = {
    origin: { lat: 40.6892494, lng: -74.0470753 },
    destination: marker.addListener("click", () => {
		document.getElementById("location-position");
    travelMode: 'DRIVING'
  };
  directionsService.route(request, function(result, status) {
    if (status == 'OK') {
      directionsRenderer.setDirections(result);
    } else {
      alert('Route calculation failed due to ' + status);
    }
  });
}

locations.forEach((location) => {
	const marker = new google.maps.Marker({
		position: location.position,
		map: map,
		title: location.name,
		icon: location.icon,
	});
});

	