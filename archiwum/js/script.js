document.addEventListener('DOMContentLoaded', function () {
    // Wybieramy wszystkie nagłówki kategorii (h3)
    const toggleButtons = document.querySelectorAll('.toggle-category');
    // Przycisk do przełączania widoczności sidebaru
    const toggleButton = document.getElementById('toggle-sidebar');
    const sidebar = document.getElementById('sidebar');

    // Funkcja do przełączania ukrywania sidebaru
    toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('hidden'); // Dodajemy/Usuwamy klasę "hidden"
    });

    // Dodajemy nasłuchiwacz kliknięcia dla każdego nagłówka kategorii
    toggleButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Następny element rodzeństwa (czyli lista plików ul)
            const categoryList = this.nextElementSibling;

            // Sprawdzamy, czy lista jest ukryta (ma klasę .hidden)
            if (categoryList.classList.contains('hidden')) {
                categoryList.classList.remove('hidden'); // Rozwijamy listę
            } else {
                categoryList.classList.add('hidden'); // Zwijamy listę
            }
        });
    });
});
