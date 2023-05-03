// Union
// Variablen vom angegebenen Datentyp werden entweder
// alle Werte vom Typ string, Date und number akzeptiert
function giveDate(dateArg) {
    if (typeof dateArg === "string") {
        return new Date(dateArg);
    }
    else if (dateArg instanceof Date) {
        return dateArg;
    }
    else if (typeof dateArg === "number") {
        return new Date(dateArg);
    }
    return 'param wra kein gültiges Date, string oder number';
}
console.log("Erste Ausgabe: ", giveDate('2023-07-20'));
console.log("Zweite Ausgabe: ", giveDate(new Date()));
console.log("Dritte Ausgabe: ", giveDate(1000000000));
var element = {
    wert: 100,
    alter: 1000
};
// das gleiche Ziel könnte man auch mit einer Klasse erreichen:
var ChemischesElement = /** @class */ (function () {
    function ChemischesElement() {
        this.wert = 0;
        this.alter = 0;
    }
    return ChemischesElement;
}());
