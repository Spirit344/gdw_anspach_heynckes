const cities = require('./cities.js');
const users = require('./users.js');
// Aufgabe 1 

//Konstante die Namen speichert
const name = "Lara";
//Namensausgabe
console.log(name);
var ratingName = 1;

const hello = "hello";

function konkat() {
    var world = "World";
    console.log(hello + world);
    return world;
}


function konkat2(world) {
    console.log(world + hello);
}


function Rating(nameAbstimmung, anzahlAbstimmung, letzteErgebnis){
    this.nameAbstimmung = nameAbstimmung;
    this.anzahlAbstimmung = anzahlAbstimmung;
    this.letzteErgebnis = letzteErgebnis;
    this.durchschnittBewertung =  () => this.letzteErgebnis / this.anzahlAbstimmung;
};

//Aufgabe 2 

//Variablen/Konstanten deklarieren
/* alte Lösung
const maxBewertung = 5;
var aktAnzBewertungen = 44;
var aktuelleSterneBewertung = "Die App ist sehr gut"
*/

//neue Lösung
const maxBewertung = 5;
var aktAnzBewertungen = 4;
var aktuelleSterneBewertung = 17;
let bewertungen = [];
var lastBewertung;


//Ausgabe der Bewertung
//console.log(maxBewertung, aktAnzBewertungen, aktuelleSterneBewertung, bewertungBerechnen());

//Simulierung einer Bewertung und überprüfung der Veränderung einer Konstanten
//maxBewertung = 4;  //TypeError: Assignment to constant variable.
aktAnzBewertungen = 5;
aktuelleSterneBewertung = 20;

//Ausgabe der neuen Werte
//console.log(maxBewertung, aktAnzBewertungen, aktuelleSterneBewertung, bewertungBerechnen());



//Aufgabe 3 

/*
const readline1 = require('readline');
var rl1 = readline1.createInterface({
    input: process.stdin,
    output: process.stdout
});
sterneBewertungAbgeben();
function sterneBewertungAbgeben() {
    rl1.question("Bitte geben Sie an, wie viele Sterne Sie der App geben würden:", function (answer) {
        if (answer > maxBewertung || answer < 0 || isNaN(answer)) {
            console.log("Bitte geben Sie nur Bewertungen von 0 bis 5 Sterne ab! ")
            sterneBewertungAbgeben();
        }
        else {
            aktAnzBewertungen++;
            aktuelleSterneBewertung = aktuelleSterneBewertung*1 + answer*1;
            console.log(`Bewertung:${answer}`);
            console.log(answer, aktAnzBewertungen, aktuelleSterneBewertung, bewertungBerechnen());
            rl1.close()
        }
    });
}
//console.log(`Höchstmögliche Bewertung:${maxBewertung}`, `Anzahl der Bewertungen:${aktAnzBewertungen}`, `gesamtanzahl an Sternen:${aktuelleSterneBewertung}`, `Durchschnitt:${bewertungBerechnen()}`);
*/

function Car(speed) {
    this.speed = speed;

    this.kmh = function () {
        return this.speed * 1.609;
    }
}

console.log(new Car(100).kmh());

// Aufgabe 4 

function getRandomInt() {
    return Math.floor(Math.random() * (maxBewertung + 1));
}

const readline2 = require('readline');
var rl2 = readline2.createInterface({
    input: process.stdin,
    output: process.stdout
});


bewertungsmengeAbfragen();
function bewertungsmengeAbfragen() {
    var tempBewertungsanzahl = 0;
    rl2.question("Bitte geben Sie an, wie viele Bewertungen Sie abgeben möchten", function (answer2) {
        if (answer2 > 300 || answer2 < 0 || isNaN(answer2)) {
            console.log("Bitte geben Sie nur Werte von 0 bis 300 ein! ")
            bewertungsmengeAbfragen();
        } else {
            tempBewertungsanzahl = answer2;
            console.log(`Bewertungsanzahl:${tempBewertungsanzahl}`);
            sterneBewertungAbgebenN(tempBewertungsanzahl);
            rl2.close()
        }
    });
}


function sterneBewertungAbgebenN(n) {
    let y = 0;
    while (y < n) {
        var tempRandomBewertung = getRandomInt();
        aktAnzBewertungen++;
        aktuelleSterneBewertung = aktuelleSterneBewertung * 1 + tempRandomBewertung * 1;
        console.log(`Bewertung:${tempRandomBewertung}`);
        console.log(aktAnzBewertungen, aktuelleSterneBewertung);
        y++;
        ratingName++
        lastBewertung = tempRandomBewertung;
    }

    bewertungen.push(aktAnzBewertungen, lastBewertung);
    console.log(`Hier ist die Array Ausgabe:`)
    console.log(`Laenge des Arrays:${bewertungen.length}`);
    console.log(`Letzte Bewertung:${bewertungen[1]}`);

    let ratings = new Rating(ratingName, aktAnzBewertungen, aktuelleSterneBewertung);
    console.log(`Hier ist mein Object:`);
    console.log(ratings);
    console.log(ratings.durchschnittBewertung());
}

konkat();
konkat2();


// cities.addCity('New York', 3000000, 'New York', (err, data) => {
//     if (err) console.error(err);
//     else {
//         console.log(data);
//
//         cities.deleteCity('New York', (err, data) => {
//             if (err) console.error(err);
//             else console.log(data);
//         });
//     }
// });

try {
    const city = cities.getCity('Gummersbach');

    (async () => {
        console.log(city);

        try {
            const user = await users.addUser('Lara', 'Anspach', 'lara_elaine.anspach@smail.th-koeln.de', city);
            console.log(user);
        } catch (e) {
            console.error(e);
        }
    })();
} catch(e) {
    console.error(e);
}