import os

files = ['achievement.html', 'event-details.html', 'events.html', 'gallery.html']

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We only want to replace href="# with href="/# for navigation links like hero, about, pillars, timeline, leadership, apply
    targets = ['hero', 'about', 'pillars', 'timeline', 'leadership', 'apply']
    for target in targets:
        content = content.replace(f'href="#{target}"', f'href="/#{target}"')
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

