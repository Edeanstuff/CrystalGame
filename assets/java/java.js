$(document).ready(function() {

    var playerNumber = 0;
    var theScore = $("#totalNumber");
    var randomNum = startingRandom();
    var win;
    var lose;
    var crytalRed = 0;
    var crystalBlue = 0;
    var crystalYellow = 0;
    var crystalGreen = 0;

    function start() {
        win=0;
        lose=0;
        
    }
    function startingRandom(){
        return Math.floor(Math.random() * 102) + 19;
    }
    function setButtons() {
        crystalRed = Math.floor(Math.random() * 12) + 1;
        crystalBlue = Math.floor(Math.random() * 12) + 1;
        crystalYellow = Math.floor(Math.random() * 12) + 1;
        crystalGreen = Math.floor(Math.random() * 12) + 1;
        startingRandom();
        $("#compNumber").html("<div> Number to Guess: " + randomNum + "</div>");

    }
    function check() {
        if (playerNumber === randomNum) {
            uWin();
            
        } else if (playerNumber > randomNum) {
            uLost();
            
        }
    }
    function reset() {
        setButtons();
    }
    function uWin() {
        alert("You win!")
        win++;
        $("#win").html("<div> Wins: " + wins + "</div>");
        reset();
    }
    function uLost() {
        alert("oof, you lost!")
        lose++;
        $("#lose").html("<div> Losses: " + lose + "</div>");
        reset();
    }
    setButtons();
    $("#button1").on("click", function() {
        playerNumber = playerNumber + parseInt(crystalRed);
        theScore.html("<div> Your total number is:" + playerNumber + "</div>");
        check();
    });
    $("#button2").on("click", function() {
        playerNumber = playerNumber + parseInt(crystalBlue);
        theScore.html("<div> Your total number is:" + playerNumber + "</div>");
        check();
    });
    $("#button3").on("click", function() {
        playerNumber = playerNumber + parseInt(crystalYellow);
        theScore.html("<div> Your total number is:" + playerNumber + "</div>");
        check();
    });
    $("#button4").on("click", function() {
        playerNumber = playerNumber + parseInt(crystalGreen);
        theScore.html("<div> Your total number is:" + playerNumber + "</div>");
        check();
    });
});