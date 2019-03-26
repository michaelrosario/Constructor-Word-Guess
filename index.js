var Word = require("./word.js");
var inquirer = require("inquirer");

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

  var currentWord = "";

  function startGame(){
    var randomIndex = Math.floor(Math.random() * gameWords.length);
    //console.log(gameWords[randomIndex]);
    currentWord = new Word(gameWords[randomIndex]);
    gameWords.splice(randomIndex,1);
    console.log(currentWord.wordDisplay());
  }

  startGame();
  