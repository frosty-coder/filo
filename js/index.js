document.getElementById("h1").innerHTML = "Welcome to D-code";
window.addEventListener('DOMContentLoaded', () => {
    const aboutLink = document.getElementById('about');
    const servicesLink = document.getElementById('services');
    const contactLink = document.getElementById('contact');

    aboutLink.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('.works').scrollIntoView({
            behavior: 'smooth',
        });
    });

    servicesLink.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('.services-section').scrollIntoView({
            behavior:'smooth',
        });
        
    });

    contactLink.addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('.contact-wrapper').scrollIntoView({
            behavior:'smooth',
        });
    });
});
