// menu.js

export function createMenuPage() {
    const menuDiv = document.createElement('div');
    menuDiv.id = 'menu-tab';
    menuDiv.innerHTML = `
        <h2>Menu</h2>
        <p>Explore our delightful menu offering a variety of dishes made with the freshest ingredients.</p>
        <ul>
            <li>Appetizers</li>
            <li>Main Courses</li>
            <li>Desserts</li>
        </ul>
    `;
    return menuDiv;
}
