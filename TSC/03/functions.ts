// TIMING FUNCTION
// setInterval(() => {}, 1000);
// setTimeout(() => {}, 1000;)


// OPTIONALE ARGUMENTE

// function buildName (firstName: string, middleName?: string, lastName; string): string {=> Fehlermeldung: Ein Paramater wird gebraucht}
function buildName (firstName: string, lastName: string, middleName?: string) {
 return `${firstName} ${middleName} ${lastName}`;   
}

console.log("buildname('Max', 'Mustermann') :>> ", buildName('Max', 'Mustermann')); 


// DEFAULT VALUES 

function buildName2 (firstName: string, lastName: string, middleName = ""): string {
    return `${firstName} ${middleName} ${lastName}`;
}
console.log("buildName2 :>> ", buildName2('Max', 'Mustermann')); // Max Mustermann
console.log("buildName2 :>> ", buildName2('Max', 'Mustermann', 'Peter')); // Max Peter Mustermann

// UNDEFINED NUMBER OF ARGS
function giveNodeNames(...args: any[]): string[] {
    console.log('args :>> ', args);
    let arrayOfNodeNames: string[] = [];
    if(args[0].nodeName) {
        arrayOfNodeNames.push(args[0].nodeName);
    }
    else {
        for(const iterator of args[0]) {
            arrayOfNodeNames.push(iterator.nodeName);
        }
    }
    return arrayOfNodeNames;
}

let nodeNameOfClassTest = giveNodeNames(document.getElementsByClassName("test"));
console.log("nodeNamesOfClassTest :>> ", nodeNameOfClassTest);