//------Starter Button Section------//
const starterbutton = document.querySelector('.starterbutton')
const questionsandanswers = document.querySelector('.questionsandanswers')
const startsection = document.querySelector('.start')

starterbutton.addEventListener('click', () => {
    console.log('Clicked to start the quiz');
    questionsandanswers.classList.remove('hidden');
    startsection.classList.add('hidden');
    setTimer(); 
    presentedquestion();
});

//------Questions, Answers, Correct Answer------//
let questionindex = 0
const questions = [
    {
        question: "The ___________ type respresents a logical entity and is inhabited by two values: true and false?", 
        answers: ["Boolean", "String", "Number", "Undefined"], 
        correct: "Boolean"
    },
    {
        question: "What would you use when recalling an 'id'?", 
        answers: [".", "@", "#", "~"], 
        correct: "@"
    },
    {
        question: "A __________ is a function that's passed into another function, with the expectation that the ________ will be called at the appropriate time.", 
        answers: ["hollerback", "primitive", "iteration", "callback"], 
        correct: "callback"
    },
    {
        question: "_____________ ____________ is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs.", 
        answers: ["Synchronous programming", "Asynchronous programming", "Redundant programming", "None of the above"], 
        correct: "Asynchronous programming"
    },
    {
        question: "What is a cross-platform, object-oriented scripting language used to make webpages interactive", 
        answers: ["HTML", "JavaScript", "CSS", "The Internet"], 
        correct: "JavaScript"
    },
    
];

//------Timer Section------//

const timerEl = document.querySelector(".timer");
var secondsLeft = 60;
var timerInterval

function setTimer(){
        timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds left.";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
            //execute function to end quiz ****
        }
/*

        if (submitScoreEl.onclick == savehighscore === true), then say end my interval now;
        clearInterval(timerInterval);
        
        //the endquiz section is active, pause timer) ****

 */       
    }, 1000);
}

function sendMessage(){
    timerEl.textContent= "Time's Up!";
}

//------Questions and Answers Loop------//

let choicesEl = document.querySelector("#choices")

function presentedquestion(){
    var currentquestion = questions[questionindex]
    var questiontitle = document.querySelector("#questionasked")
    questiontitle.textContent= currentquestion.question
    choicesEl.innerHTML = "" //clear out section before population new info ***
    for(var i = 0; i < currentquestion.answers.length; i++){
        var answer = currentquestion.answers[i]
        var answerbutton = document.createElement("button")
        answerbutton.setAttribute("class", "answerbutton")
        answerbutton.setAttribute("value", answer) 
        answerbutton.textContent = i+1 + ". " + answer
        choicesEl.appendChild(answerbutton)
    }
}

//bull each button form the page and change what it says each time answer1-2-3-4

function answerquestion(event){
    var answerEl = event.target //Determine what they clicked on ***
    if (!answerEl.matches(".answerbutton")){
        return;
    }
    if (answerEl.value !== questions[questionindex].correct){
        secondsLeft -= 10;
        if (secondsLeft < 0){
            secondsLeft = 0
        }
        document.querySelector("#feedback").textContent="Incorrect"
    }
        else {
        document.querySelector("#feedback").textContent="Correct"
    }

    document.querySelector("#feedback").removeAttribute("class")

    setTimeout(function(){
        document.querySelector("#feedback").setAttribute("class", "hidden")
    }, 1500)

    //increment question index
    questionindex++

    // ending the quiz
    if (secondsLeft <= 0 || questionindex===questions.length) {
        endquiz()
    }
    else {
        presentedquestion()
    }
}

choicesEl.onclick = answerquestion 
//if they click in choicesEl it will run answerquestion, which figures out if they clicked on an actual answer

//------End Quiz, Show Final Score, Username Input------//

var finalscoreEl = document.querySelector("#finalscore")
var endscreen = document.querySelector("#gradedscore")

function endquiz(){
    //Stop Timer --- > the clear interval below? 
    clearInterval(timerInterval);
    endscreen.removeAttribute("class")

    finalscoreEl.textContent = secondsLeft
    questionsandanswers.setAttribute("class", "hidden")
    
}
//------High Score Leaderboard------//

const submitbtnEl = document.querySelector(".tohighscorebutton");
const gradedscore = document.querySelector('.gradedscore');
const highscoreboard = document.querySelector('.highscoreboard');

submitbtnEl.addEventListener('click', ()=> {
    console.log('Submitting to high score board.');
    highscoreboard.classList.remove('hidden'); 
    //this is null, why? - It was null because you didn't put a '.' when you querySelector it in the quotes above.  ***
    gradedscore.classList.add('hidden');
    savehighscore();
    rendersavehighscore();
    console.log('Running savehighscore and rendersavehighscore function.')
});

submitbtnEl.onclick = savehighscore

//Hoping that this variable defines the user input
const nameEl = document.querySelector("#name")

function savehighscore() {
    //Save related data as an object
    var usernameandscore = {
        username: nameEl.value,
        finalscore: finalscoreEl.textContent,
    };
    console.log('High Score is put in local storage.');
    console.log(usernameandscore);
    //Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem(nameEl.value, JSON.stringify(usernameandscore));
    //asking to store scores in an array
    //localStorage.["scores"] = [] //  <-Work Here
    usernameandscore.length
}

    // want to grab the value of name of user input in input box
    // want to grab the value of finalscore
    // name and final score will be saved in local storage
    // name = key, final score = value (key, value)

function rendersavehighscore() {
    //Use JSON.parse() to convert text to JavaScript object
    var lastuserandscore = JSON.parse(localStorage.getItem("userAndScore"));
    //Check if data is returned, if not exit out of the function
    if (lastuserandscore !==null) {
        document.querySelector("#name").textContent = lastuserandscore.username;
        document.querySelector("#finalscore").textContent = lastuserandscore.finalscore;
    } else {
        return;
    }
}

function init() {
    rendersavehighscore();
}
init();

var savedName = document.getElementById("userinitials");
var savedScore = document.getElementById("savedscore");

//need a function to display the score?

// var lastuserandscore = JSON.parse(localStorage.getItem("userAndScore")); <-how to get stuff from local storage
//need a forloop - then make the text content - append child

// document.querySelector("userAndScore").addEventListener("click", function()){
//     var highscores = JSON.parse(localStorage.setItem("userAndScore"))
//     this.textContent = "userAndScore"
// }


// for (let index = 0; index < usernameandscore.length; index++) {
//     const element = usernameandscore[index];
    
// }