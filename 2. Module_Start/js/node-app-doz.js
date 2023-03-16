/*
Node hat ein eigenes Modulsystem namens "CommonJS"
Man erkennt Dateien mit diesem Modulsystem an der
Verwendung von require zum importieren und module.exports
zum exportieren.

*/

/* NPM-Module werden ohne Pfad (nur mit Modulname) importiert,
üblicherweise vor den selbstgeschriebenen Modulen.  */

const uuid = require('uuid');

const myDefaultImport = require('./node-module');
const { myFunction } = require('./node-module');

myDefaultImport();
myFunction();

console.log(uuid.v4());

/*  Achtung: Inzwischen versteht Node das reguläre
Modulsystem von JavaScript ("Ecma-Script Module"). Wenn
man dieses System für Node-Anwendungen nutzen möchte, muss
man in der Datei package.json den Wert für "type" auf "module"
setzen. Dann müssen allerdings Dateien, die noch mit module.exports
exportieren ".cjs" als Dateiendung haben.
Andersherum, wenn also in package.json nicht "type": "module" steht,
müssen Dateien, die mit dem regulären JS-Syntax exportieren, ".mjs"
als Dateiendung haben. Allerdings muss dann die import()-Funktion
genutzt werden, die aber Promise-basiert ist, also nur in einer
asynchronen Funktion genutzt werden kann... Also letztlich nichts,
was man nutzen möchte, wenn es sich vermeiden lässt.
Die beste Lösung, wenn man in Node-Anwendungen zwei Modulsysteme nutzen muss,
sind Module-Bundler wie Parcel, Rollup oder Webpack, welche beide Systeme
verstehen.
*/

/* (async () => {
  const { shuffle } = await import('./helpers.mjs');
  console.log(shuffle([1, 2, 3]));
})(); */
