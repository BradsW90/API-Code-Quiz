//set beginning time
var time = 60;
document.getElementById("timer").innerText = time;
var quiz = document.getElementById("quiz-container");
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
    optionOne: "1.14",
    optionTwo: "2.56",
    optionThree: "3.30",
    optionFour: "4.All of the above",
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
    disc: "",
    optionOne: "",
    optionTwo: "",
    optionThree: "",
    optionFour: "",
    answer: 0,
  },
  {
    disc: "",
    optionOne: "",
    optionTwo: "",
    optionThree: "",
    optionFour: "",
    answer: 0,
  },
];

//fires on page load to populate start screen
var quizStart = function () {
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
  quiz.appendChild(btnStart);
  var btn = document.getElementById("quiz-start");
  return btn;
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
        //pause then start next question
        setTimeout(function () {
          create();
        }, 1000);
        //if answer wrong show hidden div with wrong text
      } else {
        result.style.opacity = "1";
        result.innerText = '"Wrong!"';
        //pause then start next question
        setTimeout(function () {
          create();
        }, 1000);
      }
    });
  }
};

//start of quiz
var btn = quizStart();

//on click starts quiz timer and starts first question
btn.addEventListener("click", function () {
  create();
  var timerId = setInterval(function () {
    time--;
    document.getElementById("timer").innerText = time;
    //when time ends stop timer and call end function
    if (time === 0) {
      clearInterval(timerId);
    }
  }, 1000);
});
