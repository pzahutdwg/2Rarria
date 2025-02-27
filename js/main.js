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
        console.log(keys)
    }
    
})
document.addEventListener('keyup', (e) => {
    keys.splice(keys.indexOf(e.key))
    console.log(keys)
})

// Game Loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    camera();
    drawTiles();
    
    requestAnimationFrame(gameLoop);
}

// Reset variables
//! Change camera later
let cameraX = 0
let cameraY = 0
let scale = 1

//! coPilotGenerate() does NOT work with larger numbers
let world = generate(100, 100)
gameLoop()
