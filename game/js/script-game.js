$(document).ready(function() {

    var $board = $('.board');
    var $endContainer = $('.end-container');
    var $player = $('.player');
    var point = 0;
    var coords = $player.index();

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
        point=0;
        coords=0;
        $gameEndContainer.fadeOut();
        $('td').removeClass('tunnel').addClass('bg-board');

        startResultGame();
        startTimeGame();
        timer();
        giveCoins();
        addPlayer();
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

    /* ===== give coins ===== */
    var coin;
    var duplicate;
    function giveCoins(){
        var z=0;
        for(var i=0; i<15; i++){
            coin = Math.floor((Math.random()*400)+1);
            duplicate = $('td').eq(coin);
            //console.log(duplicate.index());
            if(duplicate.index() === coin){
                z++
            }
            duplicate.addClass('coin');
        }
        console.log(z);
    }

    giveCoins();

    /* ===== add player ===== */
    function addPlayer(){
        $('td.player').removeClass('player');
        $('table tr:first-child td:first-child').addClass('player', 'tunnel');
    }
    addPlayer();



    /* ===== move player ===== */
    function movePlayer(){
        window.addEventListener('keydown', function(event) {
            switch (event.keyCode) {
                case 37: // Left
                    if(coords%20 === 0){ alert('nie mozesz isc bardziej w lewo')}
                    else {
                        coords -= 1;
                        $('td.player').removeClass('player');
                        $('td').eq(coords).removeClass('bg-board');
                        $('td').eq(coords).addClass('tunnel');
                        $('td').eq(coords).addClass('player');
                    }
                    break;

                case 38: // Up
                    if(coords <= 9){ alert('nie mozesz isc juz do gory')}
                    else {
                        coords -= 20;
                        $('td.player').removeClass('player');
                        $('td').eq(coords).removeClass('bg-board');
                        $('td').eq(coords).addClass('tunnel');
                        $('td').eq(coords).addClass('player');
                    }
                    break;

                case 39: // Right
                    if(coords%20 === 19){ alert('nie mozesz isc bardziej w prawo')}
                    else {
                        coords += 1;
                        $('td.player').removeClass('player');
                        $('td').eq(coords).removeClass('bg-board');
                        $('td').eq(coords).addClass('tunnel');
                        $('td').eq(coords).addClass('player');
                    }
                    break;

                case 40: // Down
                    if(coords >= 380){ alert('nie mozesz zejsc glebiej')}
                    else {
                        coords += 20;
                        $('td.player').removeClass('player');
                        $('td').eq(coords).removeClass('bg-board');
                        $('td').eq(coords).addClass('tunnel');
                        $('td').eq(coords).addClass('player');
                    }
                    break;
            }
        }, false);
    }
    movePlayer();


    /* ===== add point ===== */

    function addPoint(){
        window.addEventListener('keydown', function() {
           if ($('td.player').hasClass('coin')) {
               point ++;
               $('td.player').removeClass('coin');
           }
        })

    }
addPoint();

    /* ===== result game ===== */
    var  resultGame;

    $('.game-result .js-coins').text(resultGame);

    function startResultGame() {
        window.addEventListener('keydown', function() {
            resultGame = point;
            $('.game-result .js-coins').text(resultGame);
        })

    }


    /* ===== time game ===== */
    var timeGame;

    function startTimeGame() {
        timeGame = 10;
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