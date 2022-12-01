const partOne = (calories) => {
    let caloriesCount = [];
    let currentCaloryCount = 0;

    calories.forEach(calory => {
        if(Number.isInteger(parseInt(calory))) {
            currentCaloryCount += parseInt(calory);
        } else {
            caloriesCount.push(currentCaloryCount);
            currentCaloryCount = 0;
        }
    });

    return Math.max(...caloriesCount);
}

const partTwo = (calories) => {
    let caloriesCount = [];
    let currentCaloryCount = 0;

    calories.forEach(calory => {
        if(Number.isInteger(parseInt(calory))) {
            currentCaloryCount += parseInt(calory);
        } else {
            caloriesCount.push(currentCaloryCount);
            currentCaloryCount = 0;
        }
    });

    const topThree = caloriesCount.sort((a, b) => b - a).slice(0, 3);

    return topThree.reduce((a, b) => a + b, 0);
}