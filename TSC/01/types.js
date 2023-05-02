console.info('\n ANY');
// ANY MIT TYPENANPASSUNG
var myAny; // ohne DAtentypenangaben und ohne Initialisierung ist die Variable vom Typ 'any',
// der Datentyp wird bei der Zuweisung aber angepasst.
var myString1 = 'string1wert';
myAny = myString1;
console.log('typeof myAny: ', typeof myAny); // string, aber string ist es in js
var myNumber1 = 34;
// myNumber1 = myAny; => Fehler wegen String/Number
// myNumber1: number = myAny; => gleicher Fehler wie oben
// ANY FEST GESETZT
var myAny1; // ohne Datentypangaben und ohne Initialisierung ist die Variable vom Typ 'any'
myAny1 = 'string';
var myNumber2 = 456;
myNumber2 = myAny1; // Keine Fehlermeldung
var myNumber3 = myNumber2;
console.log("myNumber3: ", myNumber3); // string, obwohl intellisense hier "number" zeigt. Kompiliert wird es auch ohne Probleme.
console.info("\n UNKNOWN");
// let myUnknown: unknown = unknown; // Es gibt kein Schlüsselwort für den Wert von unknown
var myUnknown;
myUnknown = undefined;
myUnknown = null;
myUnknown = "string";
// Bei Zuweisungen von unknown zu anderen Datentypen ist TypeChecking an
// let myString2: string = myUnknown => Fehler (Unknown/string)
// let myUndefined: undefined = myUnknown; (nicht kompatibel)
// let myNull: null = myUnknown; (nicht kompatibel)
console.info("\n VOID");
// let myVoid: void = void; // auch hier kein Schlüsselwort für den Wert void
var myVoid;
var myFct1 = function () { }; // Datentyp von myFct1: () => void
var myFct2 = function () { }; // das gleiche wie oben
var myFct3 = function () {
    // return "string"; => Fehlermeldung "String"
    // return myVoid; => Funktioniert!
    return; // das gleiche wie Zeile davor
};
myVoid = undefined; // kompatibel
// myVoid = null; => nicht kompatibel (Fehlermeldung "null")
console.info("\n NULL");
var myNull = null;
// myNull = undefined; => Fehlermeldung "undefined"
// let myUndefined: undefined = myNull; => Fehlermeldung "null"
console.info("\n NEVER");
// let myNever: never = never; => Fehlermeldung "never"
var myNever;
// Bei Funktionen
var myFct4 = function () {
    // Datentyp - () => never, wegen unreachable code
    throw new Error();
    console.log('object'); // Unreachable code detected
};
function myFct5() {
    // () => number, obwohl das Ende der Funktion auch nie erreicht wird
    myFct5();
    return 5;
}
;
// let etwas1 = myFct5();
// console.log(etwas1);
// Bei leeren Arrays
var myArray = []; // any[]
var etwas = [][0]; // never
etwas = [][1]; // auch never
// KOMPATIBILITÄT
// myNever = undefined; => Fehlermeldung "undefined"
// myNever = null; => Fehlermeldung "null"
// myNever = myVoid; => Fehlermeldung "void"
myNever = [][0];
var myNumber4 = myNever; // Funktioniert bei Zuweisung zu anderen Datentypen
console.log("myNumber4 :>> ", myNumber4); // 
