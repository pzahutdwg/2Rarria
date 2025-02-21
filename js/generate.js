function generate(width, height) {
    // Do this later, for now:
    let tileMap = []
    for (let i = 0; i < height; i++) {
        tileMap.push([]);
        for (let j = 0; j < width; j++) {
            tileMap[i].push(Math.floor(Math.random() * 3));
        }
    }

    return tileMap;
}
