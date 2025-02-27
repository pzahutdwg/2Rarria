//! Change this later
//! Fix boundaries
function camera() {
    if (keys.includes('w') && cameraY > 0) {
        cameraY -= 5
    }
    if (keys.includes('s') && cameraY < ((world.length * tileSize) * scale) - 5) {
        cameraY += 5
    }
    if (keys.includes('a') && cameraX > 0) {
        cameraX -= 5
    }
    if (keys.includes('d') && cameraX < ((world[0].length * tileSize) * scale) - 5) {
        cameraX += 5
    }
    if (keys.includes('=') && scale < 3) {
        scale += 0.1
    }
    if (keys.includes('-') && scale > 0.5) {
        scale -= 0.1
    }
    // Ensure camera doesn't move past the right and bottom boundaries
    if (cameraX > ((world[0].length * tileSize) * scale) - canvas.width) {
        cameraX = ((world[0].length * tileSize) * scale) - canvas.width;
    }
    if (cameraY > ((world.length * tileSize) * scale) - canvas.height) {
        cameraY = ((world.length * tileSize) * scale) - canvas.height;
    }
}