// Canvas resize and variable
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTiles();
    requestAnimationFrame(gameLoop);
}

let world = generate(0, 0)
gameLoop()
