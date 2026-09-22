(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('[data-theme-toggle]');
  const savedTheme = localStorage.getItem('office-theme');

  if (savedTheme === 'dark') root.dataset.theme = 'dark';

  const updateThemeIcon = () => {
    if (!themeButton) return;
    const isDark = root.dataset.theme === 'dark';
    themeButton.innerHTML = `<i class="fa-regular fa-${isDark ? 'sun' : 'moon'}"></i>`;
    themeButton.setAttribute('aria-label', isDark ? '切换浅色模式' : '切换深色模式');
  };

  themeButton?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('office-theme', next);
    updateThemeIcon();
  });
  updateThemeIcon();

  document.querySelectorAll('[data-speak]').forEach((button) => {
    button.addEventListener('click', () => {
      if (!('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(button.dataset.speak);
      utterance.lang = 'en-US';
      utterance.rate = 0.86;
      window.speechSynthesis.speak(utterance);
    });
  });

  const toastElement = document.querySelector('#actionToast');
  const showToast = (message) => {
    if (!toastElement || !window.bootstrap) return;
    toastElement.querySelector('.toast-body').textContent = message;
    bootstrap.Toast.getOrCreateInstance(toastElement, { delay: 1800 }).show();
  };

  document.querySelectorAll('[data-copy]').forEach((button) => {
    button.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(button.dataset.copy);
        showToast('句子已复制');
      } catch {
        showToast('复制失败，请手动选择');
      }
    });
  });

  document.querySelectorAll('[data-complete]').forEach((button) => {
    const key = `office-complete-${button.dataset.complete}`;
    const render = () => {
      const completed = localStorage.getItem(key) === 'true';
      button.classList.toggle('completed', completed);
      button.innerHTML = completed
        ? '<i class="fa-solid fa-circle-check"></i> 已学完'
        : '<i class="fa-regular fa-circle-check"></i> 标记学完';
    };
    button.addEventListener('click', () => {
      const completed = localStorage.getItem(key) === 'true';
      localStorage.setItem(key, String(!completed));
      render();
      showToast(completed ? '已取消完成标记' : '学习进度已保存');
    });
    render();
  });

  const lessonSections = [...document.querySelectorAll('[data-lesson]')];
  const tocLinks = [...document.querySelectorAll('.toc-link')];
  if (lessonSections.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      tocLinks.forEach((link) => link.classList.toggle('active', link.hash === `#${visible.target.id}`));
    }, { rootMargin: '-20% 0px -65%', threshold: [0.05, 0.3] });
    lessonSections.forEach((section) => observer.observe(section));
  }
})();
