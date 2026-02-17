// This starts the animations as you scroll down the page
AOS.init({ 
    duration: 1000, 
    once: true 
});

// This handles the "Thank You" message when someone books a table
document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input').value;
    this.innerHTML = `
        <div style="text-align:center; padding: 20px;">
            <h3 style="color: white;">Merci, ${name}!</h3>
            <p>Your request for Sacrée Fleur has been sent.</p>
        </div>`;
});
