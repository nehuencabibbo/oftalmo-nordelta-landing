import sharp from 'sharp';
import { readFile } from 'fs/promises';

async function convertLogos() {
  // Convert social media logo (1200x630)
import sharp from 'sharp';
import { readFile } from 'fs/promises';

async function convertLogos() {
  // Convert social media logo (1200x630)
  const socialSvg = await readFile('./public/logo-social.svg');
  await sharp(socialSvg)
    .resize(1200, 630)
    .png()
    .toFile('./public/logo-social.png');

  console.log('✓ Created logo-social.png (1200x630)');

  // Convert square logo (512x512)
  const squareSvg = await readFile('./public/logo-square.svg');
  await sharp(squareSvg)
    .resize(512, 512)
    .png()
    .toFile('./public/logo-square.png');

  console.log('✓ Created logo-square.png (512x512)');

  // Also create a JPG version for the social media (better compatibility)
  await sharp(socialSvg)
    .resize(1200, 630)
    .jpeg({ quality: 90 })
    .toFile('./public/logo-new.jpg');

  console.log('✓ Created logo-new.jpg (1200x630)');
}

convertLogos().catch(console.error);
  await sharp(socialSvg)
    .resize(1200, 630)
    .png()
    .toFile('./public/logo-social.png');

  console.log('✓ Created logo-social.png (1200x630)');

  // Convert square logo (512x512)
  const squareSvg = readFileSync('./public/logo-square.svg');
  await sharp(squareSvg)
    .resize(512, 512)
    .png()
    .toFile('./public/logo-square.png');

  console.log('✓ Created logo-square.png (512x512)');

  // Also create a JPG version for the social media (better compatibility)
  await sharp(socialSvg)
    .resize(1200, 630)
    .jpeg({ quality: 90 })
    .toFile('./public/logo-new.jpg');

  console.log('✓ Created logo-new.jpg (1200x630)');
}

convertLogos().catch(console.error);
