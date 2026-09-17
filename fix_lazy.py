with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the broken tags: "/ loading="lazy">" -> " loading="lazy" />"
content = content.replace('/ loading="lazy">', 'loading="lazy" />')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
