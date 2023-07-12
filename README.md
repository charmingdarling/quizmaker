# 04 Web APIs: Code Quiz

## Your Task

Our task this assignment was to create a timed multiple-choice question and interactive coding challenge for the USER. This is to be run in the browser and features HTML, CSS, and is powered by JavaScript. 

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

![A user clicks through an interactive coding quiz, then enters initials to save the high score before resetting and starting over.](./Assets/04-web-apis-homework-demo.gif)

## Link
[JavaScript Quiz](https://charmingdarling.github.io/quizmaker/)

[GitHub Repo](https://github.com/charmingdarling/quizmaker)

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
