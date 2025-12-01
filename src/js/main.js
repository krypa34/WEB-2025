import '../styles/main.scss';

import { renderHeader } from '../components/header.js';
import { renderHomePage } from '../pages/homePage.js';
import { renderPopularPage } from '../pages/popularPage.js';
import { renderReviewsPage } from '../pages/reviewsPage.js';
import { renderProfilePage } from '../pages/profilePage.js';
import { renderSigninPage } from '../pages/signinPage.js';
import { renderSignupPage } from '../pages/signupPage.js';
import { renderContactPage } from '../pages/contactPage.js';
import { renderDetailsPage } from '../pages/detailsPage.js';
import { renderCartPage } from '../pages/cartPage.js';


const app = document.getElementById('app');
const headerRoot = document.getElementById('app-header');

function router() {
    const hash = location.hash;

    if (hash === '#/popular') {
        headerRoot.innerHTML = renderHeader('inner');
        renderPopularPage(app);

    } else if (hash === '#/reviews') {
        headerRoot.innerHTML = renderHeader('inner');
        renderReviewsPage(app);

    } else if (hash === '#/profile') {
        headerRoot.innerHTML = renderHeader('inner');
        renderProfilePage(app);

    } else if (hash === '#/contact') {
        headerRoot.innerHTML = renderHeader('inner');
        renderContactPage(app);

    } else if (hash === '#/cart') {
        headerRoot.innerHTML = renderHeader('inner');
        renderCartPage(app);

    } else if (hash === '#/details') {
        headerRoot.innerHTML = renderHeader('inner');
        renderDetailsPage(app);

    } else if (hash === '#/signin') {
        headerRoot.innerHTML = renderHeader('home');
        renderSigninPage(app);

    } else if (hash === '#/signup') {
        headerRoot.innerHTML = renderHeader('home');
        renderSignupPage(app);

    } else {
        headerRoot.innerHTML = renderHeader('home');
        renderHomePage(app);
    }
}

window.addEventListener('hashchange', router);
router();
