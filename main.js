// Creare in HTML una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi
// Suggerimento: usare una classe per individuare quali quadratini diventano rossi
// BONUS: generare la griglia dei quadratini utilizzando jQuery
// Nome repo: js-jq-grigliaquadrati
// -----------------------------------------------------------------------------

// intercetto click su una cella
$('.cell').click(function() {

    //aggiorno colore cella, se ha classe boat diventa rossa, altrimenti diventa verde
    // in $(this) ho il riferimento all'elemento appena cliccato
    if ($(this).hasClass('boat')) {
        // con la classe red cambio il background-color
        $(this).addClass('red')
    } else {
        // con la classe green cambio il background-color
        $(this).addClass('green')
    }

})