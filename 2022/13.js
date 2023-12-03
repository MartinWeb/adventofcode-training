const compareValues = (left, right) => {
    if(typeof left === "number" && typeof right === "number") {
        if(left < right) {
            return true;
        }
        if(left > right) {
            return false;
        }
        return;
    } else if(Array.isArray(left) && Array.isArray(right)) {
        for(let j = 0; j < left.length; j++) {
            if(j > right.length - 1) {
                return;
            }
            if(j < right.length - 1){
                return true;
            }

            const result = compareValues(left[j], right[j]);
            if(result !== undefined) {
                return result;
            }
        }
    } else if((Array.isArray(left) && typeof right === "number")) {
        right = [right];
        for(let j = 0; j < left.length; j++) {
            if(j > right.length - 1) {
                return;
            }
            if(j < right.length - 1){
                return true;
            }

            const result = compareValues(left[j], right[j]);
            if(result !== undefined) {
                return result;
            }
        }
    } else if((Array.isArray(right) && typeof left === "number")) {
        left = [left];
        for(let j = 0; j < left.length; j++) {
            if(j > right.length - 1) {
                return;
            }
            if(j < right.length - 1){
                return true;
            }

            const result = compareValues(left[j], right[j]);
            if(result !== undefined) {
                return result;
            }
        }
    }
}

const partOne = (input) => {
    const pairs = input.split("\n\n");

    pairs.forEach((pair, index) => {
        const left = JSON.parse(pair.split("\n")[0]);
        const right = JSON.parse(pair.split("\n")[1]);

        for(let i = 0; i < left.length; i++) {
            const result = compareValues(left[i], right[i]);
            console.log("index "+index+" : result "+result)
            if(result !== undefined) {
                break;
            }
        }
        console.log("-----------")
    })
}