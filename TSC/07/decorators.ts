// Klassen DEKORATOR

function setIdTo100 (target: Function) {
    target.prototype.id = 100;
}

/*@setIdTo100
class TestClass {
    id?: number;
}*/

//console.log("testclass: ", new TestClass().id); // 100

// DEKORATOR FABRIK
interface Component {
    selector:string,
    templateUrl: string,
    styleUrls: string[]
}

function Component(options:Component) {
    return function(target: Function) {
        // target = target implements Component
        target.prototype.selector = options.selector;
        target.prototype.templateUrl = options.templateUrl;
        target.prototype.styleUrls = options.styleUrls;
    }
}

/*@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})*/

class AppComponent implements Component {
    selector!: string;
    templateUrl!: string;
    styleUrls!: string[];
}

const neuKomponente = new AppComponent();
console.log("neue Komponente: ", neuKomponente.selector);


// METHODEN DEKORATOR

function LoggeMethodeAufruf(
    target: object,
    propertyKey: string,
  // propertyDescriptor: PropertyDescriptor // Beschreibung der Properties
)
{
    console.log("Target: ", target); // Gibt uns die Klasse selbst aus
    console.log("PropertyKey: ", propertyKey); // Prop an welcher Stelle der Dekorator angewendet wurde
    //console.log("PropertyDescriptor", propertyDescriptor.value()); // Wert der Property 
    //propertyDescriptor.value = function (...args: any[]) {
      //  return `args vom Methodendekorator: ${args}`;
    //}
}

class TestClass2 {
    private id: string | undefined;

    @LoggeMethodeAufruf
    printId(prefix: string = "Id von TestClass2-Instanz: ") {
        return prefix + this.id;
    }
}


let newTestClass2 = new TestClass2();
console.log("newTEstClass2(Wert für Dekorator Args) :>> ", newTestClass2.printId('wert für Dekorator Args'));