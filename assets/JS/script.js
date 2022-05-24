var time = 60;
document.getElementById("timer").innerText = time;
var quiz = document.getElementById("quiz-container");
var indexCounter = 0;
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
    disc: "this is a test qusetion two",
    optionOne: "answer one",
    optionTwo: "answer two",
    optionThree: "answer three",
    optionFour: "answer four",
    answer: 3,
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
  createOptions();
  var result = document.createElement("div");
  result.setAttribute("id", "result");
  questionLimit.appendChild(result);
  indexCounter++;
};

var createOptions = function () {
  var container = document.getElementById("limit");
  var options = [
    questions[indexCounter].optionOne,
    questions[indexCounter].optionTwo,
    questions[indexCounter].optionThree,
    questions[indexCounter].optionFour,
  ];
  for (i = 0; i < 4; i++) {
    var option = document.createElement("button");
    option.dataset.answer = i;
    option.setAttribute("class", "selection");
    option.innerText = options[i];
    container.appendChild(option);
    option.addEventListener("click", function (event) {
      var clicked = parseInt(event.target.dataset.answer);
      var rightIndex = indexCounter - 1;
      var right = questions[rightIndex].answer;
      if (clicked === right) {
        console.log("Correct!");
        create();
      } else {
        console.log("Wrong!");
        create();
      }
    });
  }
};
var btn = quizStart();

btn.addEventListener("click", function () {
  create();
  var timerId = setInterval(function () {
    time--;
    document.getElementById("timer").innerText = time;
    if (time === 0) {
      clearInterval(timerId);
    }
  }, 1000);
});
