// Postfix !
var _a;
function giveMilisecondsOfDate(datum) {
    if (datum instanceof Date)
        return datum.getTime();
    else
        return null;
}
var einObjekt = { id: 1, methode: function () { } };
// let resultat = einObjekt?.methode(); => Fehlermeldung methode existiert nicht für den typen NEVER
var resultat1 = (_a = einObjekt.adresse) === null || _a === void 0 ? void 0 : _a.straße;
console.log("resultat1 = ", resultat1); //
