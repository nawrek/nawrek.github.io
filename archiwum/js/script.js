<script>
    document.addEventListener('DOMContentLoaded', function () {
        // Sprawdzanie, czy jesteśmy na stronie głównej
        if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
            const sidebar = document.querySelector('.sidebar');
            const toggleBtn = document.querySelector('.sidebar-toggle');  // Przyciski do rozwijania sidebaru
            const body = document.body;
            
            // Dodanie funkcji do rozwijania/ukrywania sidebaru
            toggleBtn.addEventListener('click', function() {
                sidebar.classList.toggle('hidden');
                body.classList.toggle('sidebar-visible');
            });
        }
    });
</script>
