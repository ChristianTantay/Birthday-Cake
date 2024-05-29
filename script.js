// Show the popup when the page loads
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('popup').style.display = 'flex';
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

// Close the popup when clicking outside of the popup content
window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
});