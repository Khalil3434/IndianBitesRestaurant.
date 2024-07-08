// script.js
document.addEventListener("DOMContentLoaded", function() {
    const restaurants = document.querySelectorAll('.restaurant img');

    restaurants.forEach(img => {
        img.addEventListener('mouseenter', function() {
            img.style.transform = 'scale(1.1)';
        });

        img.addEventListener('mouseleave', function() {
            img.style.transform = 'scale(1)';
        });
    });
});