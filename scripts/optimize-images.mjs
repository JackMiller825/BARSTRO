import { mkdir, readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const assetsRoot = path.resolve('public/assets');
const outMap = path.resolve('src/generated/image-map.json');
const extraWidths = [192, 512, 768];

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

async function newer(source, dest) {
  try {
    const [srcStat, destStat] = await Promise.all([stat(source), stat(dest)]);
    return destStat.mtimeMs >= srcStat.mtimeMs && destStat.size > 0;
  } catch {
    return false;
  }
}

const map = {};

for await (const file of walk(assetsRoot)) {
  if (!file.toLowerCase().endsWith('.png')) continue;
  const rel = path.relative(assetsRoot, file).split(path.sep).join('/');
  const meta = await sharp(file).metadata();
  const width = meta.width ?? 0;
  const height = meta.height ?? 0;
  const fileStat = await stat(file);
  const avif = [];
  const webp = [];

  if (fileStat.size > 100_000 && width >= 256) {
    const targetWidths = [...new Set([...extraWidths.filter((item) => item < width), width])].sort(
      (a, b) => a - b,
    );
    for (const target of targetWidths) {
      const stem = rel.replace(/\.png$/, '');
      const suffix = target === width ? '' : `-${target}`;
      const webpRel = `${stem}${suffix}.webp`;
      const avifRel = `${stem}${suffix}.avif`;
      const webpPath = path.join(assetsRoot, webpRel);
      const avifPath = path.join(assetsRoot, avifRel);
      await mkdir(path.dirname(webpPath), { recursive: true });
      if (!(await newer(file, webpPath))) {
        await sharp(file)
          .resize({ width: target, withoutEnlargement: true })
          .webp({ quality: 78 })
          .toFile(webpPath);
      }
      if (!(await newer(file, avifPath))) {
        await sharp(file)
          .resize({ width: target, withoutEnlargement: true })
          .avif({ quality: 48, effort: 4 })
          .toFile(avifPath);
      }
      webp.push({ file: webpRel, width: target });
      avif.push({ file: avifRel, width: target });
    }
  }

  map[rel] = { width, height, avif, webp };
}

await mkdir(path.dirname(outMap), { recursive: true });
await writeFile(outMap, `${JSON.stringify(map, null, 2)}\n`);
console.log(`Image map updated for ${Object.keys(map).length} PNG masters.`);
