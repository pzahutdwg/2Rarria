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

// Copilot generate script?
function coPilotGenerate(width, height) {
    let tileMap = []
    for (let i = 0; i < height; i++) {
        tileMap.push([]);
        for (let j = 0; j < width; j++) {
            tileMap[i].push(0);
        }
    }

    let start = [Math.floor(Math.random() * width), Math.floor(Math.random() * height)];
    tileMap[start[1]][start[0]] = 1;

    let current = start;
    let direction = Math.floor(Math.random() * 4);
    for (let i = 0; i < 100; i++) {
        let next = [current[0], current[1]];
        switch (direction) {
            case 0:
                next[0]++;
                break;
            case 1:
                next[1]++;
                break;
            case 2:
                next[0]--;
                break;
            case 3:
                next[1]--;
                break;
        }

        if (next[0] >= 0 && next[0] < width && next[1] >= 0 && next[1] < height) {
            tileMap[next[1]][next[0]] = 1;
            current = next;
        } else {
            direction = Math.floor(Math.random() * 4);
        }
    }

    return tileMap;
}

// MY generate code (WIP)
