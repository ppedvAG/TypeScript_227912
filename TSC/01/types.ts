console.info('\n ANY')

// ANY MIT TYPENANPASSUNG
let myAny; // ohne DAtentypenangaben und ohne Initialisierung ist die Variable vom Typ 'any',
// der Datentyp wird bei der Zuweisung aber angepasst.
let myString1 = 'string1wert';
myAny = myString1;
console.log('typeof myAny: ', typeof myAny); // string, aber string ist es in js
let myNumber1: number = 34;
// myNumber1 = myAny; => Fehler wegen String/Number
// myNumber1: number = myAny; => gleicher Fehler wie oben

// ANY FEST GESETZT
let myAny1: any; // ohne Datentypangaben und ohne Initialisierung ist die Variable vom Typ 'any'
myAny1 = 'string';
let myNumber2 = 456;
myNumber2 = myAny1; // Keine Fehlermeldung
let myNumber3: number = myNumber2;
console.log("myNumber3: ", myNumber3) // string, obwohl intellisense hier "number" zeigt. Kompiliert wird es auch ohne Probleme.


console.info("\n UNKNOWN");

// let myUnknown: unknown = unknown; // Es gibt kein Schlüsselwort für den Wert von unknown
let myUnknown: unknown;
myUnknown = undefined;
myUnknown = null;
myUnknown = "string";

// Bei Zuweisungen von unknown zu anderen Datentypen ist TypeChecking an
// let myString2: string = myUnknown => Fehler (Unknown/string)

// let myUndefined: undefined = myUnknown; (nicht kompatibel)
// let myNull: null = myUnknown; (nicht kompatibel)

console.info("\n VOID")

// let myVoid: void = void; // auch hier kein Schlüsselwort für den Wert void
let myVoid: void;

let myFct1 = () => {}; // Datentyp von myFct1: () => void
let myFct2 = (): void => {}; // das gleiche wie oben
let myFct3 = (): void => {
    // return "string"; => Fehlermeldung "String"
    // return myVoid; => Funktioniert!
    return; // das gleiche wie Zeile davor
};

myVoid = undefined; // kompatibel
// myVoid = null; => nicht kompatibel (Fehlermeldung "null")


console.info("\n NULL");

let myNull: null = null;
// myNull = undefined; => Fehlermeldung "undefined"
// let myUndefined: undefined = myNull; => Fehlermeldung "null"

console.info("\n NEVER")

// let myNever: never = never; => Fehlermeldung "never"
let myNever: never;

// Bei Funktionen
let myFct4 = () => {
    // Datentyp - () => never, wegen unreachable code
    throw new Error();
    console.log('object'); // Unreachable code detected

};

function myFct5() {
    // () => number, obwohl das Ende der Funktion auch nie erreicht wird
    myFct5();
    return 5;
};
// let etwas1 = myFct5();
// console.log(etwas1);


// Bei leeren Arrays
let myArray = []; // any[]
let etwas = [][0]; // never
etwas = [][1]; // auch never

// KOMPATIBILITÄT
// myNever = undefined; => Fehlermeldung "undefined"
// myNever = null; => Fehlermeldung "null"
// myNever = myVoid; => Fehlermeldung "void"

myNever = [][0];
let myNumber4: number = myNever; // Funktioniert bei Zuweisung zu anderen Datentypen
console.log("myNumber4 :>> ", myNumber4); // Fehlermeldung "undefined"

console.info("\n Literal types");
// Literale Datentypen akzeptieren nur die Werte, die diese Literale erzeugen

let myGrößeneinheit: "cm";
myGrößeneinheit = "cm";
let test: 3;
test = 3;

// AUCH FÜR LITERAL FÜR LEERES ARRAY
let test1: [];
// let arr: any[] = new Array(30);
// test1 = [1, 4]; => Fehlermeldung [number, number]

// ABER NICHT FÜR LITERAL FÜR LEERES OBJEKT
let test2: {};
test2 = {a: "a", b: "b"};

// ANWENDUNGSBEISPIEL FÜR LITERAL TYPES:
let myUnits: "cm" | "km" | "inch";