// Arrays
console.info("\n Arrays");

// Arrays können an bestimmten Datentypen angepasst werden.
// Ohne Typangabe ist es ein Array of any.
let myArray1 = [];
myArray1 = [4, 6, 3];
myArray1 = ['a', 'b', 'c'];

let myNumbers: number[] = [5, 5.2, 6543];
// myNumbers = ['s']; => Fehöereldung "string"

// Array ist in TS eine generische Klasse
let myStrings: Array<string> = ['r', 't'];
let myStrings2 = myStrings;

console.log("myStrings2 === myStrings: ", myStrings2 === myStrings ? 'gleich' : 'ungleich'); // gleich

let myStrings3 = ['r', 't'];
console.log("myStrings3 === myStrings: ", myStrings3 === myStrings ? 'gleich' : 'ungleich'); // ungleich


// KOPIE VON EINEM ARRAY
let myStringsCopy = [...myStrings];
console.log("myStringsCopy === myStrings ", myStringsCopy === myStrings ? 'gleich' : 'ungleich'); // ungleich

// DESTRUCTURING OF ARRAYS
let myArray2 = [3, 5, 6, 1];
let [first, second, third] = myArray2;
console.log("first: ", first);
console.log("third: ", third);


console.info('\n HTML COLLECTION');

let headings2 = document.getElementsByTagName('h2'); 
console.log("heading2: ", headings2);


let redElements = document.getElementsByClassName('red');
console.log("redElements: ", redElements);

let numberInputs = document.querySelectorAll('input[type = "number"]');
console.log("numberInputs: ", numberInputs);
// entries()
// forEach()
// item()
// keys()
// values()


console.info("\n Node list of Elements to Arrays");
// bei es5
let nodeListEntriesES5: Array<HTMLInputElement> = Array.prototype.slice.call(numberInputs);

// bei neueren es Versionen:
//let nodeListEntriesES6: Array<HTMLInputElement> = Array.from((numberInputs as NodeListOf<HTMLInputElement>));

// oder Type Assertion später bei jedem Element einzeln in einer Iteration ausführen
// let nodeListEntriesES6: Array<Element> = Array.from(numberINputs);