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

ausgabeNamenParam("Patrick");     // call + Argument(e)
ausgabeNamenParam("Lawrence");

function ausgabeNamenParam(firstName)   // Funktion + Parameter
{
    console.log("Hallo " + firstName + "!");
}
