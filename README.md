# 04 Web APIs: Code Quiz

## Your Task

At some point in your journey to become a full-stack web developer, you’ll likely be asked to complete a coding assessment&mdash;perhaps as part of an interview process. A typical coding assessment includes both multiple-choice questions and interactive coding challenges. 

To help familiarize you with these tests and allow you to use the skills covered in this module, this Challenge invites you to build a timed coding quiz with multiple-choice questions. This app will run in the browser and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean, polished, and responsive user interface. 

This week’s coursework will equip you with all the skills you need to succeed in this assignment.

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```

## Mock-Up

The following animation demonstrates the application functionality:

![A user clicks through an interactive coding quiz, then enters initials to save the high score before resetting and starting over.](./Assets/04-web-apis-homework-demo.gif)


## HTML Outline 

Here is what I could understand from the example gif of what we needed to have.

```
1. Start 
    Header
    Paragraph
    Starter Begin Button

2. Question and Answers
    [Turn On/Display - Just Change Display]
    Header2 // Question Size
    Buttons
    <hr> tag
    <p> Correct/Wrong (Check against answer, loop next question, add score to grade)

3. Score/Graded
    All Done
    Final Score - Grade
    Textbox (Fill out name?)
    Button to HighScoreBoard

4. Highscore Board
    Highscore List        
    Go back Button
    Clear High Scores Button
```

 Outline. 

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
