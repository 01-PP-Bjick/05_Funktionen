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

ausgabeNamenParams("Patrick", "Bjick");
ausgabeNamenParams(prompt("Vorname?"), prompt("Nachname?"));

function ausgabeNamenParams(firstName, familyName) 
{
    console.log("Hallo" + " " + firstName + " " + familyName + "!");
}

