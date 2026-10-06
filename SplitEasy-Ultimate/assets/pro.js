(() => {
  const root = document.body;
  if (!root) return;

  // Persistent SplitEasy theme: every page reads the same setting.
  const savedTheme = localStorage.getItem('spliteasy-theme');
  // Match the supplied dark emerald references on first visit. Keep an explicit
  // light-mode choice across pages once the user changes it.
  if (savedTheme !== 'light') root.classList.add('dark-mode');
  else root.classList.remove('dark-mode');

  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'se-theme-toggle';
  toggle.setAttribute('aria-label', 'Switch theme');
  toggle.innerHTML = '<span class="se-theme-icon">☾</span><span class="se-theme-label">Dark mode</span>';
  const header = document.querySelector('.header,.topbar,.top-header,.calc-header');
  const headerActions = header && header.querySelector('.header-actions,.header-buttons');
  if (header) {
    (headerActions || header).appendChild(toggle);
    toggle.classList.add('se-theme-toggle-inline');
  } else {
    document.body.appendChild(toggle);
  }

  const updateThemeButton = () => {
    const dark = root.classList.contains('dark-mode');
    toggle.innerHTML = dark
      ? '<span class="se-theme-icon">☀</span><span class="se-theme-label">Light mode</span>'
      : '<span class="se-theme-icon">☾</span><span class="se-theme-label">Dark mode</span>';
    toggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
  };

  toggle.addEventListener('click', () => {
    const dark = !root.classList.contains('dark-mode');
    root.classList.toggle('dark-mode', dark);
    localStorage.setItem('spliteasy-theme', dark ? 'dark' : 'light');
    updateThemeButton();
  });
  updateThemeButton();

  const glow = document.createElement('div');
  glow.className = 'pro-glow';
  document.body.appendChild(glow);
  let raf = 0;
  window.addEventListener('pointermove', e => {
    if (window.matchMedia('(pointer:fine)').matches) {
      root.classList.add('pro-pointer');
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
      });
    }
  }, {passive:true});

  const selectors = '.card,.group-card,.member-card,.expense,.squad-card,.login-card,.faq-card,.payment-card,.section,.actions,.trust,.tour-card,.support-card,.balance-card';
  document.querySelectorAll(selectors).forEach((el,i) => {
    el.classList.add('pro-reveal');
    el.style.transitionDelay = Math.min(i*110,900)+'ms';
  });
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if(e.isIntersecting){e.target.classList.add('pro-visible');io.unobserve(e.target)}
  }), {threshold:.08});
  document.querySelectorAll('.pro-reveal').forEach(el=>io.observe(el));
})();
