/*
Contains a constructor, Letter. This constructor should be able to either 
display an underlying character or a blank placeholder (such as an underscore), 
depending on whether or not the user has guessed the letter. 
That means the constructor should define:
*/
var Letter = function(letter){

    this.letter = letter;
    this.guessed = false;

    this.display = function(){
        if(this.guessed){
            return this.letter;
        } else {
            return "_";
        }
    }

    this.checker = function(character){
        var inputLetter = character.toLowerCase().trim();
        var currentLetter = this.letter.toLowerCase().trim();
        if(inputLetter === currentLetter) {
            this.guessed = true;
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Letter;