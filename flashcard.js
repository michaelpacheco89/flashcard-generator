var Basic = require("./BasicCard");
var Cloze = require("./ClozeCard");
var inquirer = require("inquirer");
var clear = require("clear");
var chalk = require("chalk");
var figlet = require("figlet");

var basicArray = [];
var clozeArray = [];

var i = 0;
var score;

// var test = new Basic("what color is my shirt?", "white");

// console.log(test.front);
// console.log(test.back);

// *QUESTIONS PUSHED INTO DESIGNATED ARRAYS
// =========================================
basicArray.push(new Basic("What country was Nintendo founded in? ", "Japan"));
basicArray.push(new Basic("In what year was the first Apple computer released?", "1976"));
basicArray.push(new Basic("What year was Facebook founded in?", "2004"));
basicArray.push(new Basic("In database programming, SQL is an acronym for what?", "Structured Query Language"));
basicArray.push(new Basic("What does HTTP stand for in a website address?", "HyperText Transfer Protocol"));
basicArray.push(new Basic("The companies HP, Microsoft and Apple were all started in a what?", "A garage"));

clozeArray.push(new Cloze("Nintendo was founded in the country Japan", "Japan"));
clozeArray.push(new Cloze("The first Apple computer was released in the year 1976", "1976"));
clozeArray.push(new Cloze("Facebook was founded in the year 2004", "2004"));
clozeArray.push(new Cloze("SQL is and acronym for Structured Query Language", "Structured"));
clozeArray.push(new Cloze("HTTP in the website address stands for HyperText Transfer Protocol", "HyperText"));
clozeArray.push(new Cloze("The companies HP, Microsoft, and Apple were all started in a garage", "garage"));

// console.log(basicArray);

// console.log(clozeArray);
// ===========*END QUESTIONS*=============

function startApp(){
clear();
console.log(
  chalk.yellow(
    figlet.textSync("Flashcard Generator", {horizontalLayout: "full "})
  )
);

score = 0;

inquirer.prompt([
    {
      type: "list",
      message: "Which type of Flashcard do you want to use??",
      choices: ["Basic Flashcard", "Cloze Flashcard"],
      name: "flashcard"
    },

]).then(function(response){
    if(response.flashcard === "Basic Flashcard"){
      console.log("you chose basic flashcard");
      youBasic(i);
    }//end of if statement
    else{
      console.log("you chose cloze flashcard");
      clozeFunk();
    }//end of else statement


});//closing .then function
}//closing startApp function

// *function for basic flashcard


function youBasic(i){

  if(i < basicArray.length){

      // var obj = basicArray[i];
      // console.log(obj);


      inquirer.prompt([
        {
          type: "input",
          message: basicArray[i].front,
          name: "basic"
        }
      ]).then(function(response){
          if(response.basic === basicArray[i].back){
            console.log("====");
            console.log("*CORRECT!*");
            console.log("====");
            i++;
            score++;
            youBasic(i);
          }
          else{
            console.log("!!!WRONG!!!");
            console.log("The correct answer is: " + basicArray[i].back);
            i++;
            youBasic(i);
          }
      });
}
else{
console.log(
  chalk.yellow(
    figlet.textSync("Game Over!", {horizontalLayout: "full "})
  )
);
console.log("You answered: " + score + " questions correct.");
inquirer.prompt([
  {
  type: 'list',
  message: "Would you like to play again??",
  choices: ["Yes", "No"],
  name: "playAgain"
  }]).then(function(response){});
    if(response.playAgain === "Yes"){
      startApp();
    }
    else{
      console.log("GOODBYE");
      process.exit();
    }
}
}



function clozeFunk(){

}












startApp();
