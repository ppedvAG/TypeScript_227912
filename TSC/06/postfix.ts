// Postfix !

function giveMilisecondsOfDate(datum: Date): number | null {
    if(datum instanceof Date)
        return datum.getTime();
    else 
        return null;
    
}

// let miliseconds: number = giveMilisecondsOfDate(new Date());
// Fehlermeldung => number | null nicht assignable sind für den typen number
// Fehlermeldung => null nicht assignable für den typen number ist


// Postfix ?
// wie beim ternären Operator '.. ? .. : ..' => verkürzte if-Abfrage

interface Person1 {
    id: number;
    methode(): void;
    adresse?: {straße: string, hausnummer: number}
}

let einObjekt: Person1 | null = {id: 1, methode: () => {}};
// let resultat = einObjekt?.methode(); => Fehlermeldung methode existiert nicht für den typen NEVER
let resultat1 = einObjekt.adresse?.straße;
console.log("resultat1 = ", resultat1); // Wert ist undefined, ABER => ohne Fehlermeldung