document.querySelectorAll('.toggle-category').forEach(category => {
    category.addEventListener('click', () => {
        const sublist = category.nextElementSibling;
        if (sublist && sublist.classList.contains('hidden')) {
            sublist.classList.remove('hidden');
        } else if (sublist) {
            sublist.classList.add('hidden');
        }
    });
});
