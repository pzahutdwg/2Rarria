const tileSize = 16;

function drawTiles() {
    for (let row = 0; row < world.length; row++) {
        for (let col = 0; col < world[row].length; col++) {
            const tile = world[row][col];
            let img = new Image();
            img.src = "img/texture/" + tiles[tile].texture
            ctx.drawImage(img, tileSize, tileSize, tileSize, tileSize, tileSize * col, tileSize * row, tileSize, tileSize);
            //draw image (img, startx  ,  starty , cutwidth, cutheight, x            , y             , width   , height  )
            //! Don't forget to change for camera movement!
        }
    }
}
