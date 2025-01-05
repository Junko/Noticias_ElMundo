document.addEventListener('DOMContentLoaded', function() {
    const moreNewsLinks = document.querySelectorAll('.more-news');
    const navItems = document.querySelectorAll('.nav-item');
    const notification = document.getElementById('notification');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    function showNotification() {
        notification.style.display = 'block';
        setTimeout(() => {
            notification.style.display = 'none';
        }, 5000);
    }

    moreNewsLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showNotification();
        });
    });

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            showNotification();
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
            }
        });
    });

    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('active');
        }
    });
});