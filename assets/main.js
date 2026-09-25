/* ProInstall And Diesel Solutions — interacciones del sitio */
(function () {
  'use strict';

  /* Reveal al hacer scroll (mejora progresiva: sin JS todo queda visible) */
  document.documentElement.classList.add('reveal-ready');

  document.addEventListener('DOMContentLoaded', function () {
    /* ---- Navegación móvil ---- */
    var nav = document.querySelector('.main-nav');
    var toggle = document.querySelector('.nav-toggle');
    var backdrop = document.querySelector('.nav-backdrop');

    function closeNav() {
      if (!nav) return;
      nav.classList.remove('open');
      if (backdrop) backdrop.classList.remove('show');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }

    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        var open = nav.classList.toggle('open');
        if (backdrop) backdrop.classList.toggle('show', open);
        toggle.setAttribute('aria-expanded', String(open));
        document.body.style.overflow = open ? 'hidden' : '';
      });
    }
    if (backdrop) backdrop.addEventListener('click', closeNav);
    var navClose = document.querySelector('.nav-close');
    if (navClose) navClose.addEventListener('click', closeNav);
    nav && nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeNav); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeNav(); });

    /* ---- Header con sombra al hacer scroll + botón volver arriba ---- */
    var header = document.querySelector('.header');
    var backTop = document.querySelector('.back-top');
    function onScroll() {
      var y = window.scrollY || window.pageYOffset;
      if (header) header.classList.toggle('scrolled', y > 10);
      if (backTop) backTop.classList.toggle('visible', y > 600);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    if (backTop) backTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

    /* ---- Reveal ---- */
    var revealables = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && revealables.length) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) { entry.target.classList.add('visible'); io.unobserve(entry.target); }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      revealables.forEach(function (el) { io.observe(el); });
    } else {
      revealables.forEach(function (el) { el.classList.add('visible'); });
    }

    /* ---- Acordeón de preguntas frecuentes ---- */
    document.querySelectorAll('.faq-q').forEach(function (q) {
      q.addEventListener('click', function () {
        var item = q.closest('.faq-item');
        var open = item.classList.toggle('open');
        q.setAttribute('aria-expanded', String(open));
      });
    });

    /* ---- Filtros del catálogo de motores ---- */
    var chips = document.querySelectorAll('.filter-chip');
    if (chips.length) {
      chips.forEach(function (chip) {
        chip.addEventListener('click', function () {
          var filter = chip.dataset.filter;
          chips.forEach(function (c) { c.classList.remove('active'); });
          chip.classList.add('active');
          document.querySelectorAll('[data-category]').forEach(function (card) {
            var match = filter === 'todos' || card.dataset.category.split(' ').indexOf(filter) !== -1;
            card.classList.toggle('hidden', !match);
          });
          document.querySelectorAll('.group-block').forEach(function (block) {
            var visible = block.querySelectorAll('[data-category]:not(.hidden)').length;
            block.style.display = visible ? '' : 'none';
          });
        });
      });
    }

    /* ---- Formulario de contacto: abre WhatsApp con el mensaje armado ---- */
    var form = document.querySelector('#contactForm');
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var data = new FormData(form);
        var status = form.querySelector('.form-status');
        var lineas = [
          'Hola ProInstall, soy ' + (data.get('nombre') || '') + '.',
          data.get('empresa') ? 'Empresa: ' + data.get('empresa') : '',
          'Unidad / motor: ' + (data.get('unidad') || ''),
          'Servicio: ' + (data.get('servicio') || ''),
          'Teléfono: ' + (data.get('telefono') || ''),
          data.get('correo') ? 'Correo: ' + data.get('correo') : '',
          '',
          data.get('mensaje') || ''
        ].filter(Boolean);
        var url = form.dataset.whatsapp + '?text=' + encodeURIComponent(lineas.join('\n'));
        if (status) status.textContent = 'Abriendo WhatsApp con tu solicitud…';
        window.open(url, '_blank', 'noopener');
      });
    }
  });
})();
