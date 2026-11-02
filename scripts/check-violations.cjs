const fs = require('fs');

function checkFile(path) {
  if (!fs.existsSync(path)) {
    console.log(`[NOT FOUND] ${path}`);
    return;
  }
  const content = fs.readFileSync(path, 'utf8');
  const lines = content.split('\n');
  const zh = (content.match(/[\u4e00-\u9fa5]/g) || []).length;
  console.log(`\n=== Checking ${path} (ZH: ${zh}) ===`);

  let colonCount = 0;
  let dashCount = 0;
  let notButCount = 0;

  lines.forEach((line, i) => {
    // Check Chinese colon '：' in prose/headings
    // Skip frontmatter or code blocks if inside ```
    if (line.includes('：')) {
      colonCount++;
      console.log(`[COLON] L${i + 1}: ${line.trim()}`);
    }
    if (line.includes('——') || line.includes('— —')) {
      dashCount++;
      console.log(`[DASH] L${i + 1}: ${line.trim()}`);
    }
    if (line.includes('不是') && line.includes('而是')) {
      notButCount++;
      console.log(`[NOT...BUT] L${i + 1}: ${line.trim()}`);
    }
  });

  console.log(`Summary: colons=${colonCount}, dashes=${dashCount}, notBut=${notButCount}`);
}

const target = process.argv[2];
if (target) {
  checkFile(target);
} else {
  [
    'src/content/blog/2026-airport-recommendations.md',
    'src/content/blog/iepl-vs-iplc-vs-transit-guide.md',
    'src/content/blog/chatgpt-claude-proxy-guide.md',
    'src/content/blog/github-copilot-speedup-guide.md',
    'src/content/blog/clash-verge-rev-advanced-tutorial.md'
  ].forEach(checkFile);
}
