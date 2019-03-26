var Word = require("./word.js");
var inquirer = require("inquirer");
inquirer.registerPrompt('autosubmit', require('inquirer-autosubmit-prompt'));

var gameWords = [
    "Batteries Not Included",
    "Short Circuit",
    "Star Wars",
    "Flight of the Navigator",
    "Star Trek",
    "Ready Player One",
    "Inception",
    "Back to the Future",
    "Robocop",
    "Terminator",
    "Ex Machina",
    "Blade Runner",
    "Total Recall",
    "The Matrix",
    "Minority Report",
    "Looper",
    "The Avengers"
  ];

  // Variables
  var currentWord, userTries;
  var currentGuesses = [];

    function startGame(){

        userTries = 10;
        currentGuesses = [];
        var randomIndex = Math.floor(Math.random() * gameWords.length);
        currentWord = new Word(gameWords[randomIndex]);
        gameWords.splice(randomIndex,1);
        console.log("Guess the word:");
        console.log(currentWord.wordDisplay());

        // Ask user for input
        guessPrompt();
        
    }

    function guessPrompt(){
        inquirer
        .prompt({
           type: 'autosubmit',
           name: 'userInput',
           message: 'Type a letter: ',
           autoSubmit: input => input.length === 1
        })
        .then(answers => {
            var userGuess = answers.userInput;
            
            if(currentGuesses.indexOf(userGuess) === -1){
                currentGuesses.push(userGuess);
                if(currentWord.wordCheck(userGuess)){
                    console.log("CORRECT!");
                } else {
                    console.error("INCORRECT!");
                    userTries--;
                }
                console.log(`-----------------------------------`);
                console.log(currentWord.wordDisplay());
                console.log(`Tries remaining: ${userTries}`);
                console.log(`-----------------------------------`);
                if(userTries === 0){
                    console.log("You lost! There are no more tries available.");
                    playAgainPrompt();
                } else if(currentWord.wordDisplay().indexOf("_") === -1){
                    console.log("YOU WON!!! CONGRATULATIONS");
                    playAgainPrompt();
                } else {
                    guessPrompt();
                }
                
            } else {

                console.log(`You guessed the letter "${userGuess}" already.`);
                guessPrompt();

            }

        });
    }

    function playAgainPrompt(){
        inquirer
            .prompt({
                type: 'list',
                name: 'userInput',
                message: 'Do you want to play again? ',
                choices: ["Yes, play again","No, exit"]
            })
            .then(answers => {
                if(answers.userInput === 'Yes, play again'){
                    startGame();
                } else {
                    return false;
                }
            });
    }

  startGame();


