const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

const galleryDir = path.join(__dirname, 'docs', 'public', 'gallery');
const movieTheatersDir = path.join(__dirname, 'docs', 'public', 'movie-theaters');
const moviesDir = path.join(__dirname, 'docs', 'public', 'movies');

async function compressImages() {
  try {
    console.log('Iniciando a compressão de imagens...\n');
    let totalSaved = 0;
    // const allDirs = [galleryDir, movieTheatersDir, moviesDir];
    const allDirs = [galleryDir];

    for (let dir of allDirs) {
      const files = await fs.readdir(dir);

      for (const file of files) {
        const ext = path.extname(file).toLowerCase();

        // Filtra apenas formatos de imagem suportados
        if (['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) {
          const filePath = path.join(dir, file);
          const tempFilePath = path.join(dir, `temp-${file}`);

          let sharpInstance = sharp(filePath);

          // Configurações para manter boa qualidade (80%) e reduzir o tamanho do arquivo
          if (ext === '.jpg' || ext === '.jpeg') sharpInstance = sharpInstance.jpeg({quality: 80, mozjpeg: true});
          else if (ext === '.png') sharpInstance = sharpInstance.png({quality: 80, compressionLevel: 8});
          else if (ext === '.webp') sharpInstance = sharpInstance.webp({quality: 80});

          await sharpInstance.toFile(tempFilePath);

          const origStat = await fs.stat(filePath);
          const newStat = await fs.stat(tempFilePath);

          if (newStat.size < origStat.size) {
            await fs.rename(tempFilePath, filePath);
            const savedKb = (origStat.size - newStat.size) / 1024;
            totalSaved += savedKb;
            console.log(`${file}: ${(origStat.size / 1024).toFixed(2)}KB -> ${(newStat.size / 1024).toFixed(2)}KB (Reduziu ${savedKb.toFixed(2)}KB)`);
          } else {
            await fs.unlink(tempFilePath);
            console.log(`${file}: Ignorado (arquivo original já estava otimizado)`);
          }
        }
      }
    }

    console.log(`\nCompressão concluída! Espaço total economizado: ${(totalSaved / 1024).toFixed(2)} MB`);
  } catch (error) {
    console.error('Erro ao comprimir as imagens:', error);
  }
}

compressImages();
