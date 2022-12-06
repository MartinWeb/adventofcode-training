const partOne = (input) => {
    let result = 0;
    const pattern = [];
  
    for(var i = 0; i < input.length; i++) {
        const currentLetter = input[i];
        pattern.push(currentLetter);

        if(pattern.length === 4) {
            const duplicates = pattern.filter((item, index) => pattern.indexOf(item) !== index);

            if(duplicates.length > 0) {
                pattern.shift();
            } else {
                result = i + 1;
                break;
            }
        }
    }
    
    return result;
}

const partTwo = (input) => {
    let result = 0;
    const pattern = [];
  
    for(var i = 0; i < input.length; i++) {
        const currentLetter = input[i];
        pattern.push(currentLetter);

        if(pattern.length === 14) {
            const duplicates = pattern.filter((item, index) => pattern.indexOf(item) !== index);

            if(duplicates.length > 0) {
                pattern.shift();
            } else {
                result = i + 1;
                break;
            }
        }
    }
    
    return result;
}