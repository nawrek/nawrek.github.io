document.addEventListener('DOMContentLoaded', function () {
    // Wybieramy wszystkie nagłówki kategorii
    const toggleButtons = document.querySelectorAll('.toggle-category');

    // Dodajemy nasłuchiwacz na kliknięcie dla każdego nagłówka kategorii
    toggleButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const categoryList = this.nextElementSibling; // Lista plików, która jest następnym elementem po nagłówku
            if (categoryList.classList.contains('hidden')) {
                categoryList.classList.remove('hidden'); // Rozwijamy listę
            } else {
                categoryList.classList.add('hidden'); // Zwijamy listę
            }
        });
    });
});
