// LEERE KLASSEN OHNE KONSTRUKTOR
var Creature = /** @class */ (function () {
    function Creature() {
    }
    return Creature;
}());
var newCreature = new Creature();
console.log("newCreature.Age :>> ", newCreature.age); // undefined
// const newCreature1 = new Creature(14);
// Automatisch angelegter Konstruktor erwartet keine Argumente
// KLASSE MIT KONSTRUKTOR
var Creature1 = /** @class */ (function () {
    // zum automatischen Anlegen von Props kann Modizierer "public" im Konstruktor verwendet werden
    // im Fall mit Konstruktor optionale Props können mit '?' angelegt werden
    function Creature1(age, height, areal, existingNow) {
        this.age = age;
        this.height = height;
        this.areal = areal;
        this.existingNow = existingNow;
    }
    return Creature1;
}());
var newCreature1_1 = new Creature1(23, 45, 'Europa');
var newCreature1_2 = new Creature1(13, 25, 'Afrika', true);
// KONSTRUKTOR FÜHRT BEIM INSTANZIIEREN BESTIMMTE OPERATIONEN AUS
var Creature2 = /** @class */ (function () {
    function Creature2(age, height, areal, existingNow) {
        this.age = age;
        this.height = height;
        this.areal = areal;
        this.existingNow = existingNow;
        console.log("Instanz von Creature2 wurde angelegt.");
        this.birthdate = (new Date().getFullYear()) - age;
    }
    return Creature2;
}());
var newCreature2_1 = new Creature2(13, 25, 'Asien', true);
console.log('newCreature2_1... :>> ', newCreature2_1.birthdate); // 2010
// MODIFIER
// - public
// - private
// - static
// - readonly
// Member ohne Modifier sind public
var Creature3 = /** @class */ (function () {
    function Creature3(age, height, areal, isCloned, existingNow) {
        this.age = age;
        this.height = height;
        this.areal = areal;
        this.existingNow = existingNow;
        console.log("Instanz von Creature2 wurde angelegt.");
        this.birthdate = (new Date().getFullYear()) - age;
        this.isCloned = isCloned;
    }
    Creature3.prototype.giveAHintAboutCloned = function () {
        if (this.isCloned) {
            return "some University studied this";
        }
    };
    Creature3.idOfCreatureDefenition = 3;
    Creature3.idOfCreatureDefinitionNotChangable = 3;
    return Creature3;
}());
var newCreature3_1 = new Creature3(13, 25, 'Australia', true, false);
//console.log(newCreature3_1.isCloned); // nicht verfügbar weil => private und nur innerhalb unserer klasse aufrufbar
console.log(newCreature3_1.giveAHintAboutCloned());
console.log(Creature3.idOfCreatureDefenition); // 3
// Darf man statische Eigenschaften/Properties ändern?
Creature3.idOfCreatureDefenition = 4;
console.log(Creature3.idOfCreatureDefenition); //
