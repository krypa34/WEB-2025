// src/pages/signupPage.js

export function renderSignupPage(root) {
    root.innerHTML = `
    <section class="auth fade-in" aria-labelledby="signup-title">
      <div class="auth__inner">

        <h1 class="auth__title" id="signup-title">Sign Up</h1>
        <p class="auth__subtitle">
          Create an account to continue exploring.
        </p>

        <form class="auth__form">

          <div class="auth__field">
            <label for="signup-email" class="auth__label">Email</label>
            <input id="signup-email" type="email" class="auth__input" required>
          </div>

          <div class="auth__field">
            <label for="signup-password" class="auth__label">Password</label>
            <input id="signup-password" type="password" class="auth__input" required>
          </div>

          <div class="auth__actions">
            <button class="btn btn--primary" type="submit">Sign up</button>
          </div>

          <p class="auth__secondary">
            Already have an account?
            <a href="#/signin">Log in</a>
          </p>

        </form>

      </div>
    </section>
  `;
}
