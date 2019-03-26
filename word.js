/*
Contains a constructor, Word that depends on the Letter constructor. 
This is used to create an object representing the current word the user 
is attempting to guess. That means the constructor should define:
*/

var Letter = require('./letter.js');

var Word = function(word) {
    
    this.word = word;
    this.wordArray = []; // store the words
    
    var letters = "abcdefghijklmnopqrstuvwxyz"; // used for checking

    for(var i = 0; i < word.length; i++){
        
        var currentCharacter = word[i].toLowerCase();
        
        // handle apostrophes, spaces and other symbols
        if(letters.indexOf(currentCharacter) === -1){
            this.wordArray.push(currentCharacter);
        } else {
            this.wordArray.push(new Letter(currentCharacter));
        }

    }

    this.wordDisplay = function() {
        var currentWord = [];
        for(var i = 0; i < this.word.length; i++) {
            // handle apostrophes, spaces and other symbols
            // console.log(this.wordArray[i]);
            var currentCharacter = word[i].toLowerCase();
            if(letters.indexOf(currentCharacter) === -1) {
                currentWord.push(this.wordArray[i]);
            } else {
                currentWord.push(this.wordArray[i].display());
            }
            
        }
        return currentWord.join(" ");
    }

    this.wordCheck = function(character) {
        var isCorrect = false;
        var currentCharacter = character.toLowerCase();
        for(var i = 0; i < this.wordArray.length; i++){
            if(this.wordArray[i].checker(currentCharacter)){
                isCorrect = true;
            }
        }
        return isCorrect;
    }
}

module.exports = Word;