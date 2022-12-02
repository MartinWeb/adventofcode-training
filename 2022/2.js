const rockOpponent = 'A';
const paperOpponent = 'B';
const scissorOpponent = 'C';

const rockPoint = 1;
const paperPoint = 2;
const scissorPoint = 3;

const loosePoint = 0;
const drawPoint = 3;
const winPoint = 6;

const partOne = (inputs) => {
    const rock = 'X';
    const paper = 'Y';
    const scissor = 'Z';

    let result = 0;

    inputs.forEach(input => {
        const decisions = input.split(" ");
        const opponent = decisions[0];
        const yourInput = decisions[1];

        switch (opponent) {
            case rockOpponent:
                switch (yourInput) {
                    case rock:
                        result += drawPoint + rockPoint;
                        break;
                    case paper:
                        result += winPoint + paperPoint;
                        break;
                    case scissor:
                        result += loosePoint + scissorPoint;
                        break;
                    default:
                        break;
                }
                break;
            case paperOpponent:
                switch (yourInput) {
                    case rock:
                        result += loosePoint + rockPoint;
                        break;
                    case paper:
                        result += drawPoint + paperPoint;
                        break;
                    case scissor:
                        result += winPoint + scissorPoint;
                        break;
                    default:
                        break;
                }
                break;
            case scissorOpponent:
                switch (yourInput) {
                    case rock:
                        result += winPoint + rockPoint;
                        break;
                    case paper:
                        result += loosePoint + paperPoint;
                        break;
                    case scissor:
                        result += drawPoint + scissorPoint;
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    });

    return result;
}

const partTwo = (inputs) => {
    const loose = 'X';
    const draw = 'Y';
    const win = 'Z';

    let result = 0;

    inputs.forEach(input => {
        const decisions = input.split(" ");
        const opponent = decisions[0];
        const gameResult = decisions[1];

        switch (opponent) {
            case rockOpponent:
                switch (gameResult) {
                    case loose:
                        result += loosePoint + scissorPoint;
                        break;
                    case draw:
                        result += drawPoint + rockPoint;
                        break;
                    case win:
                        result += winPoint + paperPoint;
                        break;
                    default:
                        break;
                }
                break;
            case paperOpponent:
                switch (gameResult) {
                    case loose:
                        result += loosePoint + rockPoint;
                        break;
                    case draw:
                        result += drawPoint + paperPoint;
                        break;
                    case win:
                        result += winPoint + scissorPoint;
                        break;
                    default:
                        break;
                }
                break;
            case scissorOpponent:
                switch (gameResult) {
                    case loose:
                        result += loosePoint + paperPoint;
                        break;
                    case draw:
                        result += drawPoint + scissorPoint;
                        break;
                    case win:
                        result += winPoint + rockPoint;
                        break;
                    default:
                        break;
                }
                break;
            default:
                break;
        }
    });

    return result;
}