"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call) Anzahl bestimmt häufigkeit
// test();

// Funktionsrumpf (body) | callee
// Funktionsdeklaration
function test()
{
    console.log("Hallo Patrick!");
}

/***** Funktion 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

ausgabeNamen();
// console.log(firstName); // Fehler: Scope!

function ausgabeNamen() 
{
    let firstName = "Patrick";  // nur innerhalb der Funktion erreichbar
    console.log("Hallo " + firstName + "!");
}
