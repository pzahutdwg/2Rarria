// Canvas resize and variable
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


//Key handling
let keys = []
document.addEventListener('keydown', (e) => {
    
    if (!keys.includes(e.key)) {
        keys.push(e.key)
    }
    
})
document.addEventListener('keyup', (e) => {
    keys.splice(keys.indexOf(e.key))
})

// Game Loop
//! Make it stop flickering?
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (generating) {
        ctx.fillRect(0, 0, 100, 100)
    }

    camera();
    drawTiles();
    
    requestAnimationFrame(gameLoop);
}

// Reset variables
//! Change camera later
let cameraX = 0
let cameraY = 0
let scale = 1

let generating = false

//! coPilotGenerate() does NOT work
let world = generate(100, 500)
gameLoop()
