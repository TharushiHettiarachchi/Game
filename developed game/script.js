var jumpSound = new Audio("resources/jump.mp3 ");
var deadSound = new Audio("resources/dead.mp3");
var runSound = new Audio("resources/run.mp3");
runSound.loop = true;

function play() {
    document.getElementById("boy").style.visibility = "hidden";
    document.getElementById("score").style.visibility = "hidden";
    document.getElementById("finalScore").style.visibility = "hidden";
    document.getElementById("game").style.visibility = "hidden";
    document.getElementById("life").style.visibility = "hidden";
    document.getElementById("border1").style.visibility = "hidden";
    document.getElementById("border2").style.visibility = "hidden";
    document.getElementById("border3").style.visibility = "hidden";
    // document.getElementById("playAgain").style.visibility = "hidden";
    document.getElementById("play").style.visibility = "visible";
    document.getElementById("title").style.visibility = "visible";


    clearInterval(boxAnimationId);
    boxAnimationId = -1;

    if (moveBackgroundAnimationId == 0) {
        moveBackgroundAnimationId = setInterval(moveBackground, 100);
    }

    clearInterval(boyRunAnimationId);
    boyRunAnimationId = -1;
    runSound.pause();


    clearInterval(boyJumpAnimationId);
    boyJumpAnimationId = -1;
    jumpSound.pause();
    clearInterval(boyDeadAnimationId);
    boyDeadAnimationId = -1;
    deadSound.pause();

}

function startPlaying() {

    document.getElementById("play").style.visibility = "hidden";
    document.getElementById("title").style.visibility = "hidden";
    document.getElementById("boy").style.visibility = "visible";
    document.getElementById("score").style.visibility = "visible";
    document.getElementById("life").style.visibility = "visible";
    // document.getElementById("advice").style.visibility = "visible";
    document.getElementById("game").style.visibility = "hidden";
    // document.getElementById("playAgain").style.visibility = "hidden";


    score = 0;
    boyRunAnimationId = 0;
    boyJumpAnimationId = 0;
    boyDeadAnimationId = 0;
    // moveBackgroundAnimationId = 0;
    boxAnimationId = 0;

    if (boyRunAnimationId == 0) {

        boyRunAnimationId = setInterval(boyRunAnimation, 100);
        runSound.play();
    }
    if (boxAnimationId == 0) {
        boxAnimationId = setInterval(boxAnimation, 100);

    }

}

function keyCheck(event) {

    var keyCode = event.which;

    if (keyCode == 13) { //Enter

        if (moveBackgroundAnimationId == 0) {
            moveBackgroundAnimationId = setInterval(moveBackground, 100);
        }

        if (boyRunAnimationId == 0) {

            boyRunAnimationId = setInterval(boyRunAnimation, 100);
            runSound.play();
        }

        if (boxAnimationId == 0) {
            boxAnimationId = setInterval(boxAnimation, 100);

        }

    }

    if (keyCode == 32) { //Space

        if (boyJumpAnimationId == 0) {

            clearInterval(boyRunAnimationId);
            runSound.pause();
            runSound.currentTime = 0;
            boyRunAnimationId = 0;
            boyRunImageNumber = 1;

            boyJumpAnimationId = setInterval(boyJumpAnimation, 100);
            jumpSound.play();
        }
    }
}

var backgroundImagePositionX = 0;
var moveBackgroundAnimationId = 0;

var score = 0;

function moveBackground() {

    backgroundImagePositionX = backgroundImagePositionX - 20;
    document.getElementById("background").style.backgroundPositionX = backgroundImagePositionX + "px";

    score = score + 10;
    document.getElementById("score").innerHTML = score;
    if (score == 430) {
        document.getElementById("d1").style.backgroundColor = "blue";
    }
    if (score == 680) {
        document.getElementById("d2").style.backgroundColor = "blue";
    }
    if (score == 930) {
        document.getElementById("d3").style.backgroundColor = "blue";
    }
    if (score == 1180) {
        document.getElementById("d4").style.backgroundColor = "blue";
    }
    if (score == 1430) {
        document.getElementById("d5").style.backgroundColor = "blue";
    }
    if (score == 1720) {
        document.getElementById("d6").style.backgroundColor = "blue";
    }
    if (score == 1930) {
        document.getElementById("d7").style.backgroundColor = "blue";
    }
    if (score == 2180) {
        document.getElementById("d8").style.backgroundColor = "blue";
    }
    if (score == 2430) {
        document.getElementById("d9").style.backgroundColor = "blue";
    }
    if (score == 2750) {
        document.getElementById("d10").style.backgroundColor = "blue";
    }
    if (score == 2900) {

        clearInterval(boxAnimationId);
        boxAnimationId = -1;

        clearInterval(boyRunAnimationId);
        boyRunAnimationId = -1;
        runSound.pause();

        clearInterval(moveBackgroundAnimationId);
        moveBackgroundAnimationId = -1;

        clearInterval(boyJumpAnimationId);
        boyJumpAnimationId = -1;
        jumpSound.pause();
        document.getElementById("border3").style.visibility = "visible";
    }
}

var boyRunAnimationId = 0;
var boyRunImageNumber = 1;

function boyRunAnimation() {

    boyRunImageNumber = boyRunImageNumber + 1;

    if (boyRunImageNumber == 9) {
        boyRunImageNumber = 1;
    }

    document.getElementById("boy").src = "resources/Run (" + boyRunImageNumber + ").png";

}


var boyJumpImageNumber = 1;
var boyJumpAnimationId = 0;
var boyMarginTop = 410;

function boyJumpAnimation() {

    boyJumpImageNumber = boyJumpImageNumber + 1;

    if (boyJumpImageNumber <= 7) {
        boyMarginTop = boyMarginTop - 20;
        document.getElementById("boy").style.marginTop = boyMarginTop + "px";
    }

    if (boyJumpImageNumber >= 8) {
        boyMarginTop = boyMarginTop + 20;
        document.getElementById("boy").style.marginTop = boyMarginTop + "px";
    }

    if (boyJumpImageNumber == 13) {
        clearInterval(boyJumpAnimationId);
        jumpSound.pause();
        jumpSound.currentTime = 0;
        boyJumpAnimationId = 0;
        boyJumpImageNumber = 1;

        boyRunAnimationId = setInterval(boyRunAnimation, 100);
        runSound.play();

        if (moveBackgroundAnimationId == 0) {
            moveBackgroundAnimationId = setInterval(moveBackground, 100);
        }

        if (boxAnimationId == 0) {
            boxAnimationId = setInterval(boxAnimation, 100);

        }
    }

    document.getElementById("boy").src = "resources/Jump (" + boyJumpImageNumber + ").png";

}

var boyDeadImageNumber = 1;
var boyDeadAnimationId = 0;


function boyDeadAnimation() {

    boyDeadImageNumber = boyDeadImageNumber + 1;


    if (boyDeadImageNumber = 11) {
        clearInterval(boyDeadAnimationId);
        boyDeadImageNumber = 10;

    }
    document.getElementById("boy").src = "resources/Dead (" + boyDeadImageNumber + ").png";
    // document.getElementById("playAgain").style.visibility = "visible";
    // document.getElementById("game").style.visibility = "visible";
    // document.getElementById("finalScore").style.visibility = "visible";
    document.getElementById("score").style.visibility = "hidden";

    if (score <= 930) {

        document.getElementById("border1").style.visibility = "visible";
    }
    if (score <= 1930 & score >= 931) {

        document.getElementById("border2").style.visibility = "visible";
    }
}
var boxMarginLeft = 1000;

function createBoxes() {
    for (var i = 0; i < 10; i++) {
        var box = document.createElement("div");
        box.className = "box";
        box.id = "box" + i;
        box.style.marginLeft = boxMarginLeft + "px";
        boxMarginLeft = boxMarginLeft + 500;
        document.getElementById("background").appendChild(box);

    }



}
var boxAnimationId = 0;

function boxAnimation() {
    for (var i = 0; i < 10; i++) {
        var box = document.getElementById("box" + i);
        var currentMarginLeft = getComputedStyle(box).marginLeft;
        var newMarginLeft = parseInt(currentMarginLeft) - 20;
        box.style.marginLeft = newMarginLeft + "px";



        // alert(newMarginLeft);

        if (newMarginLeft >= 60 & newMarginLeft <= 140) {
            if (boyMarginTop >= 390) {
                clearInterval(boxAnimationId);
                boxAnimationId = -1;

                clearInterval(boyRunAnimationId);
                boyRunAnimationId = -1;
                runSound.pause();

                clearInterval(moveBackgroundAnimationId);
                moveBackgroundAnimationId = -1;

                clearInterval(boyJumpAnimationId);
                boyJumpAnimationId = -1;
                jumpSound.pause();

                boyDeadAnimationId = setInterval(boyDeadAnimation, 100);
                deadSound.play();
                document.getElementById("finalScore").innerHTML = "Score : " + score;
                // alert(newMarginLeft);


            }


        }
    }
}



function newGame() {
    window.location = "index.html";
}