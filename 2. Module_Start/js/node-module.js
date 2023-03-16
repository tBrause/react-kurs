/* module.exports ist zu Beginn ein leeres Objekt, das pro Datei existiert.
Wenn man die Datei mit require() importiert, erhält man das, was in
module.exports gespeichert ist.
Man kann nun module.exports direkt überschreiben (mit module.exports = ...)
oder an module.exports mit der Punkt-Schreibweise etwas einfügen.
Aber Achtung: Würde man die Reihenfolge der unteren beiden Exporte
tauschen, wäre myFunction nicht mehr verfügbar, da mit der Zuweisung
module.exports = ... ja ein neues Objekt (in diesem Fall die Funktion,
die in JS eine Art Objekt ist) gespeichert und das alte Objekt überschrieben wird.
*/

module.exports = function () {
	console.log('Node-Module Default-Export');
};

module.exports.myFunction = function () {
	console.log('Node-Module benannter Export');
};
