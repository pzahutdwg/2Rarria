let tileMap = [
    [0, 1, 0, 1, 0],
    [1, 2, 1, 2, 1],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0]
];

const tileSize = 16;

function drawTileMap() {
    for (let row = 0; row < tileMap.length; row++) {
        for (let col = 0; col < tileMap[row].length; col++) {
            const tile = tileMap[row][col];
            let img = new Image();
            img.src = "img/texture/" + tileInfo[tile].texture
            ctx.drawImage(img, tileSize, tileSize, tileSize, tileSize, tileSize * col, tileSize * row, tileSize, tileSize);
        }
    }
}
