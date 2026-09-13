import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const src = readFileSync(process.argv[2], 'utf8');
const outDir = process.argv[3];
mkdirSync(outDir, { recursive: true });

// Match <img class="client-logo" src="data:image/TYPE;base64,DATA" alt="NAME logo"
const re = /<img class="client-logo" src="data:image\/(png|jpeg);base64,([A-Za-z0-9+/=]+)" alt="([^"]+)"/g;
const seen = new Set();
let m;
const slugMap = {
  'Alcro logo': 'alcro',
  'CKI Group logo': 'cki',
  'Allcare Nursing & Community Services logo': 'allcare-nursing',
  'W&E Platt Mounts & Ordnance logo': 'we-platt',
  'A.G. Coombs logo': 'ag-coombs',
  'IntoWork Australia logo': 'intowork',
  'efex logo': 'efex',
  'IT.Strategic logo': 'it-strategic',
  'DMS logo': 'dms',
  'Datcom logo': 'datcom',
  'Divination by G.Sha logo': 'divination-gsha',
};

while ((m = re.exec(src))) {
  const [, type, data, alt] = m;
  const slug = slugMap[alt];
  if (!slug || seen.has(slug)) continue;
  seen.add(slug);
  const ext = type === 'jpeg' ? 'jpg' : 'png';
  const buf = Buffer.from(data, 'base64');
  writeFileSync(`${outDir}/${slug}.${ext}`, buf);
  console.log(`${slug}.${ext}`, buf.length, 'bytes');
}
console.log('Extracted:', seen.size, 'logos');
