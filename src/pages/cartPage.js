// src/js/pages/cartPage.js

const CHECKOUT_SECRET_KEY = "YjrwMGq0PBztk2bMWN5dPqGpknd9bLfY";

// рекурсивне сортування ключів (як у Postman-скрипті)
function sortByKeyRecursive(obj) {
  const sortedObj = {};
  Object.keys(obj)
    .sort()
    .forEach((key) => {
      const value = obj[key];
      if (value && typeof value === "object" && !Array.isArray(value)) {
        sortedObj[key] = sortByKeyRecursive(value);
      } else {
        sortedObj[key] = value;
      }
    });
  return sortedObj;
}

// рекурсивне склеювання значень через :
function implodeRecursive(separator, obj) {
  let result = "";
  for (const key in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;
    const value = obj[key];

    if (value && typeof value === "object") {
      result += implodeRecursive(separator, value);
    } else {
      result += String(value) + separator;
    }
  }
  return result.slice(0, -separator.length);
}

// перетворення обʼєкта в application/x-www-form-urlencoded
function toUrlEncoded(obj) {
  return Object.keys(obj)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]))
    .join("&");
}

// SHA256 + Base64 через Web Crypto (аналог CryptoJS.SHA256 + Base64)
async function sha256Base64(str) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashBinary = String.fromCharCode(...hashArray);
  return btoa(hashBinary);
}

async function buildSignedBody(data) {
  const dataSet = { ...data };
  delete dataSet.ik_sign;

  const sortedDataSet = sortByKeyRecursive(dataSet);
  sortedDataSet.checkoutSecretKey = CHECKOUT_SECRET_KEY;

  const signString = implodeRecursive(":", sortedDataSet);
  const ikSign = await sha256Base64(signString);

  const finalData = { ...dataSet, ik_sign: ikSign };
  return toUrlEncoded(finalData);
}

export function renderCartPage(root) {
  console.log("renderCartPage: init");

  root.innerHTML = `
    <section class="cart fade-in" aria-label="Cart and checkout">
      <div class="cart__inner">

        <section class="cart-summary" aria-label="Cart items and total">
          <article class="cart-item">
            <header class="cart-item__header">
              <div>
                <h2 class="cart-item__title">Content making strategy</h2>
                <p class="cart-item__subtitle">
                  Create a content marketing plan with targeted strategies
                </p>
              </div>
              <p class="cart-item__price">€0.01</p>
            </header>

            <button type="button" class="btn btn--ghost cart-item__remove"
              aria-label="Remove item from cart">
              Remove
            </button>
          </article>

          <section class="cart-total" aria-label="Cart total">
            <span class="cart-total__label">Total</span>
            <span class="cart-total__value">€0.01</span>
          </section>

          <p class="cart__divider-text">OR</p>

          <section class="cart-express" aria-label="Express payments">
            <button class="cart-express__btn cart-express__btn--google" type="button"
              aria-label="Pay with Google Pay">
              <img src="/images/googlepay.png" alt="Google Pay" width="100" height="60">
            </button>

            <button class="cart-express__btn cart-express__btn--apple" type="button"
              aria-label="Pay with Apple Pay">
              <img src="/images/applepay.png" alt="Apple Pay" width="100" height="65">
            </button>
          </section>
        </section>

        <aside class="cart-payment" aria-label="Card payment form">
          <form class="cart-form" aria-label="Card checkout form" id="pay-form">
            <fieldset class="cart-form__fieldset">
              <label class="cart-form__label" for="card-number">Card</label>
              <input class="cart-form__input" id="card-number" name="card-number" type="text"
                  inputmode="numeric" placeholder="4 111  1111  1111  1111" required />
            </fieldset>

            <fieldset class="cart-form__fieldset">
              <div class="cart-form__row">
                <div class="cart-form__field">
                  <label class="cart-form__label" for="fname">First name</label>
                  <input class="cart-form__input" id="fname" name="fname" type="text" value="John" required />
                </div>

                <div class="cart-form__field">
                  <label class="cart-form__label" for="lname">Last name</label>
                  <input class="cart-form__input" id="lname" name="lname" type="text" value="Doe" required />
                </div>
              </div>

              <div class="cart-form__field">
                <label class="cart-form__label" for="email">Email</label>
                <input class="cart-form__input" id="email" name="email" type="email"
                    value="johndoe@mail.com" required />
              </div>
            </fieldset>

            <button type="submit" class="btn btn--primary cart-form__submit" aria-label="Pay now">
              Pay
            </button>
          </form>
        </aside>

      </div>
    </section>
  `;

  const form = document.getElementById("pay-form");
  if (!form) {
    console.warn("pay-form not found");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("Pay clicked");

    const payload = {
      ik_co_id: "6852c8a4af6d33fa482320f3",
      ik_pm_no: String(Date.now()),
      ik_am: "0.01",
      ik_desc: "1",
      ik_cur: "EUR",
      ik_int: "json",
      ik_mode: "invoice",
      ik_payment_method: "card",
      ik_payment_currency: "EUR",
      ik_fal_u: "https://www.youtube.com/",
      ik_suc_u: "https://www.google.com/",
      ik_x_browser_color_depth: "24",
      ik_x_browser_screen_height: "780",
      ik_x_browser_screen_width: "360",
      ik_x_browser_java_enabled: "false",
      ik_x_browser_language: navigator.language || "en-US",
      ik_x_browser_time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      ik_x_browser_time_zone_offset: String(-new Date().getTimezoneOffset()),
      ik_x_browser_accept_header:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
      ik_x_browser_ip_address: "127.0.0.1",
      ik_x_browser_user_agent: navigator.userAgent,
      ik_browser_java_script_enabled: "true",
      ik_act: "process"
    };

    try {
      const body = await buildSignedBody(payload);

      const response = await fetch("/unitypay", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "Basic NjdhZjIzZTQ0MGEyYjM4MmMzMDJjZDM3OjFSODFKN1h5bER1cVpuTzdvZUhQWDM2ekM5Z2RjU1V1"
        },
        body
      });

      console.log("response status:", response.status);

      if (!response.ok) {
        alert("Помилка при створенні платежу");
        return;
      }

      const data = await response.json();
      console.log("PAY RESPONSE:", data);

      const redirectUrl = data?.resultData?.paymentForm?.action;

      if (redirectUrl) {
        window.location.href = redirectUrl;
      } else {
        alert("Не знайдено URL для оплати (paymentForm.action)");
      }
    } catch (err) {
      console.error("PAY ERROR:", err);
      alert("Помилка з’єднання з платіжним сервером");
    }
  });
}
