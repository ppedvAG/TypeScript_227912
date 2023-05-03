// Klassen DEKORATOR
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var _this = this;
function setIdTo100(target) {
    target.prototype.id = 100;
}
function Component(options) {
    return function (target) {
        // target = target implements Component
        target.prototype.selector = options.selector;
        target.prototype.templateUrl = options.templateUrl;
        target.prototype.styleUrls = options.styleUrls;
    };
}
/*@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})*/
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
var neuKomponente = new AppComponent();
console.log("neue Komponente: ", neuKomponente.selector);
// METHODEN DEKORATOR
function LoggeMethodeAufruf(target, propertyKey) {
    console.log("Target: ", target); // Gibt uns die Klasse selbst aus
    console.log("PropertyKey: ", propertyKey); // Prop an welcher Stelle der Dekorator angewendet wurde
    //console.log("PropertyDescriptor", propertyDescriptor.value()); // Wert der Property 
    //propertyDescriptor.value = function (...args: any[]) {
    //  return `args vom Methodendekorator: ${args}`;
    //}
}
var TestClass2 = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _printId_decorators;
    return _a = /** @class */ (function () {
            function TestClass2() {
                this.id = (__runInitializers(this, _instanceExtraInitializers), void 0);
            }
            TestClass2.prototype.printId = function (prefix) {
                if (prefix === void 0) { prefix = "Id von TestClass2-Instanz: "; }
                return prefix + this.id;
            };
            return TestClass2;
        }()),
        (function () {
            _printId_decorators = [LoggeMethodeAufruf];
            __esDecorate(_a, null, _printId_decorators, { kind: "method", name: "printId", static: false, private: false, access: { has: function (obj) { return "printId" in obj; }, get: function (obj) { return obj.printId; } } }, null, _instanceExtraInitializers);
        })(),
        _a;
}();
var newTestClass2 = new TestClass2();
console.log("newTEstClass2(Wert für Dekorator Args) :>> ", newTestClass2.printId('wert für Dekorator Args'));
