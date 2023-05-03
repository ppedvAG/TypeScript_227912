// TIMING FUNCTION
// setInterval(() => {}, 1000);
// setTimeout(() => {}, 1000;)
// OPTIONALE ARGUMENTE
// function buildName (firstName: string, middleName?: string, lastName; string): string {=> Fehlermeldung: Ein Paramater wird gebraucht}
function buildName(firstName, lastName, middleName) {
    return "".concat(firstName, " ").concat(middleName, " ").concat(lastName);
}
console.log("buildname('Max', 'Mustermann') :>> ", buildName('Max', 'Mustermann'));
// DEFAULT VALUES 
function buildName2(firstName, lastName, middleName) {
    if (middleName === void 0) { middleName = ""; }
    return "".concat(firstName, " ").concat(middleName, " ").concat(lastName);
}
console.log("buildName2 :>> ", buildName2('Max', 'Mustermann')); // Max Mustermann
console.log("buildName2 :>> ", buildName2('Max', 'Mustermann', 'Peter')); // Max Peter Mustermann
// UNDEFINED NUMBER OF ARGS
function giveNodeNames() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log('args :>> ', args);
    var arrayOfNodeNames = [];
    if (args[0].nodeName) {
        arrayOfNodeNames.push(args[0].nodeName);
    }
    else {
        for (var _a = 0, _b = args[0]; _a < _b.length; _a++) {
            var iterator = _b[_a];
            arrayOfNodeNames.push(iterator.nodeName);
        }
    }
    return arrayOfNodeNames;
}
var nodeNameOfClassTest = giveNodeNames(document.getElementsByClassName("test"));
console.log("nodeNamesOfClassTest :>> ", nodeNameOfClassTest);
