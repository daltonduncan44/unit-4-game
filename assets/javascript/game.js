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
    $(".ranNumBox").html(randNum);
    $(".scoreDisplayChild").html(finalScore);
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
    $(".ranNumBox").html(randNum);
    $(".scoreDisplayChild").html(finalScore);

    // stones need the values
    $(".crystal1").attr("value", crys1);
    var test = $(".crystal1").attr("value");
    console.log(".crystal1" + test);

    $(".crystal2").attr("value", crys2);
    var test = $(".crystal2").attr("value");
    console.log(".crystal2  " + test);

    $(".crystal3").attr("value", crys3);
    var test = $(".crystal3").attr("value");
    console.log(".crystal3  " + test);

    $("index.html.crystal4").attr("value", crys4);
    var test = $(".crystal4").attr("value");
    console.log(".crystal4  " + test);
    //saved to score
    $(".box").on("click", function () 
    {
        var test1 = $(this).attr("value");
        finalScore = parseInt(finalScore) + parseInt(test1);
        console.log("finalScore,  " + finalScore);
        console.log("sone, " + test1);
        $(".yourNumber").html(finalScore);

        if (randNum === finalScore) {
            alert("Winner!");
            win++;
            $(".win").html(win);
            $(".scoreDisplayChild").html(0);
            reset();
        }
        else if (finalScore > randNum) {
            alert("Booooo passed the goal");
            loss++;
            $(".loss").html(win);
            $(".scoreDisplayChild").html(0);
            reset();
        }



     });
  }
start();

