"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call) Anzahl bestimmt häufigkeit
// test();  // call

// Funktionsrumpf (body) | callee
// Funktionsdeklaration
function test()
{
    console.log("Hallo Patrick!");
}

/***** Funktion 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen();  // call
// console.log(firstName); // Fehler: Scope!

function ausgabeNamen() 
{
    let firstName = "Patrick";  // nur innerhalb der Funktion erreichbar
    console.log("Hallo " + firstName + "!");
}

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// ausgabeNamenParam("Patrick");     // call + Argument(e)
// ausgabeNamenParam("Lawrence");    // Argumente sind Daten für Parameter

function ausgabeNamenParam(firstName)   // Funktion + Parameter
{
    console.log("Hallo " + firstName + "!");
}

/***** Funktion 02c *****/
// 2c. Mehrere Parameter

// ausgabeNamenParams("Patrick", "Bjick");
// ausgabeNamenParams(prompt("Vorname?"), prompt("Nachname?"));

function ausgabeNamenParams(firstName, familyName) 
{
    console.log("Hallo" + " " + firstName + " " + familyName + "!");
}

/***** Funktionen 03a *****/
// 03a. Vorbereitung
// Postulat: one funktion = one job (uncle Bob)
// SRP single responsibility principle

// ausgabeNamenParams2("Patrick", "Bjick")

function ausgabeNamenParams2(firstName, familyName) 
{
    // 1. Funktionalität: string composing
    const GAP = " ";
    let outputStr = "Hallo" + GAP + firstName + GAP + familyName + "!"

    // 2. Funktionalität: string output
    console.log(outputStr);
}

/***** Funktionen 03b *****/
// Trennen der Funktionalität | return


// 1. Funktionalität: string composing

output(getStr("Patrick", "Bjick"));

function getStr(firstName, familyName) 
{
    const GAP = " ";
    let outputStr = "Hallo" + GAP + firstName + GAP + familyName + "!"; 
    return outputStr;   // return sendet Daten an den call zurück
    console.log("Funktion beendet");    // return bricht die Funktion ab
}

// 2. Funktionalität: string output

// output("Hi");
// output(2);
// output(true);

function output(outputData) 
{
    console.log(outputData);
}
