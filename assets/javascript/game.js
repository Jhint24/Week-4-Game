//create variables 
var targetNumber;
var counter = 0;
var blue = 0;
var red = 0;
var green = 0;
var orange = 0;
var win = 0;
var losses = 0;
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
console.log(counter);
});
}

//need if/else to determine if the current score matches target number
//if the numbers match, that's a win
function winLose()  {
    if (counter === targetNumber)   {
        win++;
        $("#wins").text(win);
        alert("That's win number " + win + "! Go Again!");
        counter = 0;
        gameStart();
    }
//if the current score exceeds target, that's a loss (if/else)
    else if (counter > targetNumber)    {
        losses++;
        $("#losses").text(losses);
        alert("That's loss number " + losses + ". TRY AGAIN!");
        counter = 0;
        gameStart();
    }
}

//startgame
gameStart();