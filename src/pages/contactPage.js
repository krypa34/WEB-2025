// src/pages/contactPage.js

export function renderContactPage(root) {
    root.innerHTML = `
    <section class="contact fade-in" aria-labelledby="contact-title">
      <div class="contact__inner">

        <div class="contact__columns" aria-label="Helpful links">

          <article class="contact-col" aria-labelledby="col-product">
            <h2 class="contact-col__title" id="col-product">Product</h2>
            <ul class="contact-col__list">
              <li><a href="#/popular">Browse Catalog</a></li>
              <li><a href="#/popular">Popular Prompts</a></li>
              <li><a href="#/add">Add Your Prompt</a></li>
            </ul>
          </article>

          <article class="contact-col" aria-labelledby="col-company">
            <h2 class="contact-col__title" id="col-company">Company</h2>
            <ul class="contact-col__list">
              <li><a href="#">About us</a></li>
              <li><a href="#/contact">Contact</a></li>
              <li><a href="#">Affiliate Program</a></li>
            </ul>
          </article>

          <article class="contact-col" aria-labelledby="col-legal">
            <h2 class="contact-col__title" id="col-legal">Legal</h2>
            <ul class="contact-col__list">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </article>

          <article class="contact-col" aria-labelledby="col-support">
            <h2 class="contact-col__title" id="col-support">Support</h2>
            <ul class="contact-col__list">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="mailto:support@example.com">support@example.com</a></li>
            </ul>
          </article>

        </div>

        <hr class="contact__divider" />

        <section class="contact-cta" aria-labelledby="cta-title">
          <h2 class="contact-cta__title" id="cta-title">
            Ready to explore AI prompts?
          </h2>
          <p class="contact-cta__text">
            Join our platform today and unlock the full potential of AI-powered creativity.
          </p>
          <a href="#/popular" class="btn btn--primary contact-cta__btn" aria-label="Get started now">
            Get Started Now
          </a>
        </section>

      </div>
    </section>
  `;
}
