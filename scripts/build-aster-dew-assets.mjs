import sharp from "sharp";

const root = "src/assets/images/portfolio";
const sourceRoot = "private/aster-dew-source";
const packshot = `${sourceRoot}/aster-dew-packshot.png`;
const campaign = `${sourceRoot}/aster-dew-campaign.png`;
const banner = `${sourceRoot}/aster-dew-banner.png`;

const product = await sharp(packshot).png().toBuffer();
const productMeta = await sharp(product).metadata();

const crop = async (left, top, width, height, outWidth, outHeight) =>
	sharp(product)
		.extract({ left, top, width, height })
		.resize(outWidth, outHeight, { fit: "contain", background: "#ffffff" })
		.png()
		.toBuffer();

const bottle = await sharp(product)
	.extract({ left: 385, top: 55, width: 350, height: 910 })
	.resize(500, 900, { fit: "contain", background: "#ffffff" })
	.png()
	.toBuffer();

const carton = await sharp(product)
	.extract({ left: 745, top: 40, width: 405, height: 930 })
	.resize(500, 900, { fit: "contain", background: "#ffffff" })
	.png()
	.toBuffer();

const bottleDetail = await sharp(product)
	.extract({ left: 385, top: 55, width: 350, height: 910 })
	.resize(700, 420, { fit: "contain", background: "#ffffff" })
	.png()
	.toBuffer();
const cartonDetail = await sharp(product)
	.extract({ left: 745, top: 40, width: 405, height: 930 })
	.resize(700, 420, { fit: "contain", background: "#ffffff" })
	.png()
	.toBuffer();
const productPair = await sharp(product).resize(700, 900, { fit: "contain", background: "#ffffff" }).png().toBuffer();

await sharp({ create: { width: 1536, height: 1024, channels: 4, background: "#ffffff" } })
	.composite([
		{ input: productPair, left: 20, top: 62 },
		{ input: bottleDetail, left: 780, top: 62 },
		{ input: cartonDetail, left: 780, top: 542 },
		{ input: Buffer.from('<svg width="1536" height="1024" xmlns="http://www.w3.org/2000/svg"><path d="M750 40V984M780 512H1500" stroke="#deded8" stroke-width="2"/></svg>'), left: 0, top: 0 },
	])
	.webp({ quality: 88, effort: 6 })
	.toFile(`${root}/aster-dew-detail-board.webp`);

const hero = await sharp(product).resize(1200, 740, { fit: "contain", background: "#ffffff" }).png().toBuffer();
const detailBoard = await sharp(`${root}/aster-dew-detail-board.webp`).resize(1200, 760, { fit: "contain", background: "#ffffff" }).png().toBuffer();
const bannerImage = await sharp(banner).resize(1200, 570, { fit: "cover", position: "centre" }).png().toBuffer();

await sharp({ create: { width: 1200, height: 2200, channels: 4, background: "#ffffff" } })
	.composite([
		{ input: hero, left: 0, top: 0 },
		{ input: detailBoard, left: 0, top: 740 },
		{ input: bannerImage, left: 0, top: 1500 },
		{ input: Buffer.from('<svg width="1200" height="2200" xmlns="http://www.w3.org/2000/svg"><path d="M0 730H1200M0 1490H1200" stroke="#deded8" stroke-width="2"/></svg>'), left: 0, top: 0 },
	])
	.webp({ quality: 88, effort: 6 })
	.toFile(`${root}/aster-dew-detail-long.webp`);

await sharp({ create: { width: 1536, height: 1024, channels: 4, background: "#f1f2eb" } })
	.composite([
		{ input: bottle, left: 90, top: 62 },
		{ input: carton, left: 520, top: 62 },
		{ input: bottle, left: 950, top: 62 },
	])
	.webp({ quality: 88, effort: 6 })
	.toFile(`${root}/aster-dew-operations-variants.webp`);

await sharp(packshot).resize(1536, 1024, { fit: "cover" }).webp({ quality: 88, effort: 6 }).toFile(`${root}/aster-dew-packshot.webp`);
await sharp(campaign).webp({ quality: 88, effort: 6 }).toFile(`${root}/aster-dew-campaign.webp`);
await sharp(banner).webp({ quality: 88, effort: 6 }).toFile(`${root}/aster-dew-banner.webp`);

console.log(`Built Aster Dew ecommerce assets from ${packshot}`);
