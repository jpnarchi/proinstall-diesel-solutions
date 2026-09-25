const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
toggle?.addEventListener('click', () => { const open = links.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); });
document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', () => links.classList.remove('open')));

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

document.querySelectorAll('.solution-tab').forEach((tab) => tab.addEventListener('click', () => {
  document.querySelectorAll('.solution-tab').forEach((item) => item.classList.remove('active'));
  document.querySelectorAll('.solution-panel').forEach((panel) => panel.classList.add('is-hidden'));
  tab.classList.add('active');
  document.querySelector(`#${tab.dataset.panel}`)?.classList.remove('is-hidden');
}));

document.querySelector('#contactForm')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const status = event.currentTarget.querySelector('.form-status');
  status.textContent = `Gracias, ${form.get('name')}. Recibimos los datos de tu ${form.get('unit')}. Francisco podrá revisar tu caso y contactarte.`;
  event.currentTarget.reset();
});
