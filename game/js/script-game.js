$(document).ready(function() {

    var $board = $('.board');

    /* ===== play game ===== */
    var $buttonPlay = $('.play'),
        $gameInstruction = $('.game-instruction');

    $buttonPlay.on('click', function() {
        $gameInstruction.fadeOut();
    });


    /* ===== board game ===== */
    function drawBoard(width, height) {
        var $table = $('<table>');

        for(var i=0; i<height; i++) {
            var $tr = $('<tr>');
            $table.append($tr);

            for(var j=0; j<width; j++) {
                var $td = $('<td>');
                $td.addClass('bg-board')
                $tr.append($td);
            }
        }
        $board.append($table);
    }

    drawBoard(20, 20);


    /* ===== play again ===== */
    var $playAgain = $('.play-again'),
        $gameEndContainer = $('.end-container');

    $playAgain.on('click', function() {
        $gameEndContainer.fadeOut();
    });


    /* ===== result game ===== */
    var  resultGame = 0;
    $('.game-result .coins').text(resultGame);

    /* ===== time game ===== */
    var timeGame = 180;
    $('.game-result .time').text(timeGame);
});