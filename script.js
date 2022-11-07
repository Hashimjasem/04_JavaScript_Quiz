const btnStartGame = document.getElementById('button-start-game');
const sectionLanding = document.getElementById('section-landing');
const sectionQuestion = document.getElementById('section-question');
const sectionEndGame = document.getElementById('section-endgame');
const spanTimer = document.getElementById('span-timer');
const questionTitle = document.getElementById('question-title');
const timeUp = 0
let timerId;
const answerOutput = document.getElementById('answer-output');
const ansBtn = document.querySelectorAll('.aswBtn');

answerOutput.addEventListener('click', function(event){
  console.log(event.target)
})

function genetrateBtnAns(title, isCorrect) {
  // create a button element
  const button = document.createElement('button')
  // provide button with a class
  button.classList.add('aswBtn');
  // assign the attributes(data-iscorrect)
  button.setAttribute('data-isCorrect', isCorrect);
  // textContent-for answer
  button.textContent = title;
  answerOutput.appendChild(button);
}


btnStartGame.addEventListener('click', function(event){
  showQuestionSection();
});



function endGame(){
  // end game
  // show the end game page
  sectionEndGame.classList.remove('hide');
  // stop the timer
  stopTimer();
  // hide the question section
  sectionQuestion.classList.add('hide');
}




function startTimer(){
  timerId = setInterval(function(){
    // deduct the time by 1
    const timeRemaining = Number(spanTimer.textContent) - 1;
    spanTimer.textContent = timeRemaining;
    // if timeremainig goes below 0
    if(timeRemaining == timeUp){
      console.log('times up')
      endGame()
    }
    // end game
  }, 1000);
}




function stopTimer() {
  clearInterval(timerId);
}


function checkIsCorrect() {
  
}

function showQuestion(index){
  const question = questions[index];
  questionTitle.textContent = question.title;
  console.log(question);

  for (let i = 0; i < question.choices.length; i++) {
    const title = question.choices[i].title;
    const isCorrect = question.choices[i].isCorrect;;
    genetrateBtnAns(title, isCorrect);
}}

function showQuestionSection(){
  // hide the landing page
  sectionLanding.classList.add('hide');
  // show the question section
  sectionQuestion.classList.remove('hide');
  // once we are in the question section
  // start the timer
  startTimer();
  showQuestion(0)

  // when the clicked on one of the choices
  // check if the choice is correct or not
  
  // if correct
  // display the correct feedback
  // then move on to the next qs
  
  // if wrong 
  // display the wrong feedback
  // deduct 10 sec from the remaining time
  
  // if after deducting the time, and time remaining becomes negative
  // -- end game
  // 
  
  // if time left remains positive,
  // move on to the next qs
  
  // if the use click on a choice in the last qs
  // end game
}










// end game section
// if user click on the submit button without entering any input
// show an alert, tell the user to type in an input

// user type in something & click on submit
// store the user initial & highscore in localstorage
// hide the end game page
// show the highscore page


// highscore page
// show all the previous highscore
// grab the data from localstorage

// when user clicked on 'back to home' -- refresh the page

