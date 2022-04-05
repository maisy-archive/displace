import getPixel from "./lib/getPixel.js";

const size = 1000;
for (let q = 0; q < 4; q++) {
  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {
        const pixelInfo = await getPixel(x, y, q);
        console.log(`coordinate: ${x},${y} | canvasIndex: ${q} | ${new Date(pixelInfo.lastModifiedTimestamp)} | ${pixelInfo.userInfo.username} (${pixelInfo.userInfo.userID})`);
    }
  }
}