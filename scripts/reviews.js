document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.js-review-card');
    const listSection = document.getElementById('reviews-list');
    const detailSection = document.getElementById('review-detail');
    const backLink = document.getElementById('review-back');

    // Открываем полный отзыв
    cards.forEach(card => {
        card.addEventListener('click', () => {
            listSection.style.display = 'none';
            detailSection.style.display = 'block';
            detailSection.classList.add('fade-in');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Возврат к списку отзывов
    backLink.addEventListener('click', (event) => {
        event.preventDefault();
        detailSection.style.display = 'none';
        listSection.style.display = 'block';
        listSection.classList.add('fade-in');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
