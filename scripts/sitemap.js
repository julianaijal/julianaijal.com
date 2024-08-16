const { SitemapStream, streamToPromise, EnumChangefreq } = require("sitemap");
const { Readable } = require("stream");
const fs = require("fs");
const path = require("path");
const links = [{ url: "/", changefreq: EnumChangefreq.DAILY, priority: 1.0 }];
const generateSitemap = async () => {
  const publicDir = path.join(process.cwd(), "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const stream = new SitemapStream({ hostname: "https://julianaijal.com" });

  const sitemap = await streamToPromise(Readable.from(links).pipe(stream)).then(
    (data) => data.toString()
  );

  const sitemapPath = path.join(publicDir, "sitemap.xml");
  fs.writeFileSync(sitemapPath, sitemap);

  console.log("Sitemap written to:", sitemapPath);
};

module.exports = generateSitemap;