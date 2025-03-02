document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const closeButton = document.querySelector('.close-button');
    const sidebar = document.querySelector('.sidebar');

    menuButton.addEventListener('click', function() {
        sidebar.classList.add('active');
    });

    closeButton.addEventListener('click', function() {
        sidebar.classList.remove('active');
    });

    document.addEventListener('click', function(event) {
        if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    });
});
