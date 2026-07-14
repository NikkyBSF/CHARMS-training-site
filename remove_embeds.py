from pathlib import Path
import re

root = Path(r'c:/Users/NickCrabbe/BSN Social Care/Blue Sky Fostering Home - Blue Sky Shared/CHARMS/CHARMS website - revised')
for path in root.glob('*.html'):
    text = path.read_text(encoding='utf-8')
    new_text = re.sub(r'<video\b[^>]*>.*?</video>', '', text, flags=re.IGNORECASE | re.DOTALL)
    new_text = re.sub(r'<iframe\b[^>]*>.*?</iframe>', '', new_text, flags=re.IGNORECASE | re.DOTALL)
    if new_text != text:
        path.write_text(new_text, encoding='utf-8')
        print(path.name)
