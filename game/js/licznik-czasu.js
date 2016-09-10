
var Game = {
    maxTime: 20, // ustawia maksymalny czas gry

    // zmiana czasu na format mm:ss
    changeTimeToMinutes: function() {
        var allTime;

        var minutes = Math.floor(Game.maxTime / 60),
            seconds = Game.maxTime - minutes * 60;

        var min = ((minutes < 10) ? "0" : "") + minutes,
            sec = ((seconds < 10) ? "0" : "") + seconds;

        allTime = min + ":" + sec;
        return allTime;
    },

    // odliczanie czasu od max do 0
    timer: function() {
       console.log(Game.changeTimeToMinutes(Game.maxTime));
        Game.maxTime--;
        if(Game.maxTime >= 0) {
            setTimeout(Game.timer, 1000);
        }
    }
};


Game.timer();
