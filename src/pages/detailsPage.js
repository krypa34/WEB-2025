// src/pages/detailsPage.js

export function renderDetailsPage(root) {
    root.innerHTML = `
    <main class="chat">

      <aside class="chat-sidebar">
        <a href="#/popular" class="chat-sidebar__back">← Back</a>

        <div class="chat-sidebar__box">
          <h2 class="chat-sidebar__title">Topic</h2>
          <hr class="chat-sidebar__divider">

          <p class="chat-sidebar__label">Summarize:</p>
          <ul class="chat-sidebar__list">
            <li>Idea 1</li>
            <li>Idea 2</li>
            <li>Idea 3</li>
            <li>Idea 4</li>
            <li>Idea 5</li>
          </ul>
        </div>
      </aside>

      <section class="chat-window">

        <div class="chat-msg chat-msg--bot"></div>
        <div class="chat-msg chat-msg--user"></div>
        <div class="chat-msg chat-msg--bot"></div>
        <div class="chat-msg chat-msg--user"></div>

        <form class="chat-input">
          <input type="text" placeholder="...">
        </form>

      </section>
    </main>
  `;
}
