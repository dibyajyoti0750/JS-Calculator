const display = document.querySelector("#display");
const btns = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");
const del = document.querySelector("#delete");

let currNum = "";
let prevNum = "";
let theOperator = "";

for (let btn of btns) {
  btn.addEventListener("click", () => {
    currNum += btn.innerText;
    display.innerText = currNum;
  });
}

for (let Operator of operators) {
  Operator.addEventListener("click", () => {
    theOperator = Operator.innerText;
    display.innerText += theOperator;
    prevNum = currNum;
    currNum = "";
  });
}

function add(a, b) {
  return parseFloat(a) + parseFloat(b);
}

function sub(a, b) {
  return parseFloat(a) - parseFloat(b);
}

function mul(a, b) {
  return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
  if (b == 0) {
    return "Error";
  } else {
    return parseFloat(a) / parseFloat(b);
  }
}

equals.addEventListener("click", () => {
  let result;
  switch (theOperator) {
    case "+":
      result = add(prevNum, currNum);
      display.innerText = result;
      currNum = result;
      break;
    case "-":
      result = sub(prevNum, currNum);
      display.innerText = result;
      currNum = result;
      break;
    case "*":
      result = mul(prevNum, currNum);
      display.innerText = result;
      currNum = result;
      break;
    case "/":
      result = divide(prevNum, currNum);
      display.innerText = result;
      currNum = result;
      break;
  }
});

clear.addEventListener("click", () => {
  display.innerText = "0";
  currNum = "";
  prevNum = "";
  theOperator = "";
});

del.addEventListener("click", () => {
  currNum = currNum.slice(0, -1);
  display.innerText = currNum;
});
