//set beginning time
var time = 120;
document.getElementById("timer").innerText = time + "Sec's";
var checkHighscore = document.getElementById("check-highscore");
//sets global index for object array
var indexCounter = 0;
//object array containing complete information on each question
var questions = [
  {
    disc: "Who is Natsu's Best Friend?",
    optionOne: "1.Mira Jane",
    optionTwo: "2.Laxus Dreyar",
    optionThree: "3.Happy",
    optionFour: "4.Freid Justine",
    answer: 2,
  },
  {
    disc: "What is Erza Scarlet's nickname?",
    optionOne: "1.Queen of the Fairies",
    optionTwo: "2.Armor Queen",
    optionThree: "3.Warrior Maiden",
    optionFour: "4.S-class Killer",
    answer: 0,
  },
  {
    disc: "Which of Zeref's demons did Fairy Tale first Fight?",
    optionOne: "1.Lullaby",
    optionTwo: "2.Erigor",
    optionThree: "3.Brain",
    optionFour: "4.Deliora",
    answer: 0,
  },
  {
    disc: "Why was Lucy targeted by the Phantom Guild?",
    optionOne: "1.She attcked them",
    optionTwo: "2.She was wanted",
    optionThree: "3.She was rich",
    optionFour: "4.She was ugly",
    answer: 2,
  },
  {
    disc: "How many monsters did Erza defeat during the tournament of power?",
    optionOne: "1. 14",
    optionTwo: "2. 56",
    optionThree: "3. 30",
    optionFour: "4. All of the above",
    answer: 3,
  },
  {
    disc: "What is Natsu's weakness",
    optionOne: "1.Water",
    optionTwo: "2.Transportation",
    optionThree: "3.Dragon Slayers",
    optionFour: "4.Dancing",
    answer: 1,
  },
  {
    disc: "What type of magic does Lucy use?",
    optionOne: "1.Script Magic",
    optionTwo: "2.Ice Magic",
    optionThree: "3.Gun Magic",
    optionFour: "4.Celestial Magic",
    answer: 3,
  },
  {
    disc: "What mission did Natsu take but forgot about?",
    optionOne: "1.Rescue a stolen egg",
    optionTwo: "2.Save the invisible towns people",
    optionThree: "3.Defeat Igneel",
    optionFour: "4.Buy Happy some food",
    answer: 1,
  },
  {
    disc: "What is Guildarts magic?",
    optionOne: "Disassembly Magic",
    optionTwo: "Gravity Magic",
    optionThree: "Speed Magic",
    optionFour: "Earth Magic",
    answer: 0,
  },
  {
    disc: "When Mavis casts her protect spell how many years is skipped?",
    optionOne: "10",
    optionTwo: "20",
    optionThree: "7",
    optionFour: "14",
    answer: 2,
  },
];

//displays highscores from local storage
var checkHighscores = function () {
  //grabs highscores from local storage and parses it.
  var currentScores = JSON.parse(localStorage.getItem("currentScores"));

  //page reset start
  var quiz = document.getElementById("quiz-container");
  quiz.parentNode.removeChild(quiz);

  var newQuiz = document.createElement("div");
  newQuiz.setAttribute("id", "quiz-container");
  document.body.appendChild(newQuiz);

  var questionLimit = document.createElement("div");
  questionLimit.setAttribute("id", "limit");
  questionLimit.setAttribute("class", "end-limit");
  newQuiz.appendChild(questionLimit);
  //page reset end

  //generation of highscore page
  var highscore = document.createElement("h2");
  highscore.innerText = "High scores";
  questionLimit.appendChild(highscore);

  var scoreContainer = document.createElement("div");
  scoreContainer.setAttribute("id", "score-container");
  questionLimit.appendChild(scoreContainer);

  var scoreBtns = document.createElement("div");
  scoreBtns.setAttribute("id", "score-btns");
  questionLimit.appendChild(scoreBtns);

  var backBtn = document.createElement("button");
  backBtn.setAttribute("class", "selection");
  backBtn.dataset.got = "back";
  backBtn.innerText = "Go Back";
  scoreBtns.appendChild(backBtn);

  var clearScores = document.createElement("button");
  clearScores.setAttribute("class", "selection");
  clearScores.dataset.got = "clear";
  clearScores.innerText = "Clear Scores";
  scoreBtns.appendChild(clearScores);

  //loops through highscores and appends them individually
  for (i = 0; i < currentScores.length; i++) {
    var score = document.createElement("p");
    score.innerText = currentScores[i];
    scoreContainer.appendChild(score);
  }

  scoreBtns.addEventListener("click", function (event) {
    var selected = event.target;
    //check if selected button was go back
    if (selected.dataset.got === "back") {
      //setup for page transition
      var quiz = document.getElementById("quiz-container");
      quiz.parentNode.removeChild(quiz);
      var newQuiz = document.createElement("div");
      newQuiz.setAttribute("id", "quiz-container");
      document.body.appendChild(newQuiz);
      //resets for quiz
      time = 120;
      indexCounter = 0;
      document.getElementById("timer").innerText = time + "Sec's";
      //calling for program to restart
      quizStart();
      //clear local storage and reset empty highscore array then reload highscore page
    } else if (selected.dataset.got === "clear") {
      localStorage.clear();
      localStorage.setItem("currentScores", "[]");
      checkHighscores();
    }
  });
};

//starts and monitors timer and starts first question
var timer = function () {
  create();
  var timerId = setInterval(function () {
    time--;
    document.getElementById("timer").innerText = time + "Sec's";
    //when time ends stop timer and call end function
    if (time === 1) {
      document.getElementById("timer").innerText = time + "Sec";
    } else if (time === 0) {
      clearInterval(timerId);
      endQuiz();
    }
  }, 1000);
  console.log("timerId ", timerId);
};

//fires on page load to populate start screen
var quizStart = function () {
  var quiz = document.getElementById("quiz-container");

  var quizTitle = document.createElement("h1");
  quizTitle.setAttribute("id", "quiz-title");
  quizTitle.innerText = "How much do you know about Fairy Tale?";
  quiz.appendChild(quizTitle);

  var quizDisc = document.createElement("p");
  quizDisc.innerText =
    "Try to answer these questions about the anime series Fariy Tale. Keep in mind that wrong answers will penalize your time remaining.";
  quiz.appendChild(quizDisc);

  var btnStart = document.createElement("button");
  btnStart.setAttribute("id", "quiz-start");
  btnStart.innerText = "Start Quiz!";
  btnStart.onclick = timer;
  quiz.appendChild(btnStart);
  /*btnStart.addEventListener("click", function () {
    timer();
  });*/
};

//removes previous content from page and populates container and question
var create = function () {
  var quiz = document.getElementById("quiz-container");
  quiz.parentNode.removeChild(quiz);

  var newQuiz = document.createElement("div");
  newQuiz.setAttribute("id", "quiz-container");
  document.body.appendChild(newQuiz);

  var questionLimit = document.createElement("div");
  questionLimit.setAttribute("id", "limit");
  newQuiz.appendChild(questionLimit);

  var disc = document.createElement("h3");
  disc.innerText = questions[indexCounter].disc;
  questionLimit.appendChild(disc);

  //calls function to handle answer generation
  createOptions();
  //populates div that appears on answer
  var result = document.createElement("div");
  result.setAttribute("id", "result");
  questionLimit.appendChild(result);
  //increment to next index in array
  indexCounter++;
};

var createOptions = function () {
  var container = document.getElementById("limit");
  //grabbing text of options in current indexed object
  var options = [
    questions[indexCounter].optionOne,
    questions[indexCounter].optionTwo,
    questions[indexCounter].optionThree,
    questions[indexCounter].optionFour,
  ];
  //generates each button with individual dataset numbers
  for (i = 0; i < 4; i++) {
    var option = document.createElement("button");
    option.dataset.answer = i;
    option.setAttribute("class", "selection");
    option.innerText = options[i];
    container.appendChild(option);
    //add eventlistener to check for correctness
    option.addEventListener("click", function (event) {
      var clicked = parseInt(event.target.dataset.answer);
      var rightIndex = indexCounter - 1;
      var right = questions[rightIndex].answer;
      var result = document.getElementById("result");
      //if answer right show hidden div with correct text
      if (clicked === right) {
        result.style.opacity = "1";
        result.innerText = '"Correct!"';
        if (questions.length === indexCounter) {
          setTimeout(function () {
            for (i = 0; i < 100; i++) {
              window.clearInterval(i);
            }
            endQuiz();
          }, 1000);
          return;
        }
        //pause then start next question
        setTimeout(function () {
          create();
        }, 1000);
        //if answer wrong show hidden div with wrong text
      } else {
        result.style.opacity = "1";
        result.innerText = '"Wrong!"';
        time = time - 5;
        if (questions.length === indexCounter) {
          setTimeout(function () {
            for (i = 0; i < 100; i++) {
              window.clearInterval(i);
            }
            endQuiz();
          }, 1000);
          return;
        }
        //pause then start next question
        setTimeout(function () {
          create();
        }, 1000);
      }
    });
  }
};

var endQuiz = function (score) {
  //page reset start
  var quiz = document.getElementById("quiz-container");
  quiz.parentNode.removeChild(quiz);

  var newQuiz = document.createElement("div");
  newQuiz.setAttribute("id", "quiz-container");
  document.body.appendChild(newQuiz);

  var questionLimit = document.createElement("div");
  questionLimit.setAttribute("id", "limit");
  questionLimit.setAttribute("class", "end-limit");
  newQuiz.appendChild(questionLimit);
  //page reset end

  //end of quiz page generation
  var endTitle = document.createElement("h2");
  endTitle.innerText = "All done!";
  questionLimit.appendChild(endTitle);

  var highscore = document.createElement("p");
  highscore.innerText = "Your final score is " + time;
  questionLimit.appendChild(highscore);

  var enter = document.createElement("label");
  enter.setAttribute("for", "initals");
  enter.setAttribute("name", "enter");
  enter.setAttribute("id", "highscore");
  enter.innerText = "Enter initals:";
  questionLimit.appendChild(enter);

  var initalInput = document.createElement("input");
  initalInput.setAttribute("id", "ititals");
  questionLimit.appendChild(initalInput);

  var subBtn = document.createElement("button");
  subBtn.setAttribute("id", "sub-btn");
  subBtn.innerText = "Submit";
  questionLimit.appendChild(subBtn);

  subBtn.addEventListener("click", function () {
    //grabs user input
    var newHighscore = document.getElementById("ititals").value;
    //checks for existing highscore in local storage
    if (localStorage.getItem("currentScores") == null) {
      //if non generates empty array
      localStorage.setItem("currentScores", "[]");
    }

    //adds user to highscore then stringify and update local storage
    var highscores = JSON.parse(localStorage.getItem("currentScores"));
    highscores.push(newHighscore + ": " + time);
    localStorage.setItem("currentScores", JSON.stringify(highscores));

    checkHighscores();
  });
};
//start of quiz
quizStart();

checkHighscore.addEventListener("click", function () {
  if (indexCounter > 0) {
    var quit = window.confirm("Do you want to quit the quiz?");
    if (quit) {
      time = 1;
    }
  }
  checkHighscores();
});
