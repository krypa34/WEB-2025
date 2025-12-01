// src/pages/popularPage.js
import { promptService } from "../js/api/PromptService.js";

const PAGE_LIMIT = 6;

export async function renderPopularPage(root) {
  console.log("renderPopularPage: init");

  root.innerHTML = `
    <section class="prompts fade-in" aria-labelledby="popular-title">
      <h1 class="prompts__title" id="popular-title">Popular Prompts</h1>

      <form class="prompts__filters" id="prompts-filters">
        <input type="text" id="filter-search" placeholder="Search by title..." />
        <input type="number" id="filter-min" placeholder="Min price" />
        <input type="number" id="filter-max" placeholder="Max price" />
        <select id="filter-sort">
          <option value="price_asc">Price ↑</option>
          <option value="price_desc">Price ↓</option>
          <option value="rating_desc">Rating</option>
        </select>
        <button type="submit" class="btn btn--primary">Apply</button>
      </form>

      <div class="prompts__grid" id="prompts-grid"></div>

      <div class="prompts__pagination">
        <button type="button" class="btn btn--ghost" id="prompts-prev">Prev</button>
        <button type="button" class="btn btn--ghost" id="prompts-next">Next</button>
      </div>
    </section>

    <!-- HOW IT WORKS, як було раніше -->
    <section class="how fade-in" aria-labelledby="how-title">
      <h2 class="how__title" id="how-title">How It Works</h2>

      <div class="how__steps">
        <div class="how-step">
          <img src="../public/images/browse.png" class="how-step__icon">
          <p class="how-step__label"><strong>1. Browse</strong></p>
        </div>
        <div class="how-step">
          <img src="../public/images/preview.png" class="how-step__icon">
          <p class="how-step__label"><strong>2. Preview</strong></p>
        </div>
        <div class="how-step">
          <img src="../public/images/cart.png" class="how-step__icon">
          <p class="how-step__label"><strong>3. Add to Cart</strong></p>
        </div>
        <div class="how-step">
          <img src="../public/images/download.png" class="how-step__icon">
          <p class="how-step__label"><strong>4. Get It</strong></p>
        </div>
      </div>
    </section>
  `;

  const state = {
    page: 1,
    limit: PAGE_LIMIT,
    search: "",
    minPrice: "",
    maxPrice: "",
    sort: "price_asc",
    total: 0
  };

  const gridEl = document.getElementById("prompts-grid");
  const filtersForm = document.getElementById("prompts-filters");
  const prevBtn = document.getElementById("prompts-prev");
  const nextBtn = document.getElementById("prompts-next");

  async function loadPrompts() {
    try {
      const params = {
        _page: state.page,
        _limit: state.limit
      };

      if (state.search) params.q = state.search;
      if (state.minPrice) params.price_gte = state.minPrice;
      if (state.maxPrice) params.price_lte = state.maxPrice;

      const [sortField, sortDir] = state.sort.split("_");
      params._sort = sortField;
      params._order = sortDir;

      gridEl.innerHTML = `<p>Loading...</p>`;

      const { list, total } = await promptService.getPrompts(params);
      state.total = total;

      renderCards(list);
      updatePagination();
    } catch (err) {
      console.error("Error loading prompts", err);
      gridEl.innerHTML = `<p style="color:red;">Error loading data. Try again later.</p>`;
    }
  }

  function renderCards(prompts) {
    if (!Array.isArray(prompts) || prompts.length === 0) {
      gridEl.innerHTML = `<p>No prompts found.</p>`;
      return;
    }

    const cardsHtml = prompts
      .map(
        (p) => `
        <article class="prompt-card">
          <h2 class="prompt-card__title">${p.title}</h2>
          <p class="prompt-card__text">
            Rating: ${p.rating ?? "-"} • Price: ${p.price}$
          </p>
          <span class="prompt-card__tag">Prompt #${p.id}</span>
          <div class="prompt-card__actions">
            <a href="#/details" class="prompt-card__link">View Details</a>
            <a href="#/cart" class="prompt-card__link">Add to Cart</a>
          </div>
        </article>
      `
      )
      .join("");

    gridEl.innerHTML = cardsHtml;
  }

  function updatePagination() {
    const totalPages = Math.ceil(state.total / state.limit) || 1;
    prevBtn.disabled = state.page <= 1;
    nextBtn.disabled = state.page >= totalPages;
  }

  filtersForm.addEventListener("submit", (e) => {
    e.preventDefault();
    state.search = document.getElementById("filter-search").value.trim();
    state.minPrice = document.getElementById("filter-min").value;
    state.maxPrice = document.getElementById("filter-max").value;
    state.sort = document.getElementById("filter-sort").value;
    state.page = 1;
    loadPrompts();
  });

  prevBtn.addEventListener("click", () => {
    if (state.page > 1) {
      state.page--;
      loadPrompts();
    }
  });

  nextBtn.addEventListener("click", () => {
    const totalPages = Math.ceil(state.total / state.limit) || 1;
    if (state.page < totalPages) {
      state.page++;
      loadPrompts();
    }
  });

  await loadPrompts();
}
