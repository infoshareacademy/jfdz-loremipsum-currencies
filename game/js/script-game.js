$(document).ready(function() {

    var $board = $('.board');
    var $endContainer = $('.end-container');
    var $player = $('.player');

    /* ===== play game ===== */
    var $buttonPlay = $('.play'),
        $gameInstruction = $('.game-instruction');

    $buttonPlay.on('click', function() {
        $gameInstruction.fadeOut();
        startResultGame();
        startTimeGame();
        timer();
    });


    /* ===== play again ===== */
    var $playAgain = $('.play-again'),
        $gameEndContainer = $('.end-container');

    $playAgain.on('click', function() {
        $gameEndContainer.fadeOut();
        startResultGame();
        startTimeGame();
        timer();
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

    /* ===== add index ===== */
    function addIndex(){
        $('td').each(function(index){
            $(this).append(index);
        })
    }
    addIndex();

    /* ===== add player ===== */
    function addPlayer(){
    $('table tr:first-child td:first-child').addClass('player');
    }
    addPlayer();

    var coords = $player.index();
    console.log(coords);

    /* ===== move player ===== */
    function movePlayer(){
        window.addEventListener('keydown', function(event) {
            switch (event.keyCode) {
                case 37: // Left
                    if(coords%20 === 0){ alert('nie mozesz isc bardziej w lewo')}
                    else {
                        coords -= 1;
                        $('td.player').removeClass('player');
                        $('td').eq(coords).addClass('player');
                    }
                    break;

                case 38: // Up
                    if(coords <= 9){ alert('nie mozesz isc juz do gory')}
                    else {
                        coords -= 20;
                        $('td.player').removeClass('player');
                        $('td').eq(coords).addClass('player');
                    }
                    break;

                case 39: // Right
                    if(coords%20 === 19){ alert('nie mozesz isc bardziej w prawo')}
                    else {
                        coords += 1;
                        $('td.player').removeClass('player');
                        $('td').eq(coords).addClass('player');
                    }
                    break;

                case 40: // Down
                    if(coords >= 380){ alert('nie mozesz zejsc glebiej')}
                    else {
                        coords += 20;
                        $('td.player').removeClass('player');
                        $('td').eq(coords).addClass('player');
                    }
                    break;
            }
        }, false);

            // $('.game-board').keydown(function(e){
            //     console.log(e);
            // });
    }
    movePlayer();

    /* ===== result game ===== */
    var  resultGame;

    $('.game-result .js-coins').text(resultGame);

    function startResultGame() {
        resultGame = 0;
        $('.game-result .js-coins').text(resultGame);
    }


    /* ===== time game ===== */
    var timeGame;

    function startTimeGame() {
        timeGame = 10000;
        return timeGame;
    }

    function changeTimeToMinutes() {
        var allTime;

        var minutes = Math.floor(timeGame / 60),
            seconds = timeGame - minutes * 60;

        var min = ((minutes < 10) ? "0" : "") + minutes,
            sec = ((seconds < 10) ? "0" : "") + seconds;

        allTime = min + ":" + sec;

        return allTime;
    }

    function timer() {
        $('.game-result .js-time').text( changeTimeToMinutes(timeGame) );
        timeGame--;
        if(timeGame >= 0) {
            setTimeout(timer, 1000);
        } else {
            showResultEndGame();
        }
    }

    /* ===== end game ===== */
    function showResultEndGame() {
        var time = timeGame >= 0 ? timeGame : '00:00';
        $('.result-list .js-time').text(time);
        $('.result-list .js-coins').text(resultGame);

        $endContainer.delay(500).fadeIn();
    }

});