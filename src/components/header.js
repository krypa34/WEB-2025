export function renderHeader(type = 'home') {
    if (type === 'home') {
        return `
      <header class="header u-no-print">
        <div class="header__inner">

          <a href="#/" class="header__logo">AI Prompt Marketplace</a>

          <nav class="header__nav">
            <ul class="header__nav-list">
              <li><a class="header__nav-link" href="#/reviews">Reviews</a></li>
              <li><a class="header__nav-link" href="#/popular">Popular Prompts</a></li>
              <li><a class="header__nav-link" href="#/contact">Contact</a></li>
              <li><a class="header__nav-link" href="#/cart">Cart</a></li>
            </ul>
          </nav>

          <div class="header__auth">
            <a href="#/signin" class="btn btn--ghost btn--sm">Sign in</a>
          </div>

        </div>
      </header>
    `;
    }

    // INNER PAGES HEADER
    return `
    <header class="header u-no-print">
      <div class="header__inner">

        <a href="#/" class="header__logo">AI Prompt Marketplace</a>

        <nav class="header__nav">
          <ul class="header__nav-list">
            <li><a class="header__nav-link" href="#/reviews">Reviews</a></li>
            <li><a class="header__nav-link" href="#/popular">Popular Prompts</a></li>
            <li><a class="header__nav-link" href="#/contact">Contact</a></li>
            <li><a class="header__nav-link" href="#/cart">Cart</a></li>
          </ul>
        </nav>

        <div class="header__auth">
          <a href="#/profile" class="header__avatar">
            <img src="images/User.png" alt="User avatar" width="36" height="36">
          </a>
        </div>

      </div>
    </header>
  `;
}
