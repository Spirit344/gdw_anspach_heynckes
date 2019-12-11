console.log("Henrik Heynckes");

//Variablen
const max = 5;
const min = 0;
var anzahl = 0;
var bewertung = 0;
var gesamtwertung = 0;

//Einbinden des readline moduls
const readline = require("readline");

function createReadline() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return rl;
}

//Generate Random Number
function getRandomInt() {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Ausgabe Funktionen
const log = function (message) {
    console.log(message);
};

//Bewerten
function bewerten(bewertung, max, callback) {

    if (bewertung > max) {
        callback("Sie können nur maximal 5 Sterne vergeben!");
        return;
    }
    else if (bewertung < 0) {
        callback("Sie können nur mindestens 0 Sterne vergeben!");
        return;
    }
    else if (isNaN(bewertung)) {
        callback("Bitte geben Sie eine Ganzzahl ein!");
        return;
    }
    else {
        anzahl++;
        callback("Ihre Bewertung:" + bewertung);
        callback("Maximale Sterne:" + max);
        callback("Anzahl Bewertungen:" + anzahl);
    }
    gesamtwertung = gesamtwertung + bewertung;
}

//Durchschnittsrating berechnen
function avgRating() {
    const durchschnitt = gesamtwertung / anzahl;
    console.log("Durchschnittsrating:", durchschnitt);
    return durchschnitt;
}

//Singlerating
function singleRating() {
    //Abfragen der Bewertung
    const rl = createReadline();
    rl.question('Geben Sie ihre Bewertung ein:', function (answer) {
        console.log(`Answer: ${answer}`);
        bewerten(answer, max, log);
        rl.close();
    });
}

//Multirating
function multiRating() {

    const rl = createReadline();
    rl.question('Wie viele Bewertungen wollen Sie simulieren:', function (answer) {
        console.log(`Answer: ${answer}`);
        rl.close();
        const n = parseInt(answer) || 0;

        for (let i = 0; i < n; i++) {

            const rating = getRandomInt();
            bewerten(rating, max, log);
        }
        avgRating();
    });
}

//Menüauswahl
function menue() {
    const rl = createReadline();
    rl.question('Bitte auswaehlen:\n(1) einzelne Bewertung\n(2) n Bewertungen simulieren\n Auswahl:', (answer) => {
        answer = parseInt(answer);
        rl.close();
        switch (answer) {
            case 1: {
                singleRating();
                break;
            }
            case 2: {
                multiRating();
                break;
            }
            default: {
                console.error("Bitte waehlen Sie einen gültigen Eintrag");
                menue();
                break;
            }
        }

    });
}
menue();