$(document).ready(function (){

//game variables//

//used to record how many times a letter can be pressed
var movieLetters = ['a','b','c',
'd','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u',
'v','w','x','y','z'];

//holds movie titles
var movieBank = ["gremlins", "batman", "big", "beetlejuice", 
"caddyshack", "labyrinth", "footloose", "ghostbusters", 
"splash", "bloodsport"];

//holds random movie selection
var randMovie = "";

//holds letters in title
var lettersInTitle = [];

//holds number of blanks in title
var numBlanks = 0;

//holds blanks and successful guesses
var blanksAndSuccesses =[];

//holds wrong guesses
var wrongLetters = [];

//audio at end of game lost
var audioElementLose = document.createElement("audio");
audioElementLose.setAttribute("src", "./assets/audio/imperial_march.mp3");

//audtio at end of game won
var audioElementWin = document.createElement("audio");
audioElementWin.setAttribute("src", "./assets/audio/star-wars-theme-song.mp3",);

//game counters
var winCount = 0;
var loseCount = 0;
var guessesLeft = 9;
var rightGuessCounter = 0;

//game functions//
//GAME PROCESS//

//initiates the Code
startGame();

document.onkeyup = function(event)
{
	test = true;
	var letterGuessed = event.key;
	for(var i = 0; i < movieLetters.length; i++)
	{	
		if(letterGuessed === movieLetters[i] && test === true)
		{
			var spliceDword = movieLetters.splice(i,1);
            
            //Test / Debug
			console.log('Movie letter is = ' + movieLetters[i])
			console.log('Spliced Word is = ' + spliceDword);
			compareLetters(letterGuessed);
			winLose();
		}
	}		
		
}

function reset()
{
	//chooses title randomly from the movieBank
	randMovie = movieBank[Math.floor(Math.random() * movieBank.length)];
	//splits the choosen title into individual letters
	lettersInTitle = randMovie.split('');
	//get the number of blanks
	numBlanks = lettersInTitle.length;
	
	//RESET
	letterGuessed = 0;
	rightGuessCounter = 0;
	guessesLeft = 9;
	wrongLetters =[];
	blanksAndSuccesses =[];
	movieLetters = ['a','b','c','d','e','f',
	'g','h','i','j','k','l','m','n','o',
	'p','q','r','s','t','u','v','w','x',
	'y','z'];
	test=false;
	startGame();
}

function startGame()
{
	//chooses movie randombly from the movieBank
	randMovie = movieBank[Math.floor(Math.random() * movieBank.length)];
	//splits the choosen title into individual letters
	lettersInTitle = randMovie.split('');
	//get the number of blanks
	numBlanks = lettersInTitle.length;
	
	//RESET

	rightGuessCounter = 0;
	guessesLeft = 9;
	wrongLetters =[];
	blanksAndSuccesses =[];
	movieLetters = ['a','b','c','d','e','f',
	'g','h','i','j','k','l','m','n','o',
	'p','q','r','s','t','u','v','w','x',
    'y','z'];

	//fill in the blanks
    
    for(var i = 0; i< numBlanks; i++)
	{
		blanksAndSuccesses.push('_');
        $('movieToGuess').html.innerHTML = blanksAndSuccesses;
	}

	//changes HTML 
    $('movieToGuess').html.innerHTML = blanksAndSuccesses.join(' ');
    $('numGuesses').html.innerHTML = guessesLeft;
    $('winCounter').html.innerHTML = winCount;
    $('lossCounter').html.innerHTML = loseCount;
    $('wrongGuesses').html.innerHTML = wrongLetters;

	// Testing / Debugging
	console.log(randMovie);
	console.log(lettersInTitle);
	console.log(numBlanks);
	console.log(blanksAndSuccesses);
}

function compareLetters(userKey)
{
				console.log('success');
				//if user key exist in movie title then perform this function 
				if(randMovie.indexOf(userKey) > -1)
				{
					//loops depending on the amount of blanks 
					for(var i = 0; i < numBlanks; i++)
					{
						//fills in right index with user key
						if(lettersInTitle[i] === userKey)
						{
							rightGuessCounter++;
							blanksAndSuccesses[i] = userKey;
							document.getElementById('movieToGuess').innerHTML = blanksAndSuccesses.join(' ');
						}	
					}
					//Test / Debug
					console.log(blanksAndSuccesses);
				}
				//wrong keys
				else
				{
					wrongLetters.push(userKey);
					guessesLeft--;
					//Changes HTML
					document.getElementById('numGuesses').innerHTML = guessesLeft;
					document.getElementById('wrongGuesses').innerHTML = wrongLetters;
					//Test / Debug
					console.log('Wrong Letters = ' + wrongLetters);
					console.log('Guesses left are ' + guessesLeft);
				}
}

function winLose()
{
	// When number blanks if filled with right words then you win
	if(rightGuessCounter === numBlanks)
	{
		//Counts Wins 
		winCount++;
		//Changes HTML
        document.getElementById('winCounter').innerHTML = winCount;
        $(".star-wars-theme-song.mp3").trigger(audioElementWin.play());
        alert('GREAT SHOT, KID!!! THAT WAS ONE IN A MILLION!!!');
        reset();
    	}
	// When number of Guesses reaches 0 then You lose
	else if(guessesLeft === 0)
	{
		//Counts losses
		loseCount++;
		//Changes HTML
        document.getElementById('lossCounter').innerHTML = loseCount;
        $(".imperial_march.mp3").trigger(audioElementLose.play());
 		alert('LUKE, I AM YOUR FATHER');
        reset();
    }
}

});