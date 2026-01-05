#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, '..', 'src', 'assets');
const outputDir = assetsDir;

// Configuration for different image types
const imageConfigs = {
  // Large images that need responsive variants
  'mamus-frente.png': {
    sizes: [
      { width: 400, suffix: '-mobile' },
      { width: 600, suffix: '-tablet' },
      { width: 800, suffix: '-desktop' },
      { width: 1200, suffix: '-xl' }
    ],
    quality: 85
  },
  'consultorio-panoramica.jpeg': {
    sizes: [
      { width: 640, suffix: '-mobile' },
      { width: 1024, suffix: '-tablet' },
      { width: 1920, suffix: '-desktop' }
    ],
    quality: 82
  },
  'consultorio-entrada.jpeg': {
    sizes: [
      { width: 640, suffix: '-mobile' },
      { width: 1024, suffix: '-tablet' },
      { width: 1600, suffix: '-desktop' }
    ],
    quality: 82
  },
  // Logos - single optimized version
  'hospital-italiano-logo.png': {
    sizes: [{ width: 464, suffix: '' }],
    quality: 90
  },
  'medicus-logo.png': {
    sizes: [{ width: 800, suffix: '' }],
    quality: 90
  },
  'osde-logo.png': {
    sizes: [{ width: 427, suffix: '' }],
    quality: 90
  },
  'omint-logo.png': {
    sizes: [{ width: 807, suffix: '' }],
    quality: 90
  },
  // Small images
  'qr-contacto.jpeg': {
    sizes: [{ width: 275, suffix: '' }],
    quality: 85
  }
};

async function optimizeImage(inputFile, config) {
  const inputPath = path.join(assetsDir, inputFile);
  const ext = path.extname(inputFile);
  const baseName = path.basename(inputFile, ext);

  console.log(`\nProcessing: ${inputFile}`);

  try {
    const metadata = await sharp(inputPath).metadata();
    console.log(`  Original size: ${metadata.width}x${metadata.height}`);
    console.log(`  Original format: ${metadata.format}`);

    for (const size of config.sizes) {
      const outputName = `${baseName}${size.suffix}.webp`;
      const outputPath = path.join(outputDir, outputName);

      await sharp(inputPath)
        .resize(size.width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({
          quality: config.quality,
          effort: 6 // Higher effort = better compression (0-6)
        })
        .toFile(outputPath);

      const stats = await fs.promises.stat(outputPath);
      const originalStats = await fs.promises.stat(inputPath);
      const savings = ((1 - stats.size / originalStats.size) * 100).toFixed(1);

      console.log(`  ✓ Created: ${outputName} (${(stats.size / 1024).toFixed(1)}KB, ${savings}% smaller)`);
    }
  } catch (error) {
    console.error(`  ✗ Error processing ${inputFile}:`, error.message);
  }
}

async function main() {
  console.log('🖼️  Image Optimization Script\n');
  console.log('Converting images to WebP and creating responsive variants...\n');

  for (const [file, config] of Object.entries(imageConfigs)) {
    await optimizeImage(file, config);
  }

  console.log('\n✅ Image optimization complete!\n');
  console.log('Next steps:');
  console.log('1. Update component imports to use WebP images');
  console.log('2. Implement <picture> elements with format fallbacks');
  console.log('3. Add srcset attributes for responsive loading');
  console.log('4. Update preload links in index.html to use WebP');
}

main().catch(console.error);
