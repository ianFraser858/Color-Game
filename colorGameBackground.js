var numberOfSquares = 6;
var colors = [];
var goalColor;
var correctMessageDisplay = document.getElementById("correctMessageDisplay");
var goalColorDisplay =  document.querySelector("#goalColorDisplay");
var squares = document.querySelectorAll(".square");
var heading = document.querySelector("h1");
var resetButton = document.querySelector("#newColorsOrReset");
var easyMode = document.querySelector("#easyMode");
var hardMode = document.querySelector("#hardMode");

resetButton.addEventListener("click", reset);
easyMode.addEventListener("click", easyModeSelected);
hardMode.addEventListener("click", hardModeSelected);

init()

function init()
{
	reset()
}

function squareColorCreation()
{
	for(var i = 0; i < squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
			squares[i].addEventListener("click", checkIfSelectedSquareIsCorrectColor);
			squares[i].classList.remove("basicBackground");
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
}

function generateRandomColors(colorArrayLength)
{
	var arrayOfColors = [];
	for (var i = 0; i < colorArrayLength; i ++)
	{
		var rgbValue = "rgb(" + Math.floor(Math.random() * 255) + ", " 
							  + Math.floor(Math.random() * 255) + ", " 
							  + Math.floor(Math.random() * 255) + ")";
		arrayOfColors.push(rgbValue);
	}
	return arrayOfColors;
}

function pickARandomColor()
{
	var randomIndexOfColorArray = Math.floor(Math.random() * colors.length);
	return colors[randomIndexOfColorArray];
}

function checkIfSelectedSquareIsCorrectColor()
{
	if(this.style.backgroundColor === goalColor)
	{
		correctMessageDisplay.textContent = "Correct!";
		resetButton.textContent = "Play Again?";
		changeToCorrectColor(this.style.backgroundColor);
	}
	else
	{
		this.classList.add("basicBackground");
		correctMessageDisplay.textContent = "Try Again";
	}
}

function changeToCorrectColor(colorString)
{
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].classList.remove("basicBackground");
		squares[i].style.backgroundColor = colorString;	
		heading.style.backgroundColor = colorString;
	}
}

function reset()
{
	colors = generateRandomColors(numberOfSquares);
	goalColor = pickARandomColor();
	goalColorDisplay.textContent = goalColor;
	correctMessageDisplay.textContent = " "
	this.textContent = "New Colors"
	squareColorCreation();
	heading.style.backgroundColor = "steelblue";
}

function easyModeSelected() 
{
	easyMode.classList.add("selectedMode");
	hardMode.classList.remove("selectedMode");
	numberOfSquares = 3;
	reset()
}

function hardModeSelected() 
{
	hardMode.classList.add("selectedMode");
	easyMode.classList.remove("selectedMode");
	numberOfSquares = 6;
	reset()
}