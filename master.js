const rangeInputOne = document.getElementById("usdRangeOne");
const rangeValueOne = document.getElementById("rangeValueOne");
const rangeInputTwo = document.getElementById("usdRangeTwo");
const rangeValueTwo = document.getElementById("rangeValueTwo");
const rangeInputThree = document.getElementById("usdRangeThree");
const rangeValueThree = document.getElementById("rangeValueThree");
let questionsOne = document.querySelector(".questions-one");
let questionsTwo = document.querySelector(".questions-two");
let questionsThree = document.querySelector(".questions-three");
let questionsFour = document.querySelector(".questions-four");
let questionsFive = document.querySelector(".questions-five");
let questionsSix = document.querySelector(".questions-six");
let questionsSeven = document.querySelector(".questions-seven");
let progressColor = document.querySelector(".color");
let btnQuestionsOne = document.querySelectorAll(".questions-one button");
let btnQuestionsTwo = document.querySelectorAll(".questions-two button");
let btnQuestionsFour = document.querySelectorAll(".questions-four button");
let btnQuestionsTwoBack = document.querySelector(".questions-two .back");
let btnQuestionsFourBack = document.querySelector(".questions-four .back");
let btnQuestionsSevenBack = document.querySelector(".questions-seven .back");
let continueBtnQThree = document.querySelector(".questions-three .continue");
let continueBtnQFive = document.querySelector(".questions-five .continue");
let continueBtnQSix = document.querySelector(".questions-six .continue");

// Range Input
function rangeInput(range, rangeValue) {
  range.addEventListener("input", () => {
    const value = range.value;
    rangeValue.textContent = `$ ${value}`;
  });
}
rangeInput(rangeInputOne, rangeValueOne);
rangeInput(rangeInputTwo, rangeValueTwo);
rangeInput(rangeInputThree, rangeValueThree);

// buttons in questions
function btnQuestions(btns, hideQuestion, showQuestion, progress) {
  btns.forEach((e) => {
    e.onclick = () => {
      hideQuestion.style.display = "none";
      showQuestion.style.display = "block";
    };
  });
}
btnQuestions(btnQuestionsOne, questionsOne, questionsTwo, progressColor);
btnQuestions(btnQuestionsTwo, questionsTwo, questionsThree, progressColor);
btnQuestions(btnQuestionsFour, questionsFour, questionsFive, progressColor);

// Back Buttons
function backBtn(btn, hideByBackBtn, showByBakcBtn) {
  btn.onclick = () => {
    hideByBackBtn.style.display = "none";
    showByBakcBtn.style.display = "block";
  };
}
backBtn(btnQuestionsTwoBack, questionsTwo, questionsOne);
backBtn(btnQuestionsFourBack, questionsFour, questionsThree);
backBtn(btnQuestionsSevenBack, questionsSeven, questionsSix);

// Continue Buttons
function continueBtn(btn, hideQuestion, showQuestion) {
  btn.onclick = () => {
    hideQuestion.style.display = "none";
    showQuestion.style.display = "block";
  };
}
continueBtn(continueBtnQThree, questionsThree, questionsFour);
continueBtn(continueBtnQFive, questionsFive, questionsSix);
continueBtn(continueBtnQSix, questionsSix, questionsSeven);
