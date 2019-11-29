// Creare in HTML una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi
// Suggerimento: usare una classe per individuare quali quadratini diventano rossi
// BONUS: generare la griglia dei quadratini utilizzando jQuery
// Nome repo: js-jq-grigliaquadrati
// -----------------------------------------------------------------------------
var side = 8;

// creo la griglia di (side x side) elementi
createGrid(side);

// intercetto click su una cella
$('.cell').click(function() {

    // passo alla funzione il riferimento all'elemento su cui ho intercettato il click
    setColor($(this));

});

function createGrid(size) {
    // ricevo in ingresso la dimensione del lato della griglia da creare
    // popolo grid-container di "size" righe fatte di "size" elementi

    var HTMLelement = '<span class="cell"></span>'; // codice HTML da inserire in pagina

    for (var i = 0; i < (size * size); i++) {
        $('.grid-container').append(HTMLelement);
    }

}







function setColor(cell) {
    // aggiorno colore cella, se ha classe boat diventa rossa, altrimenti diventa verde
    // in cell ho il riferimento all'elemento appena cliccato
    if ($(cell).hasClass('boat')) {
        // con la classe red cambio il background-color
        $(cell).addClass('red');
    } else {
        // con la classe green cambio il background-color
        $(cell).addClass('green');
    }
}



function getRandom(min, max) {
    // genera un numero casuale intero tra min e max
    return Math.floor(Math.random() * (max - min + 1)) + min;
}