import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

async function optimizeImages(directory) {
  try {
    const files = await fs.readdir(directory);

    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
        const filePath = path.join(directory, file);
        const outputWebP = filePath.replace(/\.[^.]+$/, ".webp");

        await sharp(filePath).webp({ quality: 80 }).toFile(outputWebP);

        // Orijinal görseli küçült
        await sharp(filePath)
          .resize(1200, null, { withoutEnlargement: true })
          .jpeg({ quality: 80 })
          .toFile(filePath.replace(/\.[^.]+$/, "-optimized.jpg"));
      }
    }
  } catch (error) {
    console.error("Image optimization failed:", error);
  }
}

optimizeImages("./src/assets");
