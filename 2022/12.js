const getGrid = (input) => {
    const grid = [];
    let startingPosition = {x: null, y: null};
    let endingPosition = {x: null, y: null};

    input.split("\n").forEach((row, rowIndex) => {
        const rowGrid = [];
        row.split("").forEach((cell, cellIndex) => {
            let isStartingPosition = false;
            let isEndingPosition = false;
            if(cell === "S"){
                cell = 'a';
                isStartingPosition = true;
                startingPosition.x = cellIndex;
                startingPosition.y = rowIndex;
            }
            if(cell === 'E') {
                cell = 'z';
                isEndingPosition = true;
                endingPosition.x = cellIndex;
                endingPosition.y = rowIndex;
            }

            rowGrid.push({
                elevation: cell.charCodeAt(0) - 96,
                visited: false,
                isStartingPosition,
                isEndingPosition,
                x: cellIndex,
                y: rowIndex
            });
        });

        grid.push(rowGrid);
    });
    
    return {
        grid,
        startingPosition,
        endingPosition
    };
}

const getBestMovingPosition = (currentPosition, grid) => {
    let possiblePositions = [];

    if(currentPosition.y === 0 && currentPosition.x === 0) {
        possiblePositions = [
            grid[currentPosition.y + 1][currentPosition.x],
            grid[currentPosition.y][currentPosition.x + 1]
        ];
    } else if (currentPosition.y === grid.length - 1 && currentPosition.x === grid[0].length - 1) {
        possiblePositions = [
            grid[currentPosition.y - 1][currentPosition.x],
            grid[currentPosition.y][currentPosition.x - 1]
        ];
    } else if(currentPosition.y === 0) {
        possiblePositions = [
            grid[currentPosition.y][currentPosition.x - 1],
            grid[currentPosition.y + 1][currentPosition.x],
            grid[currentPosition.y][currentPosition.x + 1]
        ];
    } else if(currentPosition.x === 0) {
        possiblePositions = [
            grid[currentPosition.y - 1][currentPosition.x],
            grid[currentPosition.y + 1][currentPosition.x],
            grid[currentPosition.y][currentPosition.x + 1]
        ];
    } else if (currentPosition.y === grid.length - 1) {
        possiblePositions = [
            grid[currentPosition.y - 1][currentPosition.x],
            grid[currentPosition.y][currentPosition.x - 1],
            grid[currentPosition.y][currentPosition.x + 1]
        ];
    } else if (currentPosition.x === grid[0].length - 1) {
        possiblePositions = [
            grid[currentPosition.y - 1][currentPosition.x],
            grid[currentPosition.y][currentPosition.x - 1],
            grid[currentPosition.y + 1][currentPosition.x],
        ];
    } else {
        possiblePositions = [
            grid[currentPosition.y - 1][currentPosition.x],
            grid[currentPosition.y][currentPosition.x - 1],
            grid[currentPosition.y + 1][currentPosition.x],
            grid[currentPosition.y][currentPosition.x + 1]
        ];
    }

    const currentElevation = currentPosition.elevation;
    const higherElevation = possiblePositions.filter(pos => pos.elevation - currentElevation === 1);

    if(higherElevation.length >= 1) {
        return higherElevation[0];
    } else {
        const sameElevation = possiblePositions.filter(pos => pos.elevation - currentElevation === 0);

        if(sameElevation.length >= 1) {
            return sameElevation[0];
        }
    }
}

const partOne = (input) => {
    const { grid, startingPosition, endingPosition } = getGrid(input);
    let currentPosition = grid[startingPosition.y][startingPosition.x];

    while(!endingPosition.visited) {
        currentPosition.visited = true;

        const movingPosition = getBestMovingPosition(currentPosition, grid);

        currentPosition = movingPosition;
    }

    const visitedPositions = grid.map(lines => lines.filter(l => l.visited));

    console.log(grid);
    return visitedPositions.length;
}