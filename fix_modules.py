import os

files = ['achievement.html', 'event-details.html', 'events.html']

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = content.replace('<script src="js/', '<script type="module" src="/js/')
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

