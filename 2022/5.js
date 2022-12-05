const racks = [
    new Array('Z', 'T','F','R','W','J','G'),
    new Array('G', 'W','M'),
    new Array('J', 'N','H','G'),
    new Array('J', 'R','C','N','W'),
    new Array('W', 'F','S','B','G','Q','V', 'M'),
    new Array('S', 'R','T','D','V','W','C'),
    new Array('H', 'B','N','C','D','Z','G', 'V'),
    new Array('S', 'J','N','M','G','C'),
    new Array('G', 'P','N','W','C','J','D', 'L'),
];

const partOne = (changes) => {
    changes.forEach(change => {
        const moves = change.split(" ");
        const number = parseInt(moves[1]);
        const startingRackIndex = parseInt(moves[3]);
        const destinationRackIndex = parseInt(moves[5]);
      
        const startingRack = racks[startingRackIndex - 1];
        const destinationRack = racks[destinationRackIndex - 1];

        for(var i = 0; i < number; i++) {
            const element = startingRack[startingRack.length - 1];
            destinationRack.push(element);
            startingRack.pop();
        }
    });

    let result = '';

    racks.forEach(rack => {
        result += rack[rack.length - 1];
    })
    
    return result;
}

const partTwo = (changes) => {
    changes.forEach(change => {
        const moves = change.split(" ");
        const number = parseInt(moves[1]);
        const startingRackIndex = parseInt(moves[3]);
        const destinationRackIndex = parseInt(moves[5]);
      
        const startingRack = racks[startingRackIndex - 1];
        const destinationRack = racks[destinationRackIndex - 1];

        const elements = startingRack.slice(-number);
        elements.forEach(element => destinationRack.push(element));
        startingRack.splice(startingRack.length - number, number);
    });

    let result = '';

    racks.forEach(rack => {
        result += rack[rack.length - 1];
    })
    
    return result;
}