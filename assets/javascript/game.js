//create variables 
var targetNumber;
var counter = 0;
var blue = 0;
var red = 0;
var green = 0;
var orange = 0;
var win = 0;
var losses = 0;
var winAudio;
var lossAudio;
//onclick that responds to crystal clicks
//$("img").click(function()   {
  //  alert("an image has been clicked")
//});
//establish the target number, which is a random number beween 19-120
function gameStart()    {
targetNumber = Math.floor(Math.random()*101) + 19;
console.log(targetNumber);
//output the random number to the html page
$("#target-number").text(targetNumber);
//create a function that makes each crystal emit a random number between 1-12
blue = Math.floor(Math.random()*12) + 1;
console.log(blue);
red = Math.floor(Math.random()*12) + 1;
console.log(red);
green = Math.floor(Math.random()*12) + 1;
console.log(green);
orange= Math.floor(Math.random()*12) + 1;
console.log(orange);
}
//create a counter that tracks the current total score
//create click event for each crystal
//output the random number to the current score
$("#blue").click(function() {
counter += blue;
$("#current-score").text(counter);
winLose();
});
$("#red").click(function() {
counter += red;
$("#current-score").text(counter);
winLose();
});
$("#green").click(function() {
counter += green;
$("#current-score").text(counter);
winLose();
});
$("#orange").click(function() {
counter += orange;
$("#current-score").text(counter);
winLose();
});


//need if/else to determine if the current score matches target number
//if the numbers match, that's a win
function winLose()  {
var winAudio = new Audio("./assets/sounds/TaDa.mp3");
var lossAudio = new Audio("./assets/sounds/loser.mp3");
    if (counter === targetNumber)   {
        win++;
        $("#wins").text(win);
        counter = 0;
        $("#current-score").text("Click a gem to go again!");
        winAudio.play();
        alert("That's win number " + win + "! Go Again!");
        gameStart();
    }
//if the current score exceeds target, that's a loss (if/else)
    else if (counter > targetNumber)    {
        losses++;
        $("#losses").text(losses);
        counter = 0;
        $("#current-score").text("Click a gem to try again!");
        lossAudio.play();
        alert("That's loss number " + losses + ". TRY AGAIN!");
        gameStart();
    }
}

//startgame
gameStart();