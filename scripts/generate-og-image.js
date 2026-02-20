const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateOGImage() {
  try {
    console.log('Starting OG image generation...');

    const logoPath = path.join(__dirname, '../public/images/Grid&Dot.svg');
    const outputPath = path.join(__dirname, '../public/og-image.jpg');

    // OG Image dimensions: 1200x630px (Facebook/LinkedIn standard)
    const width = 1200;
    const height = 630;

    // Brand colors
    const backgroundColor = '#F2F0EF'; // Beige background

    // Scale logo to fit nicely (roughly 600px wide, maintaining aspect ratio)
    const logoWidth = 600;
    const logoBuffer = await sharp(logoPath)
      .resize(logoWidth, null, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toBuffer();

    // Get logo dimensions after resize
    const logoMetadata = await sharp(logoBuffer).metadata();
    const logoHeight = logoMetadata.height;

    // Calculate position to center the logo
    const logoX = Math.floor((width - logoWidth) / 2);
    const logoY = Math.floor((height - logoHeight) / 2);

    // Create base image with background color
    const baseImage = await sharp({
      create: {
        width: width,
        height: height,
        channels: 3,
        background: backgroundColor
      }
    })
    .jpeg({ quality: 90 })
    .toBuffer();

    // Composite logo onto background
    console.log('Compositing logo onto background...');
    await sharp(baseImage)
      .composite([
        {
          input: logoBuffer,
          top: logoY,
          left: logoX
        }
      ])
      .jpeg({ quality: 90 })
      .toFile(outputPath);

    console.log('\n✅ OG image generated successfully!');
    console.log('\nGenerated file:');
    console.log(`  - public/og-image.jpg (${width}x${height}px)`);
    console.log('\nNote: This is a basic OG image with the logo on a branded background.');
    console.log('You can replace it with a custom-designed image for better social media appearance.');

  } catch (error) {
    console.error('❌ Error generating OG image:', error.message);
    process.exit(1);
  }
}

generateOGImage();
