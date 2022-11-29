const partOne = (binaries) => {
    let gamma = "";
    let epsilon = "";

    const arrayLength = String(binaries[0]).length;

    for (var i = 0; i < arrayLength; i++) {
        let zero = 0;
        let one = 0;

        binaries.forEach((binary) => {
            const number = Number(binary[i]);
            if (number === 0) zero++;
            if (number === 1) one++;
        });

        if (zero > one) {
            gamma += "0";
            epsilon += "1";
        } else {
            gamma += "1";
            epsilon += "0";
        }
    }

    return parseInt(gamma, 2) * parseInt(epsilon, 2);
}

const partTwo = (binaries) => {
    const arrayLength = String(binaries[0]).length;

    const getOxygen = (array) => {
        if (array.length === 1) {
            return array;
        }

        let zero = 0;
        let one = 0;

        array.forEach((binary) => {
            const number = Number(binary[i]);
            if (number === 0) zero++;
            if (number === 1) one++;
        });

        const zeros = array.filter((item) => {
            const number = Number(item[i]);

            return number === 0;
        });

        const ones = array.filter((item) => {
            const number = Number(item[i]);

            return number === 1;
        });

        return zero >= one ? zeros : ones;
    }

    const getCo2 = (array) => {
        if (array.length === 1) {
            return array;
        }

        let zero = 0;
        let one = 0;

        array.forEach((binary) => {
            const number = Number(binary[i]);
            if (number === 0) zero++;
            if (number === 1) one++;
        });

        const zeros = array.filter((item) => {
            const number = Number(item[i]);

            return number === 0;
        });

        const ones = array.filter((item) => {
            const number = Number(item[i]);

            return number === 1;
        });

        return zero >= one ? ones : zeros;
    }

    // oxygen
    let oxygens = binaries;
    for (var i = 0; i < arrayLength; i++) {
        oxygens = getOxygen(oxygens);
    }

    // co2
    let co2s = binaries;
    for (var i = 0; i < arrayLength; i++) {
        co2s = getOxygen(co2s);
    }

    return parseInt(oxygens[0], 2) * parseInt(co2s[0], 2);
}