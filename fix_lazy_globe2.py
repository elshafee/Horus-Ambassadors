with open('js/main.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("document.addEventListener('DOMContentLoaded', () => {\n  const globe = document.getElementById('home-globe');", "lazyLoadSection('#home-globe-container', () => {\n  const globe = document.getElementById('home-globe');")
content = content.replace("document.addEventListener('DOMContentLoaded', () => {\n  const leadershipSection", "lazyLoadSection('#leadership', () => {\n  const leadershipSection")

with open('js/main.js', 'w', encoding='utf-8') as f:
    f.write(content)
