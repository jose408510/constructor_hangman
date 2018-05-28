var Letter = require("./letter.js")

var Word = function(word){ 
    this.name = word;
    this.length = word.length;
    this.misses = 10;
    this.guess = false 
    this.currentWordArray = word.split("");

    this.blankDashes = function(){
        var currentDashes = [];
        for(var i =0; i< this.currentWordArray.length; i++){
            currentDashes.push(" _")
        //  new Letter(currentWordArray[i]) ;
       }
       return currentDashes.join(",");
    }

    this.countDown = function(){
        this.misses--;
        console.log("You have this many misses remaining" + this.misses) ;
       return this.misses;
    }
}


module.exports = Word;


// new function in index.js 
// prompt user to guess a letter 
// comapre to see if letter is in current word array 
// if word is in array 
