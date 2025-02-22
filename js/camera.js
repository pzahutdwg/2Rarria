//! Change this later
function camera() {
    if (keys.includes('w')) {
        cameraY -= 5
    }
    if (keys.includes('s')) {
        cameraY += 5
    }
    if (keys.includes('a')) {
        cameraX -= 5
    }
    if (keys.includes('d')) {
        cameraX += 5
    }
    if (keys.includes('=') && scale < 3) {
        scale += 0.1
    }
    if (keys.includes('-') && scale > 0.5) {
        scale -= 0.1
    }
}