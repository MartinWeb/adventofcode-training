const getFileSystem = (input) => {
    const commands = input.split('\n');
    const directories = [];
    let currentDirectory = {};
    let directoryIndex = 0;

    commands.forEach(command => {
        if(command.startsWith("$ cd")) {
            if(command === "$ cd ..") {
                directoryIndex--;
            } else {  
                if(Object.keys(currentDirectory).length !== 0) {
                    directories.push(currentDirectory);
                }

                directoryIndex++;

                currentDirectory = {
                    name: command.split("$ cd ")[1],
                    size: 0,
                    subDirectories : [],
                    index: directoryIndex
                }
            }
        }

        if(!command.startsWith("$")) {
            if(command.startsWith("dir")) {
                const subDirectoyName = command.split("dir ")[1];
                currentDirectory.subDirectories.push(subDirectoyName);
            } else {
                const fileSize = Number(command.split(" ")[0]);
                currentDirectory.size += fileSize;
            }
        }
    });

    directories.push(currentDirectory);

    const maxDirectoryIndex = Math.max(...directories.map(d => d.index));

    for(var i = maxDirectoryIndex; i--; i >= 0) {
        const indexDirectories = directories.filter(d => d.index === i);

        indexDirectories.forEach(directory => {
            const subDirectories = directory.subDirectories;

            if(subDirectories.length > 0) {
                subDirectories.forEach(subDirectoryName => {
                    const subDirectory = directories.find(d => d.name === subDirectoryName && d.index === directory.index + 1);
                    directory.size += subDirectory?.size;
                });
            }
        });
    }

    return directories;
}

const partOne = (input) => {  
    const directories = getFileSystem(input);

    const smallDirectories = directories.filter(d => d.size <= 100000);

    return smallDirectories.reduce((accumulator, directory) => accumulator + directory.size, 0);
}

const partTwo = (input) => {  
    const directories = getFileSystem(input);

    const unusedSpace = 70000000 - directories.find(d => d.name === '/').size;
    const requiredSpace = 30000000 - unusedSpace;

    const eligibleDirectories = directories.filter(d => d.size >= requiredSpace).sort((a, b) => a.size - b.size);

    return eligibleDirectories[0].size;
}