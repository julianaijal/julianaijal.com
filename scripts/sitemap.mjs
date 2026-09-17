import { SitemapStream, streamToPromise, EnumChangefreq } from 'sitemap';
import { Readable } from 'stream';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const links = [{ url: '/', changefreq: EnumChangefreq.DAILY, priority: 1.0 }];
const generateSitemap = async () => {
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const stream = new SitemapStream({ hostname: 'https://julianaijal.com' });

  const sitemap = await streamToPromise(Readable.from(links).pipe(stream)).then(
    (data) => data.toString(),
  );

  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemap);

  console.log('Sitemap written to:', sitemapPath);
};

generateSitemap();
