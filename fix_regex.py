with open('js/main.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the regex: replace `^\\//` with `^\//`
content = content.replace(r'/^\\//', r'/^\//')

with open('js/main.js', 'w', encoding='utf-8') as f:
    f.write(content)
