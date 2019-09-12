let wins = 0;
let losses= 0;
let guesses= 9;
let guessSoFar = []

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const getGuess = function() {
    return alphabet[Math.floor(Math.random() * alphabet.length)] 
}

    const showWins = function(){
        document.getElementById('numWins').innerHTML = "Wins: " + wins;
    }
    const showLosses = function(){
        document.getElementById('numLosses').innerHTML = "Losses: " + losses;
    }
    const guessesRemaining = function(){
        document.getElementById('numGuesses').innerHTML = `Guesses left: ${guesses}` ;
    }
    const resetGame = function(){
        guesses = 9
        guessSoFar = ['']
    }

    const showGuessSoFar = function(){
     let usedGuesses =  guessSoFar.join(', ')  
    document.getElementById('playersGuess').innerHTML = 'Your guesses so far: ' + usedGuesses;
    
    }
    const loseGuesses = function(){
        guesses = guesses - 1
    }
   
   
   
    const runGame = function() {
        showWins()
        showLosses()
        guessesRemaining()
        showGuessSoFar()
    
    compGuess = getGuess()
    console.log(compGuess)
    
    document.onkeyup = function(event) {
        let userGuess = String.fromCharCode(event.keyCode).toLowerCase()

        if(event.keyCode >= 65 && event.keyCode <= 90){
            console.log(userGuess)
           
            if(compGuess !== userGuess){
                guesses = guesses - 1
                guessesRemaining()
                guessSoFar.push(userGuess)
                showGuessSoFar()
                
                if(guesses === 0){
                    losses = losses + 1
                    showLosses()
                    resetGame()
                }
            }else{ 
                wins = wins + 1
                showWins()
                resetGame()
                runGame()
                }                
        }else{}
        
    }
    }
 

runGame()