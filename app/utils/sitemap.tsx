import {
  SitemapStream,
  streamToPromise,
  SitemapItemLoose,
  EnumChangefreq,
} from "sitemap";
import { Readable } from "stream";
import * as fs from "fs";
import * as path from "path";

const links: SitemapItemLoose[] = [
  { url: "/", changefreq: EnumChangefreq.DAILY, priority: 1.0 },
];

(async () => {
  const stream = new SitemapStream({ hostname: "https://julianaijal.com" });
  const sitemap = await streamToPromise(Readable.from(links).pipe(stream)).then(
    (data: Buffer) => data.toString()
  );
  const sitemapPath = path.join(__dirname, "../public/sitemap.xml");
  fs.writeFileSync(sitemapPath, sitemap);

  console.log("Sitemap written to:", sitemapPath);
})();
