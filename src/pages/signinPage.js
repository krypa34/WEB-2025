// src/pages/signinPage.js

export function renderSigninPage(root) {
    root.innerHTML = `
    <section class="auth fade-in" aria-labelledby="signin-title">
      <div class="auth__inner">

        <h1 class="auth__title" id="signin-title">Sign in</h1>
        <p class="auth__subtitle">
          Log in to access your saved prompts and purchases.
        </p>

        <form class="auth__form">

          <div class="auth__field">
            <label for="signin-email" class="auth__label">Email</label>
            <input id="signin-email" type="email" class="auth__input" required>
          </div>

          <div class="auth__field">
            <label for="signin-password" class="auth__label">Password</label>
            <input id="signin-password" type="password" class="auth__input" required>
          </div>

          <div class="auth__actions">
            <button class="btn btn--primary" type="submit">Authorize</button>
          </div>

          <p class="auth__secondary">
            Don't have an account?
            <a href="#/signup">Sign up</a>
          </p>

        </form>

      </div>
    </section>
  `;
}
