with open('js/main.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Inject lazyLoadSection utility
lazy_utility = """
  // JIT Hydration Utility
  const lazyLoadSection = (selector, initFn) => {
    const el = document.querySelector(selector);
    if (!el) return;
    const observer = new IntersectionObserver((entries, obs) => {
      if (entries[0].isIntersecting) {
        initFn();
        obs.disconnect();
      }
    }, { rootMargin: '400px' });
    observer.observe(el);
  };

  // Gallery & filters"""

content = content.replace('  // Gallery & filters', lazy_utility)

# Wrap Gallery
content = content.replace('  initGalleryFilters();\n  renderGallery();', 
  '  lazyLoadSection("#gallery", () => {\n    initGalleryFilters();\n    renderGallery();\n  });')

# Wrap Stats Counters (optional but good)
content = content.replace('  initStatsCounter();',
  '  lazyLoadSection(".stats-section", () => {\n    initStatsCounter();\n  });')

# Wrap Fame Tabs
content = content.replace('  initFameTabs();',
  '  lazyLoadSection("#hall-of-fame", () => {\n    initFameTabs();\n  });')

# Wrap Leadership
content = content.replace('  initLeadershipTabs();',
  '  lazyLoadSection("#leadership", () => {\n    initLeadershipTabs();\n  });')

with open('js/main.js', 'w', encoding='utf-8') as f:
    f.write(content)
