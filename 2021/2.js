const partOne = (measurements) => {
    let forward = 0;
    let depth = 0;

    measurements.forEach(measure => {
        if(measure.startsWith("forward")) {
            forward += parseInt(measure.split("forward")[1]);
        }

        if(measure.startsWith("down")) {
            depth += parseInt(measure.split("down")[1]);
        }

        if(measure.startsWith("up")) {
            depth -= parseInt(measure.split("up")[1]);
        }
    });

    return forward * depth;
}

const partTwo = (measurements) => {
    let forward = 0;
    let depth = 0;
    let aim = 0;

    measurements.forEach(measure => {
        if(measure.startsWith("forward")) {
            const value = parseInt(measure.split("forward")[1])
            forward += value;
            depth = (aim > 0) ? depth + (value * aim) : depth;
        }

        if(measure.startsWith("down")) {
            aim += parseInt(measure.split("down")[1]);
        }

        if(measure.startsWith("up")) {
            aim -= parseInt(measure.split("up")[1]);
        }
    });

    return forward * depth;
}