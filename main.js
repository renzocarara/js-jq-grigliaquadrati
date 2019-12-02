// Creare in HTML una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi
// Suggerimento: usare una classe per individuare quali quadratini diventano rossi
// BONUS: generare la griglia dei quadratini utilizzando jQuery
// Nome repo: js-jq-grigliaquadrati
// -----------------------------------------------------------------------------
var side = 8; // lato griglia
var fleetSize = 15; // numero navi da piazzare
var gridSize = side * side; // dimensione griglia, numero di elementi di cui è composta

// creo la griglia di (side x side) elementi
createGrid();

// inserisco le navi nelle posizioni generate a caso
putBoatOnGrid();

// intercetto click su una cella
$('.cell').click(function() {

    // passo alla funzione il riferimento all'elemento su cui ho intercettato il click
    // coloro la cella a seconda che ci sia o meno una nave
    setColor($(this));

});

// ---------------------------- FUNCTIONs --------------------------------------
function createGrid() {
    // creo una griglia di "side" righe ognuna delle quali ha "side" elementi
    // cioè un quadrato di "gridSize" elementi

    var HTMLemptySpan = '<span class="cell"></span>'; // codice HTML da ripetere in pagina

    // ciclo per "gridSize" volte e aggiungo ogni volta il mio elemnto HTML
    for (var i = 0; i < gridSize; i++) {
        // appendo, quindi aggiungo in coda, senza sovrascrivere
        $('.grid-container').append(HTMLemptySpan);
    }
}


function putBoatOnGrid() {

    var boatPositions = []; // array che mi conterrà le posizioni dove inserirò le navi in griglia

    // chiamo una funzione che mi restituisce un array contenente le posizioni dove piazzerò le navi
    boatPositions = generateBoatPositions();

    // scorro la mia struttura griglia
    // sfrutto l'indice che mi mette a disposizione la each() per saper dove mettere le navi
    // cioè su quali elementi HTML aggiungere la classe "boat", l'indice lo chiamo position
    $('.grid-container .cell').each(function(position) {

        if (boatPositions.includes(position)) {
            // sono arrivato su di un elemento (span) HTML dove devo piazzare la nave
            $(this).addClass('boat');
        }
    });
}


function generateBoatPositions() {

    var boatPositionsArray = []; // array che deve contenere le posizioni calcolate randomicamente

    while (boatPositionsArray.length < fleetSize) {
        // ciclo finchè non ho generato "fleetSize" posizioni diverse tra loro

        randomPos = getRandom(0, gridSize - 1);
        if (!boatPositionsArray.includes(randomPos)) {
            boatPositionsArray.push(randomPos);
        }
    }

    // ritorno l'array valorizzato con le posizioni
    return boatPositionsArray;
}


function setColor(cell) {
    // aggiorno colore cella, se ha classe boat diventa rossa, altrimenti diventa verde
    // in cell ho il riferimento all'elemento appena cliccato
    HTMLboatIcon = "<i class=\"fas fa-ship fa-2x\"></i>"; // icona nave
    HTMLwaterIcon = "<i class=\"fas fa-water fa-2x\"></i>"; // icona mare


    if ($(cell).hasClass('boat')) {
        $(cell).addClass('red'); // con la classe red cambio il background-color
        $(cell).append(HTMLboatIcon); // aggiungo anche un'icona di una nave

    } else {
        $(cell).addClass('green'); // con la classe green cambio il background-color
        $(cell).append(HTMLwaterIcon); // aggiungo anche un'icona di una nave
    }
}


function getRandom(min, max) {
    // genera un numero casuale intero tra min e max
    return Math.floor(Math.random() * (max - min + 1)) + min;
}