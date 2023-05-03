// NUTZEN 1: INTERFACE ALS DATENTYPVORLAGE

interface IPerson {
    age: number;
    firstName: string;
    lastName: string;
}

// Typ Person bestätigt, dass das anonyme Objekt dem gewünschten Shape entspricht
// const somePerson: IPerson = {age: 44, firstName: 'Peter', lastName: 'Schulz'}

// NUTZEN 2: INTERFACE ALS VORLAGE FÜR KLASSEN
// Klassen, die so ein Interface implementieren, müssen zumindest die angegebenen Props auch beinhalten

// Restrictions:
// - Wenn eine Klasse eine private Prop hat, kann sie nicht im Interface vorgegeben werden
// - Modifier public ist auch nicht erlaubt. Einfach ohne Modifier deklarieren
// - static als Modifier auch nicht erlaubt
// - statische Member können generell nicht in Interface vorgegeben werden
interface ICreature4 {
    // readonly ist erlaubt
    readonly birthdate: number;

    // isCloned: boolean;
    // Class 'Creaute4' => Fehlermeldung weil wir es nicht korrekt implementiert haben
    // private isCloned: boolean; => Fehlermeldung "private modifier"

    // public age: number; => Fehlermeldung weil public modifier benutzt wird
    age: number;
    height: number;
    areal: string;

    // Optionale Member sind erlaubt
    exisitingNow?: boolean;
    
    // static idOfCreatureDefinition: number; => Fehlermeldung weil static modifier benutzt wird
    // idOfCreatureDefinition: number;
    //giveAHintAboutCloned(): "Some University studied this" | undefined; // nur Name, Argumente und Rückgabetyp können vorgegeben werden
    
} 

class Creature4 implements ICreature4 {
    readonly birthdate: number;
    private isCloned: boolean;
    constructor(public age: number, public height: number, public areal: string, isCloned: boolean, public existingNow?: boolean) {
        console.log("Instanz von Creature4 wurde angelegt.");
        this.birthdate =(new Date().getFullYear()) - age;
        this.isCloned = isCloned;
        
    }

    giveAHintAboutCloned() {
        if(this.isCloned) {
            return 'some University studied this.';
        }
    }
    static idOfCreatureDefinition: number = 3;
    static readonly idOfCreatureDefinitionNotChangable: number = 3;
        
}


// NUTZEN 3: Mit Interfaces kann man auch eine Vererbungskette von OOP abbilden
interface IAnimal extends ICreature4 {
    hasLegs: boolean;
    isInBirthAge: boolean;
}

class Animal implements IAnimal {
    // lässt man ein Interface durch QuickFix automatisch implementieren, bekommt man folgende Struktur
    // hasLegs
    // isInBirthAge
    // birthdate
    // age
    // height
    // areal
    // existingNow?
    // giveAHintAboutCloned()

    constructor(
        public hasLegs: boolean,
        public isInBirthAge: boolean,
        public birthdate: number,
        public age: number,
        public height: number,
        public areal: string,
        isCloned: boolean
    ) {
        this.isCloned = isCloned;
    }
    private isCloned: boolean;
    existingNow?: boolean | undefined;
    giveAHintAboutCloned(): "some University studied this" |undefined {
        if(this.isCloned) {
            return "some University studied this";
        }
    }
}


/* 

Übung 1.

Implementieren Sie ein Interface, welches die Fähigkeit eines Transportmittels beschreibt, 
andere Transportmittel mitzutransportieren (z.B. Schiffe die Autos transportieren). 
Überlegen Sie, welche Methoden so eine Klasse implementieren sollte und 
implementieren Sie dann für die Klassen Schiff und Flugzeug das Interface. 
Erweitern Sie die Klassen Schiff und Flugzeug zudem so, dass es ein Transportmittel-Objekt aufnehmen und 
in seiner BeschreibeMich()-Methode Informationen darüber ausgeben kann.

Schreiben Sie danach eine neue Methode, welche als Parameter zwei Transportmittelobjekte übernimmt und 
nach Prüfung der Interfaces entweder ein Objekt auf das andere belädt oder eine Fehlermeldung ausgibt.
 */


/* 
Übung 2.

Holen Sie von der Seite http://jsonplaceholder.typicode.com/
alle Todos mit dem Code 

fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => console.log(json))

Die geholten Daten müssen einem Array mit Elementen von einem vorgegebenen Interfacetyp entsprechen.

Geben Sie die Titel der Todos in einer Liste aus.
*/