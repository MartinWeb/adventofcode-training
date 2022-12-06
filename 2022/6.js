const partOne = (input) => {  
    for(var i = 0; i < input.length; i++) {
        if(i >= 3) {
            const subArray = new Set([...input.slice(i - 3, i + 1)]);

            if(subArray.size === 4) {
                return i + 1;
            }
        }
    }
}

const partTwo = (input) => {
    for(var i = 0; i < input.length; i++) {
        if(i >= 13) {
            const subArray = new Set([...input.slice(i - 13, i + 1)]);

            if(subArray.size === 14) {
                return i + 1;
            }
        }
    }
}
