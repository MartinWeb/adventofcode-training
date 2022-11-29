const partOne = (measurements) => {
    let result = 0;
    measurements.reduce((prev, current) => {
        if (current > prev) {
            result++;
        }

        return current;
    });
    return result;
}

const partTwo = (measurements) => {
    let result = 0;
    let input = [];
    let sums = [];

    measurements.reduce((prev, current, index) => {
        input.push(current);

        if (index >= 2) {
            sums.push(input.reduce((a, b) => a + b, 0));
        
            input.shift();

            if (sums.length >= 2) {
                if (sums[1] > sums[0]) {
                    result++;
                }

                sums.shift();
            }
        }
    }, 0);

    return result;
}