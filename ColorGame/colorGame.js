var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    // adds listeners to modeButtons, sets numSquares based on button selection
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;

            reset();
        })
    }

    for (var i = 0; i < squares.length; i++) {
        //click listeners, sets up end game condition
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                h1.style.backgroundColor = clickedColor;
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play again?";
                changeColors(clickedColor);
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
    reset();
}

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";

    for (var i = 0; i < squares.length; i++) {
        // initialize colors
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
}

resetButton.addEventListener("click", reset);

function changeColors(color) {
    for (var i = 0; i < colors.length; i++) {
        colors[i].style.backgroundColor = color;
    }
}

function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.background = color;
    }
}

function pickColor() {
    var rand = Math.floor(Math.random() * colors.length);
    return colors[rand];
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor()); //todo: replace call to randomColor with a random selection from list provided.
    }

    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}