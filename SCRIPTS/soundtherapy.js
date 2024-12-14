// Initialize and add the map
let map;

function initMap(lat, lng) {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: lat, lng: lng },
        zoom: 14,
    });
    
    // Place a marker at the location
    new google.maps.Marker({
        position: { lat: lat, lng: lng },
        map,
        title: "Sound Therapy Center",
    });
}

// Handle button clicks to show location on the map
document.querySelectorAll('.show-location').forEach(button => {
    button.addEventListener('click', function() {
        const lat = parseFloat(this.dataset.lat);
        const lng = parseFloat(this.dataset.lng);
        document.getElementById('map').style.display = 'block';
        initMap(lat, lng);
    });
});
