const readLineSync = require("readline-sync");
const chalk = require('chalk');

console.log(chalk.cyanBright.bgMagenta("  Let's find out how well you know me 👇 \n"));

const userName = readLineSync.question(chalk.green("Please enter your name=> "));

console.log(chalk.hex('#A78BFA')("\nHi " + userName + ". Get ready for Quiz\n"));

const questionOne = {
    question: "Who is my favorite superhero?\na. Captain America \nb.Thor \nc.Black Widow ",
    answer: "a"
}

const questionTwo = {
    question: "When is my Birthday? \na. 20th March \nb.2nd November \nc.29th August ",
    answer: "b"
}

const questionThree = {
    question: "Where do i live? \na. Patna \nb.Mumbai \nc.Delhi ",
    answer: "a"
}
const questionFour = {
    question: "Where do i work? chalk. \na. TCS \nb.Citiustech \nc.Infosys",
    answer: "b"
}
const questionFive = {
    question: "Which is my favourite color? \na. Black \nb.Yellow \nc.Red",
    answer: "a"
}
const questionSix = {
    question: "Which is my favourite fast food? \na. Pizza \nb.Noodles \nc.Momos",
    answer: "c"
}

let currScore = 0;

function play(queno, question, answer) {
    const userAnswer = readLineSync.keyIn(chalk.magentaBright("\n" + queno + ") " + question + "\n"), { limit: '$<a-c>' });

    if (userAnswer === answer) {
        console.log(chalk.greenBright("You are absolutely right 👏"));
        currScore++;

    } else {
        console.log(chalk.redBright("Oops!! You are wrong 🙁"));
    }

    console.log(chalk.yellowBright("Your current score is : " + currScore));
    console.log('---------------------\n');
}

const questions = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix];

for (let i = 0; i < questions.length; i++) {
    const currentQuestion = questions[i];
    play(i + 1, currentQuestion.question, currentQuestion.answer);
}

highScore1 = { name: "Nikhil", score: "6" }
const highScore = [highScore1];
if (currScore >= highScore.score) {
    console.log(chalk.bold.hex('#DEADED')("Congratulations!! " + userName + " You Won 🎉 "));
} else {
    console.log(chalk.red("Sorry Better Luck next tym!! "));
}


function printHighScore(highScore) {
    for (let i = 0; i < highScore.length; i++) {

        console.log(chalk.cyanBright(highScore[i].name + " : " + highScore[i].score));
    }

}
console.log(chalk.yellowBright("Your final score is : " + currScore));
console.log(chalk.yellowBright("\nHighest Score"));
printHighScore(highScore);