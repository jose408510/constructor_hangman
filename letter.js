var inquirer = require('inquirer');
var userName = '';
var teams = []

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

]).then(function(user){
    if(user.question == true){
        userName = user.name;
        startRules();
        startGame();
}
});

function startRules(){
    console.log("----------------------------------");
    console.log("Welcome " + userName + " To the Best Basketball guessing Game");
    console.log("----------------------------------");
    console.log("Here are all the Rules");
    console.log("----------------------------------");
    console.log("You will be given 10 chances to guess the correct letter")
    console.log("----------------------------------");
    console.log("All the letters given each game make up a Basketball Team in the Western Confrence at random")
    console.log("----------------------------------");
    console.log("Goodluck...!!!!")

}
function startGame(){
    teams













}