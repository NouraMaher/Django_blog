// Custom JavaScript for the blog
document.addEventListener('DOMContentLoaded', function() {
    console.log('Blog loaded successfully!');
    
    // Auto-hide alerts after 5 seconds
    const alerts = document.querySelectorAll('.alert-dismissible');
    alerts.forEach(function(alert) {
        setTimeout(function() {
            if (alert) {
                alert.classList.remove('show');
                setTimeout(function() {
                    alert.remove();
                }, 150);
            }
        }, 5000);
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});