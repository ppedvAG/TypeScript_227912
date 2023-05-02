
/*
#Aufgabe 'login form'

Erstellen Sie eine Mini-Anwendung, die nach einem Benutzernamen und nach
einem Passwort fragt und dann den Benutzer begrüßt
Jedes Passwort wird erstmal akzeptiert.

*/

function login(): void {

    let u: string = (<HTMLInputElement> document.getElementById('user')!).value;
    document.getElementById('hi')!.textContent = "Hello " + u;
}