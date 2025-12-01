// src/pages/reviewsPage.js

export function renderReviewsPage(root) {
  root.innerHTML = `
    <section class="reviews fade-in" id="reviews-list" aria-labelledby="reviews-title">
      <div class="reviews__inner">
        <h1 class="reviews__title" id="reviews-title">User Reviews</h1>

        <div class="reviews__grid" aria-label="Reviews list">

          <article class="reviews__card js-review-card">
            <img class="reviews__avatar" src="images/businesswoman.png" alt="User avatar Emily R."
                  width="60" height="60">
            <div class="reviews__meta">
              <p class="reviews__name">Emily R.</p>
              <p class="reviews__role">Content Designer</p>
            </div>
            <p class="reviews__text">
              "Great variety of prompts and a super clean interface. Love it!"
            </p>
          </article>

          <article class="reviews__card js-review-card">
            <img class="reviews__avatar" src="images/businesswoman.png" alt="User avatar" width="60" height="60">
            <div class="reviews__meta">
              <p class="reviews__name">Emily R.</p>
              <p class="reviews__role">Content Designer</p>
            </div>
            <p class="reviews__text">
              "Great variety of prompts and a super clean interface. Love it!"
            </p>
          </article>

          <article class="reviews__card js-review-card">
            <img class="reviews__avatar" src="images/businesswoman.png" alt="User avatar" width="60" height="60">
            <div class="reviews__meta">
              <p class="reviews__name">Emily R.</p>
              <p class="reviews__role">Content Designer</p>
            </div>
            <p class="reviews__text">
              "Great variety of prompts and a super clean interface. Love it!"
            </p>
          </article>

          <article class="reviews__card js-review-card">
            <img class="reviews__avatar" src="images/businesswoman.png" alt="User avatar" width="60" height="60">
            <div class="reviews__meta">
              <p class="reviews__name">Emily R.</p>
              <p class="reviews__role">Content Designer</p>
            </div>
            <p class="reviews__text">
              "Great variety of prompts and a super clean interface. Love it!"
            </p>
          </article>

          <article class="reviews__card js-review-card">
            <img class="reviews__avatar" src="images/businesswoman.png" alt="User avatar" width="60" height="60">
            <div class="reviews__meta">
              <p class="reviews__name">Emily R.</p>
              <p class="reviews__role">Content Designer</p>
            </div>
            <p class="reviews__text">
              "Great variety of prompts and a super clean interface. Love it!"
            </p>
          </article>

          <article class="reviews__card js-review-card">
            <img class="reviews__avatar" src="images/businesswoman.png" alt="User avatar" width="60" height="60">
            <div class="reviews__meta">
              <p class="reviews__name">Emily R.</p>
              <p class="reviews__role">Content Designer</p>
            </div>
            <p class="reviews__text">
              "Great variety of prompts and a super clean interface. Love it!"
            </p>
          </article>

        </div>
      </div>
    </section>

    <section class="review-detail fade-in" id="review-detail" style="display: none;">
      <div class="review-detail__inner">
        <a class="review-detail__back" href="#" id="review-back">← Back to all Reviews</a>

        <article class="review-detail__card">
          <div class="review-detail__header">
            <div class="review-detail__person">
              <img src="images/businesswoman.png" class="review-detail__avatar"
                   alt="User avatar Emily R.">
              <div>
                <p class="review-detail__name">Emily R.</p>
                <p class="review-detail__role">Content Designer</p>
              </div>
            </div>

            <p class="review-detail__date">March 12, 2025</p>
          </div>

          <p class="review-detail__text">
            "Great variety of prompts and a super clean interface. Love it!"
          </p>
        </article>
      </div>
    </section>
  `;

  // 2. Після того як HTML вставили — вішаємо обробники
  const cards = root.querySelectorAll('.js-review-card');
  const listSection = root.querySelector('#reviews-list');
  const detailSection = root.querySelector('#review-detail');
  const backLink = root.querySelector('#review-back');

  // відкриття повного відгуку
  cards.forEach(card => {
    card.addEventListener('click', () => {
      listSection.style.display = 'none';
      detailSection.style.display = 'block';
      detailSection.classList.add('fade-in');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // повернення до списку
  backLink.addEventListener('click', (event) => {
    event.preventDefault();
    detailSection.style.display = 'none';
    listSection.style.display = 'block';
    listSection.classList.add('fade-in');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
