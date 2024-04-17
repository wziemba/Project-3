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

let currentSlide = 0;
const images = [
    'images/mariogalaxy.png',
    'images/galaxy.jpg',
    'images/Rosalinabook.webp',
];

function showSlide(index) {
    currentSlide = index;
    if (currentSlide >= images.length) { currentSlide = 0; }
    if (currentSlide < 0) { currentSlide = images.length - 1; }
    document.getElementById('slideImg').src = images[currentSlide];
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

document.getElementById('slideLeft').addEventListener('click', function() {
    changeSlide(-1);
});

document.getElementById('slideRight').addEventListener('click', function() {
    changeSlide(1);
});
	