//------Starter Button Section------//
const starterbutton = document.querySelector('.starterbutton')
const questionsandanswers = document.querySelector('.questionsandanswers')
const startsection = document.querySelector('.start')

starterbutton.addEventListener('click', () => {
    console.log('Clicked to start the quiz')
    questionsandanswers.classList.remove('hidden')
    startsection.classList.add('hidden')
    setTimer()
});

//------Timer Section------//

const timerEl = document.querySelector(".timer");
var secondsLeft = 60;

function setTimer(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = secondsLeft + " seconds left.";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
            //and then question do I make the question area hidden here when timer done?
        }
    }, 1000);
}
function sendMessage(){
    timerEl.textContent= "Time's Up!";
}

/*

//-----------------------------------//

const answers = document.querySelectorAll('.answerbutton')

const questionarea = document.querySelector('#questionasked')
[
    {
        question: "What matches B?", 
        answers: ["a", "b", "c", "d"], 
        correct: "b"
        //If user clicked the right answer, apply 'correct'. vice versa.
    },
    {
        question: "What matches A?", 
        answers: ["a", "b", "c", "d"], 
        correct: "a"
    },
];


// index notation - reference your new object and then how do you loop through 
questionasked.textContent = presentedquestion["question"][0];
answers[0].textContent = presentedquestion["answers"][1];
presentedquestion.question("");

for (var i = 0; i < presentedquestion.length; i++);{
    console.log("I am going to answer " + + ".");
}
document.querySelector("#questionasked").textContent = presentedquestion[0]

//practice accessing my array with index number //

/*store the questions (text and answers)

plan like this.

    // At first write all your questions , options and answers here.
    var questions = [
        {
        "question" : "what is the capital of india?" , 
        "options" : ["hyderabad","delhi","chennai","bengalore"], 
        "answer" : "hyderabad"
        },
        {"question" : "what is even number?" ,
         "options" : [1,3,5,8], 
         "answer" :8
        }
    ];

    // you will get question along with question number here
    var questions_list = {}; var i = 1;
    $.each(questions ,function(k,v){
        questions_list[i] = v;
    i++;
    });

  console.log(questions_list);
  
  */


/*The getElementsByClassName() method in JS returns an object containing all the elements with the specified class names in the document as OBJECTS. Each element in the returned object can be accessed by its index. The index value will start with 0. This method can be called upon by any individual element to search for its descendant elements with the specific class names.

https://www.geeksforgeeks.org/html-dom-getelementsbyclassname-method/

I'm working on the javascript of my buttons for the answer choices. Do we need to create separate eventlistener buttons to each answer button or is there a way we can get around that when the user clicks on a specific button?

I would create 1 callback function that can handle all buttons, and add a listener to each button that calls that callback function. You can get the event.target in the callback function so you should be able to tell which button was the one that was clicked

LOL. I haven't even figured out how to summon a question from a bank
    Put your questions and answers in a JSON var... should be easy from there. Do you need help?

*/

/*

function displayquestion(questions) {
    document.getElementsById(questionasked).textcontent = questions; //<I'm hoping to have a questions object array? 

    let questionasked = "What is my name?";
    console.log(questionasked);
}


const questions =
    question1 = "What is my name?";
answers = ["Kim", "Jenny", "Momo", "Susie"];
correct = 1;
*/


/*^- What am I doing? I want to make a callback function to the question. Do I need to have an object where all my questions, answers, and correct answer are placed into an array/indexed somewhere?*/
