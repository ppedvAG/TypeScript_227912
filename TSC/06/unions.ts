// Union
// Variablen vom angegebenen Datentyp werden entweder
// alle Werte vom Typ string, Date und number akzeptiert

type stringDateNumberUnion = string | Date | number;

function giveDate(dateArg: stringDateNumberUnion): Date | string {
    if(typeof dateArg === "string") {
        return new Date(dateArg);
    }else if (dateArg instanceof Date) 
        {
            return dateArg;
        }
        else if (typeof dateArg === "number") {
            return new Date(dateArg);
        }
        return 'param wra kein gültiges Date, string oder number'

}


console.log("Erste Ausgabe: ", giveDate('2023-07-20'));
console.log("Zweite Ausgabe: ", giveDate(new Date()));
console.log("Dritte Ausgabe: ", giveDate(1000000000));

// Intersection
// Damit lassen sich Eigenschaften von mehreren Datentypen / Strukturen in einem neuen Datentyp vereinen
interface Metall {
    wert: number;
    // farbe: string;
}

interface Stein {
    alter: number;
}

type metallSteinIntersection = Metall & Stein;
let element: metallSteinIntersection = {
    wert: 100,
    alter: 1000
}

// das gleiche Ziel könnte man auch mit einer Klasse erreichen:
class ChemischesElement implements Metall, Stein {
    wert: number = 0;
    alter: number = 0;
}