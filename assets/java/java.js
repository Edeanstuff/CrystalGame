$(document).ready(function() {

    var playerNumber = 0;
    var theScore = $("#totalNumber");
    var randomNum;
    var urwin;
    var urlose;
    var crytalRed = 0;
    var crystalBlue = 0;
    var crystalYellow = 0;
    var crystalGreen = 0;

    function start() {
        urwin=0;
        urlose=0;
        playerNumber = 0;
        randomNum = startingRandom();
        
    }
    start();
    function startingRandom(){
        return Math.floor(Math.random() * 102) + 19;
    }
    function setButtons() {
        crystalRed = Math.floor(Math.random() * 12) + 1;
        crystalBlue = Math.floor(Math.random() * 12) + 1;
        crystalYellow = Math.floor(Math.random() * 12) + 1;
        crystalGreen = Math.floor(Math.random() * 12) + 1;
        $("#compNumber").html("<div> Number to Guess: " + randomNum + "</div>");

    }
    function check() {
        if (playerNumber === randomNum) {
            uWin();
            reset();
            
        } else if (playerNumber > randomNum) {
            uLost();
            reset();
            
        }
    }
    function reset() {
        randomNum = startingRandom();
        setButtons();
        playerNumber = 0;
        
        
    }
    function uWin() {
        alert("You win!")
        urwin++;
        $("#win").html("<div>" + urwin + "</div>");
    }
    function uLost() {
        alert("oof, you lost!")
        urlose++;
        $("#lose").html("<div>" + urlose + "</div>");
    }
    startingRandom();
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