document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-category'); // Wybieramy wszystkie nagłówki kategorii

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
