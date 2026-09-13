import sharp from 'sharp';

const logo = 'public/images/logo.svg';
// pad the logo onto a square canvas with brand cream background so it isn't cropped
async function squareIcon(size, out) {
  const pad = Math.round(size * 0.12);
  const inner = size - pad * 2;
  const logoBuf = await sharp(logo).resize({ width: inner, height: inner, fit: 'contain' }).png().toBuffer();
  await sharp({ create: { width: size, height: size, channels: 4, background: '#F3EBE0' } })
    .composite([{ input: logoBuf, gravity: 'center' }])
    .png()
    .toFile(out);
  console.log(out);
}

await squareIcon(16, 'public/favicon-16.png');
await squareIcon(32, 'public/favicon-32.png');
await squareIcon(180, 'public/apple-touch-icon.png');
await squareIcon(192, 'public/icon-192.png');
await squareIcon(512, 'public/icon-512.png');
console.log('favicons done');
