(function () {
  const nav = document.querySelector('.navbar');
  addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 10), { passive: true });

  // Hauteur réelle de l'en-tête fixe -> padding du body (téléphone, tablette, ordinateur)
  const hdr = document.querySelector('header');
  const setH = () => { if (document.getElementById('nv')?.classList.contains('show')) return; document.documentElement.style.setProperty('--hh', hdr.offsetHeight + 'px'); };
  setH(); addEventListener('resize', setH); addEventListener('load', setH);
  document.getElementById('nv')?.addEventListener('hidden.bs.collapse', setH);
  // Ferme le menu mobile après un clic sur un lien
  document.querySelectorAll('#nv .nav-link').forEach(a => a.addEventListener('click', () => {
    const el = document.getElementById('nv');
    if (el.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(el).hide();
  }));

  // Lien de navigation actif
  const cur = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar .nav-link').forEach(a => {
    if (a.getAttribute('href') === cur) a.classList.add('active');
  });

  // Compteurs animés
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    io.unobserve(e.target);
    const el = e.target, to = +el.dataset.count, suf = el.dataset.suffix || '', pre = el.dataset.prefix || '';
    let n = 0;
    const t = setInterval(() => { n += Math.ceil(to / 40); if (n >= to) { n = to; clearInterval(t); } el.textContent = pre + n + suf; }, 30);
  }), { threshold: .5 });
  document.querySelectorAll('[data-count]').forEach(el => io.observe(el));

  // Filtres (réalisations / pôles de services)
  function filtre(btnSel, itemSel, hideClass) {
    document.querySelectorAll(btnSel).forEach(b => b.addEventListener('click', () => {
      document.querySelectorAll(btnSel).forEach(x => x.classList.remove('active'));
      b.classList.add('active');
      document.querySelectorAll(itemSel).forEach(p => p.classList.toggle(hideClass, b.dataset.f !== 'all' && p.dataset.cat !== b.dataset.f));
    }));
  }
  filtre('.filter-btn', '.proj', 'hide');
  filtre('.pole-filter', '.pole-row', 'd-none');

  // Formulaires de devis : validation Bootstrap + envoi WhatsApp
  document.querySelectorAll('form.devis').forEach(f => f.addEventListener('submit', e => {
    e.preventDefault();
    f.classList.add('was-validated');
    if (!f.checkValidity()) return;
    let m = 'Demande de devis Nova BTP\n';
    new FormData(f).forEach((v, k) => { if (v && typeof v === 'string') m += k + ' : ' + v + '\n'; });
    f.querySelector('.ok').classList.add('show');
    window.open('https://wa.me/23568383708?text=' + encodeURIComponent(m), '_blank');
    f.reset(); f.classList.remove('was-validated');
  }));
})();
