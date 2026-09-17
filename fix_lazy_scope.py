with open('js/main.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract lazyLoadSection to global scope
lazy_fn = """  const lazyLoadSection = (selector, initFn) => {
    const el = document.querySelector(selector);
    if (!el) return;
    const observer = new IntersectionObserver((entries, obs) => {
      if (entries[0].isIntersecting) {
        initFn();
        obs.disconnect();
      }
    }, { rootMargin: '400px' });
    observer.observe(el);
  };"""

content = content.replace(lazy_fn, '')

global_lazy_fn = """// JIT Hydration Utility
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

"""

content = content.replace('document.addEventListener("DOMContentLoaded", () => {', global_lazy_fn + 'document.addEventListener("DOMContentLoaded", () => {')

with open('js/main.js', 'w', encoding='utf-8') as f:
    f.write(content)
