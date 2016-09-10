$(document).ready(function() {


    /* ===== play game ===== */
    var $buttonPlay = $('.play'),
        $gameInstruction = $('.game-instruction');

    $buttonPlay.on('click', function() {
        $gameInstruction.fadeOut();
    });


    /* ===== play again ===== */
    var $playAgain = $('.play-again'),
        $gameEndContainer = $('.end-container');

    $playAgain.on('click', function() {
        $gameEndContainer.fadeOut();
    });

});