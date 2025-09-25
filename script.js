// Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile menu
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    hamburger?.addEventListener('click', () => {
      const show = mobileMenu.style.display === 'block';
      mobileMenu.style.display = show ? 'none' : 'block';
    });
    mobileMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.style.display = 'none'));

    // Theme toggle with localStorage
    const root = document.documentElement;
    const lightBtn = document.getElementById('lightBtn');
    const darkBtn = document.getElementById('darkBtn');

    function setLight(){
      document.documentElement.style.setProperty('--bg', '#f7f8fc');
      document.documentElement.style.setProperty('--bg-soft', '#ffffff');
      document.documentElement.style.setProperty('--card', 'rgba(0,0,0,0.05)');
      document.documentElement.style.setProperty('--text', '#0e1220');
      document.documentElement.style.setProperty('--muted', '#0e0e0e');
      lightBtn.classList.add('active'); darkBtn.classList.remove('active');
      localStorage.setItem('theme','light');
    }
    function setDark(){
      document.documentElement.style.setProperty('--bg', '#0b0d15');
      document.documentElement.style.setProperty('--bg-soft', '#0f1220');
      document.documentElement.style.setProperty('--card', 'rgba(255,255,255,0.06)');
      document.documentElement.style.setProperty('--text', '#e6e9f2');
      document.documentElement.style.setProperty('--muted', '#b7bfd7');
      darkBtn.classList.add('active'); lightBtn.classList.remove('active');
      localStorage.setItem('theme','dark');
    }

    lightBtn?.addEventListener('click', setLight);
    darkBtn?.addEventListener('click', setDark);

    const saved = localStorage.getItem('theme');
    if(saved === 'light') setLight();
    if(saved === 'dark') setDark();

    // Small 3D hover tilt for project cards
    document.querySelectorAll('.project').forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left; const y = e.clientY - r.top;
        const rotateY = ((x / r.width) - 0.5) * 6;
        const rotateX = -((y / r.height) - 0.5) * 6;
        card.style.transform = `translateY(-4px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(-0px) rotateX(0) rotateY(0)';
      });
      card.addEventListener('focus', () => card.style.borderColor = 'var(--ring)');
      card.addEventListener('blur', () => card.style.borderColor = 'rgba(255,255,255,.08)');
    });