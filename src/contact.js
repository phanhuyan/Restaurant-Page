// contact.js

export function createContactPage() {
    const contactDiv = document.createElement('div');
    contactDiv.id = 'contact-tab';
    contactDiv.innerHTML = `
        <h2>Contact Us</h2>
        <p>Reach out to us for reservations, inquiries, or any other questions you may have.</p>
        <p>Email: info@restaurantname.com</p>
        <p>Phone: (123) 456-7890</p>
    `;
    return contactDiv;
}
