const partOne = (inputs) => {
    let result = 0;

    inputs.forEach(input => {
        const first = input.split(',')[0];
        const second = input.split(',')[1];

        const firstBegin = parseInt(first.split('-')[0]);
        const firstEnd = parseInt(first.split('-')[1]);

        const secondBegin = parseInt(second.split('-')[0]);
        const secondEnd = parseInt(second.split('-')[1]);

        if((firstBegin <= secondBegin && secondEnd <= firstEnd) || 
        (secondBegin <= firstBegin && firstEnd <= secondEnd)) {
            result++;
        }
    });
    
    return result;
}

const partTwo = (inputs) => {
    let result = 0;

    inputs.forEach(input => {
        const first = input.split(',')[0];
        const second = input.split(',')[1];

        const firstBegin = parseInt(first.split('-')[0]);
        const firstEnd = parseInt(first.split('-')[1]);

        const secondBegin = parseInt(second.split('-')[0]);
        const secondEnd = parseInt(second.split('-')[1]);

        if((secondBegin >= firstBegin && secondBegin <= firstEnd) || 
        (firstBegin >= secondBegin && firstBegin <= secondEnd)) {
            result++;
        }
    });
    
    return result;
}
