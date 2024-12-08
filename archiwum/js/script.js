document.addEventListener('DOMContentLoaded', function () {
    // Wybieramy wszystkie nagłówki kategorii (h3)
    const toggleButtons = document.querySelectorAll('.toggle-category');
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