export function createHomepage() {
    const contentDiv = document.getElementById('content');

    // Create header
    const header = document.createElement('header');
    header.style.backgroundColor = '#333';
    header.style.color = '#fff';
    header.style.padding = '1em';
    header.innerHTML = '<h1>Welcome to Restaurant Name</h1>';
    contentDiv.appendChild(header);

    // Create restaurant image
    const restaurantImage = document.createElement('img');
    restaurantImage.id = 'restaurant-image';
    restaurantImage.src = 'restaurant-image.jpg'; // Replace with your image filename or URL
    restaurantImage.alt = 'Restaurant Interior';
    restaurantImage.style.maxWidth = '100%';
    restaurantImage.style.height = 'auto';
    restaurantImage.style.margin = '1em 0';
    contentDiv.appendChild(restaurantImage);

    // Create restaurant info
    const restaurantInfo = document.createElement('div');
    restaurantInfo.id = 'restaurant-info';
    restaurantInfo.style.maxWidth = '800px';
    restaurantInfo.style.margin = '0 auto';
    restaurantInfo.style.padding = '1em';
    restaurantInfo.innerHTML = `
        <p>Discover a culinary journey like no other at Restaurant Name. Our chefs create mouthwatering dishes using the finest ingredients, providing a dining experience that will leave you craving for more.</p>
        <p>Indulge in a cozy ambiance, impeccable service, and a menu that caters to every palate. Whether you're a food enthusiast or just looking for a delightful meal, we have something special for you.</p>
    `;
    contentDiv.appendChild(restaurantInfo);
}
