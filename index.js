var inquirer = require('inquirer');
var Word = require('./word.js')
var Letter = require('./letter.js')
var userName = '';
var teams = ["WARRIORS",
    "ROCKETS", 
    "LAKERS",
    "SPURS", 
    "BLAZERS", 
    "PELICANS",
    "UTAH JAZZ", 
    "PHOENIX SUNS", 
    "MAVERICKS",
    "CLIPPERS",
    "DENVER NUGGETS", 
    "SACRAMENTO KINGS"]
    var randomWord = teams[Math.floor(Math.random() * teams.length)]
    var currentWord = new Word(randomWord);
    // console.log(currentWord.currentWordArray);
    // console.log()


    function Player(wins, loss,name){
        this.wins = wins
        this.loss = loss
        this.name = name
    }

inquirer.prompt([
    {
        type:"input",
        name:"name",
        message:"Please State your name"
    },
    {   
        type:"confirm",
        name:"question",
        message:"Are you Ready to play a Guessing game?"
    },

]).then(function(name){
    if(name.question == true){
        var currentPlayer = new Player(0,0,name.name);
        console.log(currentPlayer);
        startRules();
        startGame();
}else{
    console.log("----------------------------------");
    console.log("----------------------------------");
    console.log("Well Come back Later when your Ready to play!!!!")
    console.log("----------------------------------");
    console.log("----------------------------------");
}
});

function startRules(){
    console.log("----------------------------------");
    console.log("Welcome " + " To the Best Basketball guessing Game");
    console.log("----------------------------------");
    console.log("Here are all the Rules");
    console.log("----------------------------------");
    console.log("You will be given 10 chances to guess the correct Team")
    console.log("----------------------------------");
    console.log("All the letters given each game make up a Basketball Team in the Western Confrence at random")
    console.log("----------------------------------");
    console.log("Goodluck...!!!!")
    console.log("----------------------------------");

}
    
function startGame(){
    console.log("Your current Word is ");
    console.log(currentWord.blankDashes());

    inquirer.prompt([
        {
            type:"input",
            name:"letter",
            message:"Please Guess a letter"
        }
    ]).then(function(){

 
    });        
}
    
