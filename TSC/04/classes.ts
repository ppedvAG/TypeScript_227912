// LEERE KLASSEN OHNE KONSTRUKTOR

class Creature {
    // Ist eine Eigenschaft durch Konstruktor nicht befüllt, muss sie eine undefined-Option zulassen
    // Entweder durch Zuweisung vom Wert "undefined"
    // oder durch Postfix '!'
    age!: number;
    height!:number;
    areal!: string;
    existingNow!:boolean;
}

const newCreature = new Creature();
console.log("newCreature.Age :>> ", newCreature.age); // undefined
// const newCreature1 = new Creature(14);
// Automatisch angelegter Konstruktor erwartet keine Argumente


// KLASSE MIT KONSTRUKTOR
class Creature1 {
    // zum automatischen Anlegen von Props kann Modizierer "public" im Konstruktor verwendet werden
    // im Fall mit Konstruktor optionale Props können mit '?' angelegt werden
    constructor(public age: number, public height: number, public areal: string, public existingNow?: boolean) {

    }

}

const newCreature1_1 = new Creature1(23, 45, 'Europa');
const newCreature1_2 = new Creature1(13, 25, 'Afrika', true);


// KONSTRUKTOR FÜHRT BEIM INSTANZIIEREN BESTIMMTE OPERATIONEN AUS

class Creature2 {
    birthdate: number;
    constructor(public age: number, public height: number, public areal: string, public existingNow?: boolean) 
    {
        console.log("Instanz von Creature2 wurde angelegt.");
        this.birthdate = (new Date().getFullYear()) - age;
    }
}

const newCreature2_1 = new Creature2(13, 25, 'Asien', true);
console.log('newCreature2_1... :>> ', newCreature2_1.birthdate); // 2010


// MODIFIER

// - public
// - private
// - static
// - readonly

// Member ohne Modifier sind public
class Creature3 {
    birthdate: number;
    private isCloned: boolean;
    constructor(public age: number, public height: number, public areal: string, isCloned: boolean,  public existingNow?: boolean) 
    {
        console.log("Instanz von Creature2 wurde angelegt.");
        this.birthdate = (new Date().getFullYear()) - age;
        this.isCloned = isCloned
    }

    giveAHintAboutCloned() {
        if(this.isCloned) {
            return "some University studied this";
        }
    }
    static idOfCreatureDefenition: number = 3;
    static readonly idOfCreatureDefinitionNotChangable: number = 3;
}

const newCreature3_1 = new Creature3(13, 25, 'Australia', true, false);
//console.log(newCreature3_1.isCloned); // nicht verfügbar weil => private und nur innerhalb unserer klasse aufrufbar
console.log(newCreature3_1.giveAHintAboutCloned());
console.log(Creature3.idOfCreatureDefenition); // 3

// Darf man statische Eigenschaften/Properties ändern?
Creature3.idOfCreatureDefenition = 4;
console.log(Creature3.idOfCreatureDefenition); // 4

// Ist das nicht gewünscht, dann => READONLY
//Creature3.idOfCreatureDefinitionNotChangable = 4;

/*
Programmieren sie eine öffentlichen Transportmittel-Klasse mit folgenden Eigenschaften (Properties):
    - Modell
    - Max-Geschwindigkeit
    - Preis
    - Aktuelle Geschwindigkeit
    - Zustand (an/aus)
und folgende Methoden:
    - Beschleunige: Erhöht die Geschwindigkeit, darf aber Maximal-Geschwindigkeit nicht überschreiten
    - Bremse: Setzt die Geschwindigkeit runter, darf aber in den Minus-Bereich nicht reingehen
    - StarteMotor: WEchselt von Zustand aus zu an
    - StoppeMotor: WEchselt von Zustand an zu aus
    - BeschreibeMich: Gibt Informationen über das Transportmittel als String zurück
    Überlegen Sie welche Datentypen die Eigenschaften am besten abbilden und welche 
    Zugriffsmodifizierer (public/private) geeignet sind. Programmieren Sie zudem einen oder mehrere Konstruktoren.

Legen Sie eine Instanz der Klasse Transport im FuhrparkKonsument an. Rufen Sie die Methode "BeschreibeMich" auf.
*/


class Transportmittel {
    istAn: boolean = false;
    private preis: number;
    private modell: string;
    private aktuelleGeschwindigkeit: number = 0;
    constructor(modell: string, preis: number, public maxGeschwindigkeit: number) {
        this.modell = modell;
        this.preis = preis;
    }
    beschleunige(km: number): string {
        if (this.aktuelleGeschwindigkeit + km < this.maxGeschwindigkeit) {
            this.aktuelleGeschwindigkeit = this.aktuelleGeschwindigkeit + km;
            return 'akt Geschw: ' + String(this.aktuelleGeschwindigkeit);
        }
        else {
            this.aktuelleGeschwindigkeit = this.maxGeschwindigkeit
            return 'max Grenze erreicht, nämlich: ' + String(this.aktuelleGeschwindigkeit)
        }
    }
    bremse(km: number): string {
        if (this.aktuelleGeschwindigkeit - km > 0) {
            this.aktuelleGeschwindigkeit = this.aktuelleGeschwindigkeit - km;
            return 'akt Geschw: ' + String(this.aktuelleGeschwindigkeit);
        }
        else {
            this.aktuelleGeschwindigkeit = 0;
            return 'akt Geschw: ' + String(this.aktuelleGeschwindigkeit);
        }
     }
    starteMotor() {
        !this.istAn ? this.istAn = true : 'Transportmittel war schon an';
    }
    stoppeMotor() {
        this.istAn ? this.istAn = false : 'Transportmittel war schon aus';
    }
    beschreibeMich() {
        return `
     modell: ${this.modell}
     preis: ${this.preis}
     aktuelleGeschwindigkeit: ${this.aktuelleGeschwindigkeit}
     `
    }
}

document.getElementById('transportMittelOutput')!.innerText = new Transportmittel('VW Polo', 15000, 190).beschreibeMich();