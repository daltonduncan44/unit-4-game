// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

// set up values
var win = 0;
var loss = 0;
var finalScore;



// set random goal value
// set random value for the cystals
var randNum = Math.floor(Math.random() * (120 - 19) + 19);
console.log(randNum)
var crys1 = Math.floor(Math.random() * (12 - 1) + 1);
var crys2 = Math.floor(Math.random() * (12 - 1) + 1);
var crys3 = Math.floor(Math.random() * (12 - 1) + 1);
var crys4 = Math.floor(Math.random() * (12 - 1) + 1);
console.log(crys1);
console.log(crys2);
console.log(crys3);
console.log(crys4);

// creat buttons that change your score
//if value equals goal then you win
// if value passes the goal then you lose
// have a counter to keep track of every win and lose

// when a win or loss happens reset the goal value and crystal value
function reset() {
    randNum = Math.floor(Math.random() * (120 - 19) + 19);
     crys1 = Math.floor(Math.random() * (12 - 1) + 1);
     crys2 = Math.floor(Math.random() * (12 - 1) + 1);
     crys3 = Math.floor(Math.random() * (12 - 1) + 1);
     crys4 = Math.floor(Math.random() * (12 - 1) + 1);
    finalScore = 0;
    $(".goalNumBox").html(randNum);
    $(".score").html(finalScore);
    start();

}

function start() 
  {

    randNum = Math.floor(Math.random() * (120 - 19) + 19);
     crys1 = Math.floor(Math.random() * (12 - 1) + 1);
     crys2 = Math.floor(Math.random() * (12 - 1) + 1);
     crys3 = Math.floor(Math.random() * (12 - 1) + 1);
     crys4 = Math.floor(Math.random() * (12 - 1) + 1);
    finalScore = 0;
    $(".goalNumBox").html(randNum);
    $(".score").html(finalScore);

    // stones need the values
    $(".button1").attr("value", crys1);
    var test1 = $(".button1").attr("value");
    console.log(".button1 " + test1);

    $(".button2").attr("value", crys2);
    var test2 = $(".button2").attr("value");
    console.log(".button2  " + test2);

    $(".button3").attr("value", crys3);
    var test3 = $(".button3").attr("value");
    console.log(".button3  " + test3);

    $(".button4").attr("value", crys4);
    var test4 = $(".button4").attr("value");
    console.log(".button4  " + test4);
    //saved to score
    $(".img").on("click", function () 
    {
        var test5 = $(this).attr("value");
        finalScore = parseInt(finalScore) + parseInt(test5);
        console.log("finalScore,  " + finalScore);
        console.log("sone, " + test5);
        $(".score").html(finalScore);

        if (randNum === finalScore) {
            alert("Winner!");
            win++;
            $(".win").html(win);
            $(".score").html(0);
            reset();
        }
        else if (finalScore > randNum) {
            alert("Booooo passed the goal");
            loss++;
            $(".loss").html(win);
            $(".score").html(0);
            reset();
        }



     });
  }
start();
});
