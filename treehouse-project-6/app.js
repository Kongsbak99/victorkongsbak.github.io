// Variables
const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const phraseArray = phrase.querySelector('ul')
var startButton = document.querySelector('.btn__reset')
const overlay = document.getElementById('overlay');
var title = document.querySelector('.title')

//Remaining lives
var missed = 0;


//Phrases
const phrases = [
  'football gear',
  'soccer shoes',
  'tennis racket',
  'baseball bat',
  'golf club'
]
// Listener for the "Start Game" button to start the game.
startButton.addEventListener('click', () => {
    overlay.style.display = "none";
});

//random phrase Functions

//First pick a random phrase and split it
function getRandomPhraseAsArray(arr){
  var index = arr[Math.floor(Math.random() * arr.length)];

  return index.split('');
}

//create function to show phrase in array
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i++) {
        const listLetter = document.createElement('li');
        phraseArray.appendChild(listLetter);
        listLetter.textContent = arr[i];

        if (arr[i] !== ' ') {
            listLetter.className = 'letter';
        } else {
            listLetter.className = 'space';
        }
    }
}
const newPhrase = getRandomPhraseAsArray(phrases)

//call function to display array
addPhraseToDisplay(newPhrase)


//Letter guessing
function checkLetter(guess) {
  var letter = document.getElementsByClassName('letter');
  var correct = false;


  for (var i = 0; i < letter.length ; i++) {

    if ( guess == letter[i].innerText ) {
      letter[i].className += ' show';
      correct = true;
      if ( i == letter.length) {
        return correct;
      }
    }

    else if ( i == letter.length - 1 && correct == true ) {
      return correct;
    }

    else if ( i == letter.length - 1 && correct == false ) {
      return null;
    }

  }
};


qwerty.addEventListener("click", function(e) {
  const target = e.target;

  if ( target.nodeName == 'BUTTON'  ) {
    target.className += 'chosen';
    target.disabled = true;

//"If the checkLetter function returns a null value, the player has guessed the wrong letter."
    if ( checkLetter(target.innerText) === null ) {
      var lives = document.getElementsByTagName('ol');
      var tries = document.getElementsByClassName('tries');
      lives[0].removeChild(tries[0]);
      missed += 1;
      checkWin();

//Otherwise, check if won
    } else {
      checkWin();
    }

  }
});

function checkWin() {
  var show = document.getElementsByClassName('show');
  var letter = document.getElementsByClassName('letter');

//If succeded show "You won!"
  if (show.length == letter.length) {
    overlay.style.display = 'flex';
    overlay.className = 'win';
    title.textContent = "You Won!"

//If failed show "You Lost!"
  } else if (missed >= 5 ) {
    overlay.style.display = 'flex';
    overlay.className = 'lose';
    title.textContent = "You Lost!"
  }
}
