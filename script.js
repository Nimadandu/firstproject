document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking on a link (optional)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
});

  const map = L.map("map").setView([27.7172, 85.324], 12); // Kathmandu


      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {

        attribution: "&copy; OpenStreetMap contributors",

      }).addTo(map);


      L.marker([27.7172, 85.324])

        .addTo(map)

        .bindPopup("Newroad")

        .openPopup();


