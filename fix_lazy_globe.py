with open('js/main.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the DOMContentLoaded wrapper for home-globe with an IntersectionObserver
globe_old = """document.addEventListener('DOMContentLoaded', () => {
  const globe = document.getElementById('home-globe');"""

globe_new = """const initHomeGlobe = () => {
  const globe = document.getElementById('home-globe');"""

content = content.replace(globe_old, globe_new)

# The end of the globe block is around line 2465. I'll just append the observer after the function declaration.
# Let's find exactly where the globe DOMContentLoaded closes.
