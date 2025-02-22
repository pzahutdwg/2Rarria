const tileSize = 16;

function drawTiles() {
    //! Eventually change this to only draw the tiles that are visible on the screen
    for (let row = 0; row < world.length; row++) {
        for (let col = 0; col < world[row].length; col++) {
            const tile = world[row][col];
            let img = new Image();
            img.src = "img/texture/" + tiles[tile].texture
            ctx.drawImage(img, tileSize, tileSize, tileSize,  tileSize, (tileSize * col - cameraX) * scale, (tileSize * row - cameraY) * scale, tileSize * scale, tileSize * scale);
            //draw image (img,  startx ,  starty , cutwidth, cutheight,           x                       ,            y                      , width           ,      height     )
            //! Don't forget to change for camera movement!
        }
    }
}
