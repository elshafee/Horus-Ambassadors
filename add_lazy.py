import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Add loading="lazy" to orbit-img if missing
content = re.sub(r'(<img[^>]*class="orbit-img"[^>]*)(?<!loading="lazy")(/?>)', r'\1 loading="lazy"\2', content)

# Add loading="lazy" to board images missing it
content = re.sub(r'(<img[^>]*src="[^"]*board/[^"]*"[^>]*)(?<!loading="lazy")(/?>)', r'\1 loading="lazy"\2', content)
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
