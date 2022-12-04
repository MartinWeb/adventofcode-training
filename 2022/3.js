const partOne = (inputs) => {
    let result = 0;

    inputs.forEach(input => {
        const first = input.substring(0, input.length / 2);
        const second = input.substring(input.length / 2, input.length);

        for(const i in first) {
            if(second.includes(first[i])) {
                const duplicate = first[i];

                if(duplicate.toUpperCase() === duplicate) {
                    result += duplicate.charCodeAt(0) - 64 + 26;
                    break;
                } 
                if(duplicate.toLowerCase() === duplicate) {
                    result += duplicate.charCodeAt(0) - 96;
                    break;
                }
            }
        }
    });
    
    return result;
}

const partTwo = (inputs) => {
    let result = 0;

    const chunkSize = 3;
    for(var i = 0; i < inputs.length; i += chunkSize) {
        const chunk = array.slice(i, i + chunkSize);

        const first = chunk[0];
        const second = chunk[1];
        const third = chunk[2];

        for(const i in first) {
            if(second.includes(first[i]) && third.includes(first[i])) {
                const duplicate = first[i];

                if(duplicate.toUpperCase() === duplicate) {
                    result += duplicate.charCodeAt(0) - 64 + 26;
                    break;
                } 
                if(duplicate.toLowerCase() === duplicate) {
                    result += duplicate.charCodeAt(0) - 96;
                    break;
                }
            }
        }
    }
    
    return result;
}