var time = 60;
document.getElementById("timer").innerText = time;
var quiz = document.getElementById("quiz-container");
var indexCounter = 0;
var questions = [
  {
    disc: "this is a test question one",
    answerOne: "answer one",
    answerTwo: "answer two",
    answerThree: "answer three",
    answerFour: "answer four",
    selection: function (arg) {
      if (arg === "answer one") {
      } else {
      }
    },
  },
  {
    disc: "this is a test qusetion two",
    answerOne: "answer one",
    answerTwo: "answer two",
    answerThree: "answer three",
    answerFour: "answer four",
  },
];

var answerSelections = ["one", "two", "three", "four"];

var quizStart = function () {
  var quizTitle = document.createElement("h1");
  quizTitle.setAttribute("id", "quiz-title");
  quizTitle.innerText = "My Quiz Title";
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

var question = function () {
  var quiz = document.getElementById("quiz-container");
  quiz.parentNode.removeChild(quiz);
  var newQuiz = document.createElement("div");
  newQuiz.setAttribute("id", "quiz-container");
  document.body.appendChild(newQuiz);
  var nextQuestion = questions[indexCounter];
  var disc = document.createElement("h3");
  disc.setAttribute("id", "disc");
  disc.innerText = nextQuestion.disc;
  newQuiz.appendChild(disc);
  var selections = document.createElement("div");
  newQuiz.appendChild(selections);
  indexCounter++;
};

var options = function () {
  for (i = 0; i < answerSelections; i++) {
    var answer = document.createElement("button");
    answer.dataset.answer = answerSelections[i];
    answer.setAttribute("class", "selection");
    answer.innerText = nextQuestion.answerFour;
    selections.appendChild(ansFour);
  }
};
var btn = quizStart();

btn.addEventListener("click", function () {
  question();
  var timerId = setInterval(function () {
    time--;
    document.getElementById("timer").innerText = time;
    if (time === 0) {
      clearInterval(timerId);
    }
  }, 1000);
});
