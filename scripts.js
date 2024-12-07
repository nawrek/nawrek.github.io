function toggleCategory(category) {
    // Ukryj wszystkie sekcje
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Pokaż wybraną sekcję
    const selectedSection = document.getElementById(category);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
}
