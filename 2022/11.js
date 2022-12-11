const generateMonkeys = (input) => {
    const monkeys = [];

    input.split("\n\n").forEach(element => {
        const informations = element.split("\n");
        const currentOperationInfos = informations[2].split(':')[1].split("=")[1].split(" ");
        const divisible = Number(informations[3].split(":")[1].split(" divisible by ")[1]);
        const successTestResult = Number(informations[4].split(":")[1].split(" throw to monkey ")[1]);
        const failedTestResult = Number(informations[5].split(":")[1].split(" throw to monkey ")[1]);

        monkeys.push({
            itemsWorryLevels: informations[1].split(":")[1].split(",").map(el => Number(el)),
            operation: (previous) => {
                if(currentOperationInfos[2] === "*") {
                    return previous * (currentOperationInfos[3] === 'old' ? previous : currentOperationInfos[3]);
                }
                if(currentOperationInfos[2] === "+") {
                    return previous + Number(currentOperationInfos[3]);
                }
                return;
            },
            test: (current) => (current % divisible) === 0,
            divisible,
            nextMonkey: (testResult) => testResult ? successTestResult : failedTestResult,
            inspections: 0
        })        
    });

    return monkeys;
}



function leastCommonMultiple(arr) {
    var min, range;
     range = arr;
    if(arr[0] > arr[1]){
       min = arr[1];
    }
    else{
       min = arr[0]
    }

    function gcd(a, b) {
        return !b ? a : gcd(b, a % b);
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);   
    }

   var multiple = min;
    range.forEach(function(n) {
       multiple = lcm(multiple, n);
    });

   return multiple;
}


const partOne = (input) => {
    const monkeys = generateMonkeys(input);

    for(let i = 0; i < 20; i++) {
        monkeys.forEach(monkey => {
            monkey.itemsWorryLevels.forEach(item => {
                let worryLevel = monkey.operation(item);
                worryLevel = Math.floor(worryLevel / 3);

                const tested = monkey.test(worryLevel);
                const nextMonkey = monkey.nextMonkey(tested);

                monkeys[nextMonkey].itemsWorryLevels.push(worryLevel);
                monkey.inspections++;
            });

            monkey.itemsWorryLevels = [];
        });
    }

    const topTwo = monkeys.sort((a, b) => b.inspections - a.inspections).map(m => m.inspections);
    return topTwo[0] * topTwo[1];
}

const partTwo = (input) => {
    const monkeys = generateMonkeys(input);
    const lcm = leastCommonMultiple(monkeys.map(m => m.divisible));

    for(let i = 0; i < 10000; i++) {
        monkeys.forEach(monkey => {
            monkey.itemsWorryLevels.forEach(item => {
                let worryLevel = monkey.operation(item);

                const tested = monkey.test(worryLevel);
                const nextMonkey = monkey.nextMonkey(tested);

                monkeys[nextMonkey].itemsWorryLevels.push(worryLevel % lcm);
                monkey.inspections++;
            });

            monkey.itemsWorryLevels = [];
        });
    }

    const topTwo = monkeys.sort((a, b) => b.inspections - a.inspections).map(m => m.inspections);
    return topTwo[0] * topTwo[1];
}