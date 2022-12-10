const checkCycles = (cycle, cyclesResult) => {
    if(cycle === 20 || cycle === 60 || cycle === 100 || cycle === 140 || cycle === 180 || cycle === 220) {
        cyclesResult.push(cycle * cpuRegister);
    }
}

const partOne = (input) => {
    let cycle = 0;
    let cpuRegister = 1;
    const cyclesResult = [];

    input.split("\n").forEach(instruction => {
        cycle++;

        checkCycles(cycle, cyclesResult);

        if(instruction !== "noop"){
            cycle++;
            const value = Number(instruction.split(" ")[1]);

            checkCycles(cycle, cyclesResult);

            cpuRegister += value;
        }
    });

    console.log(cyclesResult)
    return cyclesResult.reduce((a, b) => a + b, 0);
}

const drawCrt = (drawPosition, cpuRegister, result) => 
    drawPosition === cpuRegister || drawPosition === cpuRegister + 1 || drawPosition === cpuRegister - 1 ? '#' : '.';

const partTwo = (input) => {
    let cycle = 0;
    let cpuRegister = 1;
    let drawPosition = 0;
    let result = '';

    input.split("\n").forEach(instruction => {
        cycle++;

        result += drawCrt(drawPosition, cpuRegister);
        drawPosition++;
        if(drawPosition === 40) {
            drawPosition = 0;
        }

        if(instruction !== "noop"){
            cycle++;
            result += drawCrt(drawPosition, cpuRegister);
            drawPosition++;
            if(drawPosition === 40) {
                drawPosition = 0;
            }

            const value = Number(instruction.split(" ")[1]);
            cpuRegister += value;
        }
    });

    result = result.replace(/.{40}/g, '$&\n');

    return result;
}