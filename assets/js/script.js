
/* Outline. 

1. When USER clicks on the starterbutton. I want the 'start' class to be hidden.
2. Need to start a timer.
3. How do I show the next section and hide the current section?
4. How do I get the question to show up with its alotted answer bank? 
    Show questions on the page using JS.

    4a. I think I need to use a click event listener in a single function. 

    4b. Use a separate function for creating an array of question/objects?
        i.      property = question
        ii.     propery = answer choices
        iii.    property = correct answer

    4c. I know I need to index this array to point to the correct answer, but how?

    4d. https://medium.com/swlh/writing-optimized-code-in-js-by-understanding-hidden-classes-3dd42862ad1d#:~:text=The%20purpose%20of%20hidden%20classes,class%20is%20attached%20to%20it.
        i. This explains a little of defining your variables with cupcakes

*/

//------Starter Button Section------//

const starterbutton = document.querySelector('.starterbutton')
const questionsandanswers = document.querySelector('.questionsandanswers')
const startsection = document.querySelector('.start')

starterbutton.addEventListener('click', () => {
    console.log('Clicked to start the quiz');
    questionsandanswers.classList.remove('hidden');
    startsection.classList.add('hidden');
    setTimer(); 
    }
);

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
            //and then question do I make the question centers hidden here?
        }
    }, 1000);
}
function sendMessage(){
    timerEl.textContent= "Time's Up!";
}

//-----------------------------------//

const answers = document.querySelectorAll('.answerbutton')

const questionasked = document.querySelector('#questionasked')
[
    {
        question: "What matches B?", 
        answers: ["a", "b", "c", "d"], 
        correct: "b"
        //If user clicked the right answer, apply 'correct'. vice versa.
    }
]




answers.question()
// index notation - reference your new object and then how do you loop through 

questionasked.textContent = presentedquestion["question"][0];
answers[0].textContent = presentedquestion["answers"][1];

presentedquestion.question("");

for (var i = 0; i < presentedquestion.length; i++);{
    console.log("I am going to answer " + + ".");
}

document.querySelector("#questionsasked").textContent = presentedquestion[0]

//practice accessing my array with index number //





/*store the questions (text and answers)*/






/*The getElementsByClassName() method in JS returns an object containing all the elements with the specified class names in the document as OBJECTS. Each element in the returned object can be accessed by its index. The index value will start with 0. This method can be called upon by any individual element to search for its descendant elements with the specific class names.

https://www.geeksforgeeks.org/html-dom-getelementsbyclassname-method/

I'm working on the javascript of my buttons for the answer choices. Do we need to create separate eventlistener buttons to each answer button or is there a way we can get around that when the user clicks on a specific button?

I would create 1 callback function that can handle all buttons, and     add a listener to each button that calls that callback function. You can get the event.target in the callback function so you should be able to tell which button was the one that was clicked

LOL. I haven't even figured out how to summon a question from a bank
    Put your questions and answers in a JSON var... should be easy from there. Do you need help?

*/

function displayquestion(questions) {
    document.getElementsById(questionasked).textcontent = questions; //<I'm hoping to have a questions object array? 

    let questionasked = "What is my name?";
    console.log(questionasked);
}


const questions =
    question1 = "What is my name?";
answers = ["Kim", "Jenny", "Momo", "Susie"];
correct = 1;



//^- What am I doing? I want to make a callback function to the question. Do I need to have an object where all my questions, answers, and correct answer are placed into an array/indexed somewhere?


const answerbutton = document.querySelectorAll('li');
//Do I need to have a separate answer button for the answers below? How can I get around that?
answerbutton.forEach(answerbutton => {
    answerbutton.addEventListener('click', () => {
        console.log('Clicked on an answer choice');
    })
});

const question = document.querySelector('h2');

/*I want it to move to  
    the next question after an "answerbutton" is clicked.
question.forEach(h2 => ('click', answerbutton
    function answerbutton(){
        alert("Next Question");
    });



*/