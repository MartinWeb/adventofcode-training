const main = (measurements) => {
    let result = 0;
    measurements.reduce((prev, current) => {
        if (current > prev) {
            result++;
        }

        return current;
    });
    return result;
}