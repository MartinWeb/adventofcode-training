const getMap = (input) => {
    const map = [];
    const lines = input.split('\n');
    lines.forEach(line => {
        const heights = line.split('');
        map.push(heights);
    });
  
  return map;
}

const calculateNumberOfVisibleTrees = (array, height, log) => {
    let score = 0;
    for(const previousHeight of array) {
        if(previousHeight < height) {
            score++;
        } else if(previousHeight >= height) {
            score++;
            break;
        }
    }
    return score;
}

const partOne = (input) => {  
    let nbVisibleTrees = 0;
    
    let map = getMap(input)

    map.forEach((line, rowIndex) => {
        if(rowIndex === 0 || rowIndex === map.length - 1) {
            nbVisibleTrees += line.length;
        } else {
            line.forEach((height, cellIndex) => {
                if(cellIndex === 0 || cellIndex === line.length - 1) {
                    nbVisibleTrees++;
                } else {                
                    const leftHeights = line.filter((m, index) => index < cellIndex);
                    const rightHeights = line.filter((m, index) => index > cellIndex);
                    const topHeights = [];
                    const bottomHeights = [];

                    map.forEach((element, firstIndex) => {
                        element.forEach((e, secondIndex) => {
                            if(secondIndex === cellIndex) {
                                if(firstIndex < rowIndex) {
                                    topHeights.push(e);
                                }
                                if(firstIndex > rowIndex) {
                                    bottomHeights.push(e);
                                }
                            }
                        });
                    });

                    const leftVisible = leftHeights.every(previousHeight => previousHeight < height);
                    const rightVisible = rightHeights.every(nextHeight => height > nextHeight);
                    const topVisible = topHeights.every(previousHeight => previousHeight < height);
                    const bottomVisible = bottomHeights.every(nextHeight => height > nextHeight);

                    if(leftVisible || rightVisible || topVisible || bottomVisible) {
                        nbVisibleTrees++;
                    }
                }
            });
        }
    });

    return nbVisibleTrees;
}

const partTwo = (input) => {  
    let scores = [];
    
    const map = getMap(input)

    map.forEach((line, rowIndex) => {
        if(rowIndex === 0 || rowIndex === map.length - 1) {
            return;
        } else {
            line.forEach((height, cellIndex) => {
                let currentScore = [];
                if(cellIndex === 0 || cellIndex === line.length - 1) {
                    return;
                } else {                
                    const leftHeights = line.filter((m, index) => index < cellIndex);
                    const rightHeights = line.filter((m, index) => index > cellIndex);
                    const topHeights = [];
                    const bottomHeights = [];

                    map.forEach((element, firstIndex) => {
                        element.forEach((e, secondIndex) => {
                            if(secondIndex === cellIndex) {
                                if(firstIndex < rowIndex) {
                                    topHeights.push(e);
                                }
                                if(firstIndex > rowIndex) {
                                    bottomHeights.push(e);
                                }
                            }
                        });
                    });

                    currentScore.push(calculateNumberOfVisibleTrees(leftHeights.reverse(), height));
                    currentScore.push(calculateNumberOfVisibleTrees(rightHeights, height));
                    currentScore.push(calculateNumberOfVisibleTrees(topHeights.reverse(), height));
                    currentScore.push(calculateNumberOfVisibleTrees(bottomHeights, height));

                    scores.push(currentScore.reduce((acc, score) => acc * score, 1));
                }
            });
        }
    });

    return Math.max(...scores);
}