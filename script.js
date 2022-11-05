const btnStartGame = document.getElementById('button-start-game');
const sectionLanding = document.getElementById('section-landing');
const sectionQuestion = document.getElementById('section-question');
const sectionEndGame = document.getElementById('section-end-game');
const spanTimer = document.getElementById('span-timer');





//when start button is clicked:
btnStartGame.addEventListener('click', function(event){
   showQuestionSection();
});


function endGame(){

   // end game
   //show the end game page
   sectionEndGame.classList.remove('hide');
   //stop the timer
   stopTimer();
   //hide the question section
   sectionQuestion.classList.add('hide');

}

function startTimer(){

   setInterval(function(){
      //deduct the time by 1
      const timeRemaining = Number(spanTimer.textContent) - 1;
      spanTimer.textContent = timeRemaining;

      //if time remaining  goes to 0
      //end game



   }, 1000);
}

function stopTimer(){

}

function showQuestionSection(){
   // hide the landing page
      sectionLanding.classList.add('hide');
   //show the question section 
      sectionQuestion.classList.remove('hide');
};
      
//once in the question section;

// start timer
startTimer
//when user clicks on on a answer
//give feedback (right/wrong)

//if correct: tell them they are correct
//if wrong: tell them they are wrong & deduct 10s off timer 

//if timeis less than 0 end game
//end game - show the endgame screen
//stop timer
//show score
//hide the question section

// if time is more than 0 next question

// if user clicks on an answer on last question, end game

//once on end game screen show score and have initial imput and submit
//if user clicks submit with no imput stop user from procieding, and alert them to type in imput
//if user types in imput and submit, store score asnd imput in local storage
//then show the high score page
//hide end game screen
// show high score page
//show all previous highscores
//grab data from local storage
//order them from high to low

// if user clicks on retry btn, take them to landing page
//hide highscore page, and show landing page



