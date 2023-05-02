var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Arrays
console.info("\n Arrays");
// Arrays können an bestimmten Datentypen angepasst werden.
// Ohne Typangabe ist es ein Array of any.
var myArray1 = [];
myArray1 = [4, 6, 3];
myArray1 = ['a', 'b', 'c'];
var myNumbers = [5, 5.2, 6543];
// myNumbers = ['s']; => Fehöereldung "string"
// Array ist in TS eine generische Klasse
var myStrings = ['r', 't'];
var myStrings2 = myStrings;
console.log("myStrings2 === myStrings: ", myStrings2 === myStrings ? 'gleich' : 'ungleich'); // gleich
var myStrings3 = ['r', 't'];
console.log("myStrings3 === myStrings: ", myStrings3 === myStrings ? 'gleich' : 'ungleich'); // ungleich
// KOPIE VON EINEM ARRAY
var myStringsCopy = __spreadArray([], myStrings, true);
console.log("myStringsCopy === myStrings ", myStringsCopy === myStrings ? 'gleich' : 'ungleich'); // ungleich
// DESTRUCTURING OF ARRAYS
var myArray2 = [3, 5, 6, 1];
var first = myArray2[0], second = myArray2[1], third = myArray2[2];
console.log("first: ", first);
console.log("third: ", third);
console.info('\n HTML COLLECTION');
var headings2 = document.getElementsByTagName('h2');
console.log("heading2: ", headings2);
var redElements = document.getElementsByClassName('red');
console.log("redElements: ", redElements);
var numberInputs = document.querySelectorAll('input[type = "number"]');
console.log("numberInputs: ", numberInputs);
// entries()
// forEach()
// item()
// keys()
// values()
console.info("\n Node list of Elements to Arrays");
// bei es5
var nodeListEntriesES5 = Array.prototype.slice.call(numberInputs);
// bei neueren es Versionen:
//let nodeListEntriesES6: Array<HTMLInputElement> = Array.from((numberInputs as NodeListOf<HTMLInputElement>));
// oder Type Assertion später bei jedem Element einzeln in einer Iteration ausführen
// let nodeListEntriesES6: Array<Element> = Array.from(numberINputs);
console.info('\n TUPEL');
// Die gewünschten Datentypen vom Tupel werden INNERHALB von eckigen Klamern angegeben
var tupel;
// Zuweisung von Werten ist wie beim Array
tupel = [new Date(), 'warmer Tag'];
// Tupel können optionale Elemente beinhalten
var tupel2;
tupel2 = [1, 'wert für 1', true];
tupel2 = [2, 'wert für 2'];
// Auf Einträge kann man mit Indizes zugreifen
console.log("tupel[1] ", tupel2[1]); // string
