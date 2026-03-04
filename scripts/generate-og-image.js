const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateOGImage() {
  try {
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

    const logoMetadata = await sharp(logoBuffer).metadata();
    const logoHeight = logoMetadata.height;

    const logoX = Math.floor((width - logoWidth) / 2);
    const logoY = Math.floor((height - logoHeight) / 2);

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
  } catch (error) {
    console.error(' Error generating OG image:', error.message);
    process.exit(1);
  }
}

generateOGImage();
