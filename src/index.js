// index.js
import { createHomepage } from './homepage.js';
import { createContactPage } from './contact.js';
import { createMenuPage } from './menu.js';

document.addEventListener('DOMContentLoaded', function () {
    const contentDiv = document.getElementById('content');

    // Initial homepage load
    createHomepage();

    // Tab switching logic
    const homeTab = document.getElementById('home-tab');
    const contactTab = document.getElementById('contact-tab');
    const menuTab = document.getElementById('menu-tab');

    homeTab.addEventListener('click', function () {
        clearContent();
        createHomepage();
    });

    contactTab.addEventListener('click', function () {
        clearContent();
        contentDiv.appendChild(createContactPage());
    });

    menuTab.addEventListener('click', function () {
        clearContent();
        contentDiv.appendChild(createMenuPage());
    });

    function clearContent() {
        // Clear the content of the 'contentDiv'
        while (contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        }
    }
});
