// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Close nav when a link is clicked (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// Simple contact form handler
// TO MAKE YOUR FORM ACTUALLY SEND EMAILS:
// 1. Go to formspree.io and create a free account
// 2. Create a new form and copy your Form ID
// 3. In contact.html, change action="#" to action="https://formspree.io/f/YOUR_ID"
// 4. Add method="POST" to the <form> tag
// 5. Delete this JS handler below — Formspree handles it for you

const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'message sent!';
    btn.style.background = '#4a8c5c';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = 'send my message';
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 3000);
  });
}
