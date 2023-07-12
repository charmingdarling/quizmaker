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
        question: "What matches B?", 
        answers: ["a", "b", "c", "d"], 
        correct: "b"
    },
    {
        question: "What matches A?", 
        answers: ["a", "b", "c", "d"], 
        correct: "a"
    },
    {
        question: "What matches C?", 
        answers: ["a", "b", "c", "d"], 
        correct: "c"
    },
    {
        question: "What matches D?", 
        answers: ["a", "b", "c", "d"], 
        correct: "d"
    },
];

//------Timer Section------//

const timerEl = document.querySelector(".timer");
var secondsLeft = 60;

function setTimer(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds left.";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
            //execute function to end quiz ****
        }
/*

        if (submitScoreEl.onclick = savehighscore === true);
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
    //Stop Timer
    endscreen.removeAttribute("class")

    finalscoreEl.textContent = secondsLeft
    questionsandanswers.setAttribute("class", "hidden")
}
//------High Score Leaderboard------//

const submitbtnEl = document.querySelector(".tohighscorebutton");
const gradedscore = document.querySelector('gradedscore');
const highscoreboard = document.querySelector('highscoreboard');

submitbtnEl.addEventListener('click', ()=> {
    console.log('Submitting to high score board.');
    highscoreboard.classList.add('hidden'); //this is null, why? ***
    gradedscore.classList.remove('hidden');
    savehighscore();
    rendersavehighscore();
    console.log('High score is now saved.')
});
//something something
submitbtnEl.onclick = savehighscore
const nameEl = document.querySelector("#name")

function savehighscore() {
    //Save related data as an object
    var usernameandscore = {
        username: nameEl.value,
        finalscore: finalscoreEl.value,
    };
    console.log('High Score Saved');
    //Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem("usernameandscore", JSON.stringify(usernameandscore));
}
    //want to grab the value of name of user input in input box
    //want to grab the value of finalscore
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

