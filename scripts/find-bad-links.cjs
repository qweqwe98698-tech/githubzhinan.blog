const fs = require('fs');

const files = [
  'src/content/blog/2026-airport-recommendations.md',
  'src/content/blog/iepl-vs-iplc-vs-transit-guide.md',
  'src/content/blog/chatgpt-claude-proxy-guide.md',
  'src/content/blog/github-copilot-speedup-guide.md',
  'src/content/blog/clash-verge-rev-advanced-tutorial.md'
];

let inCodeBlock = false;

files.forEach(f => {
  if (!fs.existsSync(f)) return;
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  inCodeBlock = false;
  lines.forEach((l, i) => {
    if (l.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      return;
    }
    if (inCodeBlock) return;
    const matches = l.match(/https?:\/\/[^\s`\)]+/g);
    if (matches) {
      matches.forEach(m => {
        if (!l.includes(`](${m}`)) {
          console.log(`Bare URL in ${f} L${i+1}: ${m}`);
        }
      });
    }
  });
});
