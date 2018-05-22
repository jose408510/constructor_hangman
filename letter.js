var inquirer = require('inquirer');
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
    if(user.question){
   console.log("GoodLuck......" + user.name + "\n\nLets see if you can guess the word im thinking of You have 10 Guesses")
    }
});