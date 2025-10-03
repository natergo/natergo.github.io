(function(){
    const root = document.documentElement;
    const btn = document.getElementById('theme-toggle');
    const KEY = 'site-theme-preference';
    function applyTheme(pref){
      if(pref === 'system' || !pref){
        root.removeAttribute('data-theme');
        localStorage.removeItem(KEY);
      } else {
        root.setAttribute('data-theme', pref);
        localStorage.setItem(KEY, pref);
      }
      btn.textContent = pref ? pref[0].toUpperCase()+pref.slice(1) : 'System';
      btn.setAttribute('aria-pressed', pref === 'dark');
    }
    const saved = localStorage.getItem(KEY);
    applyTheme(saved || 'system');
    btn.addEventListener('click', () => {
      const current = localStorage.getItem(KEY) || 'system';
      const next = current === 'system' ? 'dark' : current === 'dark' ? 'light' : 'system';
      applyTheme(next);
    });
  })();