// JavaScript to handle dynamic interactions

document.addEventListener("DOMContentLoaded", function() {
    // Handle any JS logic or event listeners for dynamic behaviors here
    
    // Example: Highlighting the hotspots when clicked
    const hotspots = document.querySelectorAll('.hotspot');
    
    hotspots.forEach(hotspot => {
        hotspot.addEventListener('click', function(event) {
            alert('You clicked on a hotspot: ' + event.target.innerText);
        });
    });
});
