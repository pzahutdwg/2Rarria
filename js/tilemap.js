const tileSize = 16;
function getMaxWidth() {
    return Math.ceil((window.innerWidth / tileSize) / scale);
}

function getMaxHeight() {
    return Math.ceil((window.innerHeight / tileSize) / scale);
}

function getRow() {
    return Math.floor(cameraY / tileSize);
}

function getCol() {
    return Math.floor(cameraX / tileSize);
}

function drawTiles() {
    for (let row = 0; row < getMaxHeight() + getRow() + 1; row++) {
        console.log(getRow())
        for (let col = getCol(); col < getMaxWidth() + getCol() + 1; col++) {
            console.log(getCol())
            const tile = world[row][col];
            let img = new Image();
            img.src = "img/texture/" + tiles[tile].texture
            ctx.drawImage(img, tileSize, tileSize, tileSize, tileSize, (tileSize * col - cameraX) * scale, (tileSize * row - cameraY) * scale, tileSize * scale, tileSize * scale);
            //draw image (img,  startx ,  starty , cutwidth, cutheight,           x                      ,            y                      , width           ,      height     )
            //! Don't forget to change for camera movement!
        }
    }
}
