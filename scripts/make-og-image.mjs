import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const W = 1200, H = 630;
const CREAM = '#F3EBE0';
const WARM = '#E8D6BF';
const RED = '#B81C1C';
const ORANGE = '#C85A08';
const TEXT = '#141414';
const MUTED = '#3D3226';

const bg = `
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${CREAM}"/>
      <stop offset="100%" stop-color="${WARM}"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${RED}"/>
      <stop offset="100%" stop-color="${ORANGE}"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect x="0" y="0" width="${W}" height="10" fill="url(#accent)"/>
  <circle cx="1080" cy="90" r="220" fill="${RED}" opacity="0.06"/>
  <circle cx="1150" cy="520" r="160" fill="${ORANGE}" opacity="0.08"/>
  <text x="90" y="330" font-family="Georgia, serif" font-weight="800" font-size="64" fill="${TEXT}">ISO Audit Align</text>
  <text x="90" y="385" font-family="Georgia, serif" font-size="30" fill="${RED}">ISO Certification, Done Right.</text>
  <text x="90" y="440" font-family="Georgia, serif" font-size="22" fill="${MUTED}">ISO 27001 &#183; 9001 &#183; 14001 &#183; 45001 &#183; 42001 &#183; NDIS Audits</text>
  <text x="90" y="540" font-family="Georgia, serif" font-size="18" fill="${MUTED}" opacity="0.8">isoauditalign.com.au</text>
</svg>`;

const logoBuf = await sharp('C:/Users/Prash/OneDrive - isoauditalign.com.au/Documents/ISO AUDIT ALIGN/Website v2/public/images/logo.svg')
  .resize({ width: 260 })
  .png()
  .toBuffer();

await sharp(Buffer.from(bg))
  .composite([{ input: logoBuf, left: 90, top: 120 }])
  .png()
  .toFile('C:/Users/Prash/OneDrive - isoauditalign.com.au/Documents/ISO AUDIT ALIGN/Website v2/public/images/og-image.png');

console.log('og-image.png written');
