const usdRangeInput = document.getElementById("usdRange");
const rangeValueDisplay = document.getElementById("rangeValue");
const usdRangeInput2 = document.getElementById("usdRange2");
const rangeValueDisplay2 = document.getElementById("rangeValue2");
const usdRangeInput3 = document.getElementById("usdRange3");
const rangeValueDisplay3 = document.getElementById("rangeValue3");
let quotationsOne = document.querySelector(".quotations-one");
let quotationsTwo = document.querySelector(".quotations-two");
let quotationsThree = document.querySelector(".quotations-three");
let quotationsFour = document.querySelector(".quotations-four");
let quotationsFive = document.querySelector(".quotations-five");
let quotationsSix = document.querySelector(".quotations-six");
let quotationsSeven = document.querySelector(".quotations-seven");
let progressColor = document.querySelector(".color");

usdRangeInput.addEventListener("input", () => {
  const value = usdRangeInput.value;
  rangeValueDisplay.textContent = `$ ${value}`;
});
usdRangeInput2.addEventListener("input", () => {
  const value = usdRangeInput2.value;
  rangeValueDisplay2.textContent = `$ ${value}`;
});
usdRangeInput3.addEventListener("input", () => {
  const value = usdRangeInput3.value;
  rangeValueDisplay3.textContent = `$ ${value}`;
});

let btnQuotationsOne = document.querySelectorAll(
  ".quotations-one .buttons button"
);
btnQuotationsOne.forEach((e) => {
  e.onclick = () => {
    quotationsOne.style.display = "none";
    quotationsTwo.style.display = "block";
    progressColor.style.width = "22.22%";
  };
});

let btnQuotationsTwo = document.querySelectorAll(
  ".quotations-two .buttons button"
);
btnQuotationsTwo.forEach((e) => {
  e.onclick = () => {
    quotationsTwo.style.display = "none";
    quotationsThree.style.display = "block";
    progressColor.style.width = "33.33%";
  };
});

let btnQuotationsTwoBack = (document.querySelector(
  ".quotations-two .back"
).onclick = () => {
  quotationsTwo.style.display = "none";
  quotationsOne.style.display = "block";
  progressColor.style.width = "11%";
});

let continueBtnQThree = (document.querySelector(
  ".quotations-three .continue"
).onclick = () => {
  quotationsThree.style.display = "none";
  quotationsFour.style.display = "block";
  progressColor.style.width = "44.44%";
});

let btnQuotationsFour = document.querySelectorAll(
  ".quotations-four .buttons button"
);
btnQuotationsFour.forEach((e) => {
  e.onclick = () => {
    quotationsFour.style.display = "none";
    quotationsFive.style.display = "block";
    progressColor.style.width = "55.56%";
  };
});

let btnQuotationsFourBack = (document.querySelector(
  ".quotations-four .back"
).onclick = () => {
  quotationsFour.style.display = "none";
  quotationsThree.style.display = "block";
});

let continueBtnQFive = (document.querySelector(
  ".quotations-five .continue"
).onclick = () => {
  quotationsFive.style.display = "none";
  quotationsSix.style.display = "block";
  progressColor.style.width = "66.67%";
});

let continueBtnQSix = (document.querySelector(
  ".quotations-six .continue"
).onclick = () => {
  quotationsSix.style.display = "none";
  quotationsSeven.style.display = "block";
  progressColor.style.width = "80.67%";
});

let btnQuotationsSevenBack = (document.querySelector(
  ".quotations-seven .buttons-container .back"
).onclick = () => {
  quotationsSeven.style.display = "none";
  quotationsSix.style.display = "block";
  progressColor.style.width = "80.67%";
});
