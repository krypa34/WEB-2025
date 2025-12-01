// src/pages/profilePage.js

export function renderProfilePage(root) {
  root.innerHTML = `
    <section class="profile fade-in" aria-labelledby="profile-title">
      <div class="profile__inner">
        <header class="profile__header">
          <h1 class="profile__title" id="profile-title">Created Prompts</h1>
        </header>

        <section class="profile__grid" aria-label="Created prompts list">
          <article class="profile-card" aria-label="HRDB job posting on LinkedIn, created 03/12/2025">
            <h2 class="profile-card__title">HRDB job posting on LinkedIn</h2>
            <p class="profile-card__date">03/12/2025</p>
          </article>

          <article class="profile-card">
            <h2 class="profile-card__title">HRDB job posting on LinkedIn</h2>
            <p class="profile-card__date">03/12/2025</p>
          </article>

          <article class="profile-card">
            <h2 class="profile-card__title">HRDB job posting on LinkedIn</h2>
            <p class="profile-card__date">03/12/2025</p>
          </article>

          <article class="profile-card">
            <h2 class="profile-card__title">HRDB job posting on LinkedIn</h2>
            <p class="profile-card__date">03/12/2025</p>
          </article>

          <article class="profile-card">
            <h2 class="profile-card__title">HRDB job posting on LinkedIn</h2>
            <p class="profile-card__date">03/12/2025</p>
          </article>

          <a class="profile-card profile-card--add" href="#/popular" aria-label="Create new prompt">
            <img src="/images/Addprompticon.png" alt="Add prompt" class="profile-card__img">
          </a>
        </section>
      </div>
    </section>
  `;
}
