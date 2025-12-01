// src/js/pages/homePage.js
export function renderHomePage(root) {
    root.innerHTML = `
    <section class="hero fade-in" aria-labelledby="hero-title">
      <article class="hero__content">
        <p class="hero__eyebrow">Top prompts</p>

        <h1 class="hero__title" id="hero-title">
          Find the perfect AI prompts for any task
        </h1>

        <p class="hero__subtitle">
          Browse, discover, and get high-quality prompts tailored to your needs.
        </p>

        <div class="hero__actions">
          <a href="#/popular" class="btn btn--primary" aria-label="View Catalog">
            View Catalog
          </a>
          <a href="#/profile" class="btn btn--ghost" aria-label="Add Your Prompt">
            Add Your Prompt
          </a>
        </div>
      </article>

      <aside class="hero__media" aria-label="Hero Illustration">
        <picture class="hero__image">
          <source srcset="images/hero.webp" type="image/webp">
          <img src="images/hero.png" alt="AI bot">
        </picture>
      </aside>
    </section>
  `;
}
