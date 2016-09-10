$(document).ready(function() {


    /* ===== play game ===== */
    var $buttonPlay = $('.button-play'),
        $gameInstruction = $('.game-instruction');

    $buttonPlay.on('click', function() {
        $gameInstruction.fadeOut();
    });

});