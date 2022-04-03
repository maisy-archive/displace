import getPixel from "./lib/getPixel.js";

const args = process.argv.slice(2);

let start = {
    x: args[0] || 0,
    y: args[1] || 0,
    canvasIndex: args[2] || 0
}

let end = {
    x: args[3] || 999,
    y: args[4] || 999,
    canvasIndex: args[5] || 3
}

console.log(start)
console.log(end)

let currentX = start.x;
let currentY = start.y;
let currentCanvasIndex = start.canvasIndex;

while(currentCanvasIndex < end.canvasIndex + 1) {
    if (currentCanvasIndex > end.canvasIndex) process.exit();

    if (currentX > end.x + 1 && currentY > end.y + 1) {
        currentX = start.x;
        currentY = start.y;
        currentCanvasIndex++;
    } else if(currentX > end.x) {
        currentX = start.x;
        currentY++;
    } else {
        const pixelInfo = await getPixel(currentX, currentY, currentCanvasIndex);
        console.log(`coordinate: ${currentX},${currentY} | canvasIndex: ${currentCanvasIndex} | ${new Date(pixelInfo.lastModifiedTimestamp)} | ${pixelInfo.userInfo.username} (${pixelInfo.userInfo.userID})`);
        currentX++;
    }
}