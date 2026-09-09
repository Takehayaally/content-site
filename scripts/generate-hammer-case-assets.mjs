import sharp from "sharp";

const productPath = "src/assets/images/portfolio/products/hardware-hammer-hero.webp";
const scenePath = "src/assets/images/portfolio/products/hardware-hammer-scene-fixed.webp";
const detailPath = "src/assets/images/portfolio/products/hardware-hammer-detail.webp";
const longPath = "src/assets/images/portfolio/products/hardware-hammer-long-fixed.webp";

const white = { r: 255, g: 255, b: 255, alpha: 1 };
const panel = { r: 248, g: 248, b: 246, alpha: 1 };

const product = await sharp(productPath)
	.trim({ background: "#ffffff", threshold: 12 })
	.png()
	.toBuffer();

const productMeta = await sharp(product).metadata();
const productWidth = productMeta.width ?? 495;
const productHeight = productMeta.height ?? 1178;

const fullProduct = async (width, height) =>
	sharp(product)
		.resize(width, height, { fit: "contain", withoutEnlargement: false, background: white })
		.png()
		.toBuffer();

const headDetail = async (width, height) =>
	sharp(product)
		.extract({ left: 0, top: 0, width: productWidth, height: Math.min(390, productHeight) })
		.resize(width, height, { fit: "contain", background: panel })
		.png()
		.toBuffer();

const gripDetail = async (width, height) =>
	sharp(product)
		.extract({
			left: Math.round(productWidth * 0.2),
			top: Math.round(productHeight * 0.43),
			width: Math.round(productWidth * 0.6),
			height: Math.round(productHeight * 0.57),
		})
		.resize(width, height, { fit: "contain", background: panel })
		.png()
		.toBuffer();

const detailFull = await fullProduct(400, 900);
const detailHead = await headDetail(500, 430);
const detailGrip = await gripDetail(500, 430);
const dimensionProduct = await fullProduct(330, 760);

const dimensionLines = Buffer.from(`
<svg width="440" height="900" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" stroke="#737373" stroke-width="2">
    <path d="M45 54H395M45 38V70M395 38V70"/>
    <path d="M408 92V808M392 92H424M392 808H424"/>
  </g>
</svg>`);

await sharp({ create: { width: 1536, height: 1024, channels: 4, background: white } })
	.composite([
		{ input: detailFull, left: 55, top: 62 },
		{ input: detailHead, left: 500, top: 62 },
		{ input: detailGrip, left: 500, top: 532 },
		{ input: dimensionProduct, left: 1082, top: 132 },
		{ input: dimensionLines, left: 1040, top: 62 },
		{
			input: Buffer.from('<svg width="1536" height="1024" xmlns="http://www.w3.org/2000/svg"><path d="M480 62V962M1020 62V962M500 512H1000" stroke="#d8d8d4" stroke-width="2"/></svg>'),
			left: 0,
			top: 0,
		},
	])
	.webp({ quality: 88, effort: 6 })
	.toFile(detailPath);

const longHero = await fullProduct(520, 550);
const longHead = await headDetail(560, 390);
const longGrip = await gripDetail(560, 390);
const longScene = await sharp(scenePath).resize(1200, 570, { fit: "cover", position: "centre" }).png().toBuffer();

await sharp({ create: { width: 1200, height: 1600, channels: 4, background: white } })
	.composite([
		{ input: longHero, left: 340, top: 25 },
		{ input: longHead, left: 20, top: 620 },
		{ input: longGrip, left: 620, top: 620 },
		{ input: longScene, left: 0, top: 1030 },
		{
			input: Buffer.from('<svg width="1200" height="1600" xmlns="http://www.w3.org/2000/svg"><path d="M0 600H1200M600 620V1010" stroke="#d8d8d4" stroke-width="2"/></svg>'),
			left: 0,
			top: 0,
		},
	])
	.webp({ quality: 88, effort: 6 })
	.toFile(longPath);

console.log(`Generated ${detailPath} and ${longPath} from ${productPath}`);
