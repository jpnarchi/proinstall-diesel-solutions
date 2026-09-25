const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => { const open = links.classList.toggle('open'); toggle.setAttribute('aria-expanded', open); });
document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', () => links.classList.remove('open')));
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
document.querySelector('#contactForm')?.addEventListener('submit', (event) => { event.preventDefault(); const form = new FormData(event.currentTarget); const status = event.currentTarget.querySelector('.form-status'); status.textContent = `Gracias, ${form.get('name')}. Tu solicitud quedó lista para compartir con Francisco. Agrega el WhatsApp o correo real para conectar el envío.`; event.currentTarget.reset(); });
