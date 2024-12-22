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
    if (currNum !== "") {
      theOperator = Operator.innerText;
      display.innerText += theOperator;
      prevNum = currNum;
      currNum = "";
    }
  });
}

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (!isNaN(key)) {
    currNum += key;
    display.innerText = currNum;
  } else if (key === ".") {
    if (!currNum.includes(".")) {
      currNum += key;
      display.innerText = currNum;
    }
  } else if (key === "/" || key === "*" || key === "-" || key === "+") {
    if (currNum !== "") {
      theOperator = key;
      display.innerText += theOperator;
      prevNum = currNum;
      currNum = "";
    }
  } else if (key === "Enter") {
    equals.click();
  } else if (key === "Backspace") {
    del.click();
  }
});

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
  if (prevNum === "" || currNum === "") return;

  switch (theOperator) {
    case "+":
      result = add(prevNum, currNum);
      break;
    case "-":
      result = sub(prevNum, currNum);
      break;
    case "*":
      result = mul(prevNum, currNum);
      break;
    case "/":
      result = divide(prevNum, currNum);
      break;
    default:
      result = "Error";
      break;
  }

  display.innerText = result;
  currNum = result.toString();
  prevNum = "";
  theOperator = "";
});

clear.addEventListener("click", () => {
  display.innerText = "0";
  currNum = "";
  prevNum = "";
  theOperator = "";
});

del.addEventListener("click", () => {
  currNum = currNum.slice(0, -1);
  display.innerText = currNum || 0;
});
