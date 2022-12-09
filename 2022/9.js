const moveKnot = (prevKnot, currentKnot) => {
    if(prevKnot.vertical - currentKnot.vertical === 2){
        if(prevKnot.horizontal === currentKnot.horizontal) {
            currentKnot.vertical++;
            return;
        }
        if(prevKnot.horizontal - currentKnot.horizontal === 1 || prevKnot.horizontal - currentKnot.horizontal === 2){
            currentKnot.vertical++;
            currentKnot.horizontal++;
            return;
        }
        if(prevKnot.horizontal - currentKnot.horizontal === -1 || prevKnot.horizontal - currentKnot.horizontal === -2){
            currentKnot.vertical++;
            currentKnot.horizontal--;
            return;
        }
    }

    if(prevKnot.vertical - currentKnot.vertical === -2){
        if(prevKnot.horizontal === currentKnot.horizontal) {
            currentKnot.vertical--;
            return;
        }
        if(prevKnot.horizontal - currentKnot.horizontal === -1 || prevKnot.horizontal - currentKnot.horizontal === -2) {
            currentKnot.vertical--;
            currentKnot.horizontal--;
            return;
        }
        if(prevKnot.horizontal - currentKnot.horizontal === 1 || prevKnot.horizontal - currentKnot.horizontal === 2) {
            currentKnot.vertical--;
            currentKnot.horizontal++;
            return;
        }
    }

    if(prevKnot.horizontal - currentKnot.horizontal === 2){
        if(prevKnot.vertical === currentKnot.vertical) {
            currentKnot.horizontal++;
            return;
        }
        if(prevKnot.vertical - currentKnot.vertical === 1 || prevKnot.vertical - currentKnot.vertical === 2) {
            currentKnot.vertical++;
            currentKnot.horizontal++;
            return;
        }
        if(prevKnot.vertical - currentKnot.vertical === -1 || prevKnot.vertical - currentKnot.vertical === -2) {
            currentKnot.vertical--;
            currentKnot.horizontal++;
            return;
        }
    }

    if(prevKnot.horizontal - currentKnot.horizontal === -2){
        if(prevKnot.vertical === currentKnot.vertical) {
            currentKnot.horizontal--;
            return;
        }
        if(prevKnot.vertical - currentKnot.vertical === 1 || prevKnot.vertical - currentKnot.vertical === 2) {
            currentKnot.vertical++;
            currentKnot.horizontal--;
            return;
        }
        if(prevKnot.vertical - currentKnot.vertical === -1 || prevKnot.vertical - currentKnot.vertical === -2) {
            currentKnot.vertical--;
            currentKnot.horizontal--;
            return;
        }
    }
}

const ropeMovement = (input, numberOfKnots) => {
    const knots = []
    for(var k = 0; k < numberOfKnots; k++) {
        knots.push({vertical: 0, horizontal: 0});
    }

    const visitedPositions = [];

    input.split("\n").forEach(element => {
        const direction = element.split(" ")[0];
        const moveNumber = Number(element.split(" ")[1]);
      
        for(var i = 0; i < moveNumber; i++) {
            switch (direction) {
                case 'D':
                    knots[0].vertical--;
                    break;
                case 'U':
                    knots[0].vertical++;
                    break;
                case 'L':
                    knots[0].horizontal--;
                    break;
                case 'R':
                    knots[0].horizontal++;
                    break;
                default:
                    break;
            }

            for(var j = 1; j < knots.length; j++) {
                moveKnot(knots[j-1], knots[j]);
                visitedPositions.push(`${knots[knots.length - 1].vertical},${knots[knots.length - 1].horizontal}`);
            }
        }
      
    });

    return new Set([...visitedPositions]).size;
}

const partOne = (input) => {
    return ropeMovement(input, 2);
};

const partTwo = (input) => {
    return ropeMovement(input, 10);
};