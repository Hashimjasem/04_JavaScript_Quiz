const btnStartGame = document.getElementById('button-start-game');
const sectionLanding = document.getElementById('section-landing');
const sectionQuestion = document.getElementById('section-question');

//when start button is clicked:
btnStartGame.addEventListener('click', function(event){
// hide the landing page
   sectionLanding.classList.add('hide');
//show the question section 
   sectionQuestion.classList.remove('hide');
});



//once in the question section;
// start timer

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



