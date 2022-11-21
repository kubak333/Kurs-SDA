// import { HistoryItem } from "./historyItem.js";

// class Calculator {
//   constructor(resultElId, historyElId) {
//     this.resultEl = document.getElementById(resultElId);
//     this.historyEl = document.getElementById(historyElId);
//     this.history = [];
//   }

//   createElement(elements) {
//     this.resultEl.innerText = elements.join(" ");
//     this.showHistory();
//   }

//   showHistory() {
//     const orderedListElement = document.createElement("ol");

//     for (let i = 0; i < this.history.length; i++) {
//       const listItemElement = document.createElement("li");
//       listItemElement.innerText = this.history[i].toString();

//       if (this.history[i].result % 2 === 0) {
//         listItemElement.classList.add("even");
//       } else {
//         listItemElement.classList.add("odd");
//       }

//       orderedListElement.appendChild(listItemElement);
//     }

//     if (this.historyEl.firstChild) {
//       this.historyEl.removeChild(this.historyEl.firstChild);
//     }

//     this.historyEl.appendChild(orderedListElement);
//   }

//   addHistory(a, b, result, sign) {
//     //this.history.push(`${a} ${sign} ${b} = ${result}`);
//     this.history.push(new HistoryItem(a, b, result, sign));
//   }

//   sum(a, b) {
//     this.addHistory(a, b, a + b, "+");
//     this.createElement([a, "+", b, "=", a + b]);
//   }

//   div(a, b) {
//     this.addHistory(a, b, a / b, "/");
//     this.createElement([a, "/", b, "=", a / b]);
//   }

//   mul(a, b) {
//     this.addHistory(a, b, a * b, "*");
//     this.createElement([a, "*", b, "=", a * b]);
//   }

//   sub(a, b) {
//     this.addHistory(a, b, a - b, "-");
//     this.createElement([a, "-", b, "=", a - b]);
//   }

//   reset(number1ElId, number2ElId, selectElId) {
//     const number1 = document.getElementById(number1ElId);
//     const number2 = document.getElementById(number2ElId);

//     number1.value = "";
//     number2.value = "";

//     this.history = [];
//     this.showHistory();

//     this.resultEl.innerText = "";

//     const selectEl = document.getElementById(selectElId);
//     selectEl.selectedIndex = 0;
//   }
// }

// const btn = document.getElementById("myBtn");
// const calc = new Calculator("myResult", "myHistory");

// btn.addEventListener("click", () => {
//   const addIdx = 0;
//   const subIdx = 1;
//   const mulIdx = 2;
//   const divIdx = 3;

//   const number1El = document.getElementById("myNum1");
//   const number2El = document.getElementById("myNum2");
//   const selectEl = document.getElementById("mySelect");

//   const number1 = parseInt(number1El.value);
//   const number2 = parseInt(number2El.value);

//   if (selectEl.selectedIndex === addIdx) {
//     calc.sum(number1, number2);
//   } else if (selectEl.selectedIndex === subIdx) {
//     calc.sub(number1, number2);
//   } else if (selectEl.selectedIndex === mulIdx) {
//     calc.mul(number1, number2);
//   } else if (selectEl.selectedIndex === divIdx) {
//     calc.div(number1, number2);
//   }
// });

// const resetBtn = document.getElementById("myResetBtn");
// resetBtn.addEventListener("click", () => {
//   calc.reset("myNum1", "myNum2", "mySelect");
// });

// const showHistoryBtn = document.getElementById("myShowHistoryBtn");
// showHistoryBtn.addEventListener("click", () => {
//   const historyEl = document.getElementById("myHistory");
//   historyEl.classList.toggle("hidden");
// });

// function degreeToRad(angleInDegree) {
//   return (Math.PI * angleInDegree) / 180;
// }

// function addElement(text, container) {
//   const newDiv = document.createElement("div");
//   const newContent = document.createTextNode(text);
//   newDiv.appendChild(newContent);
//   container.appendChild(newDiv);
// }

// const calculateBtn = document.getElementById("myCalcBtn");
// calculateBtn.addEventListener("click", () => {
//   const angleElement = document.getElementById("myAngle");

//   const myResult = document.getElementById("myTrygonometryResult");
//   let angleInRad = degreeToRad(angleElement.value);

//   addElement(`SIN: ${Math.sin(angleInRad).toFixed(2)}`, myResult);
//   addElement(`COS: ${Math.cos(angleInRad).toFixed(2)}`, myResult);
//   addElement(`TG: ${Math.tan(angleInRad).toFixed(2)}`, myResult);
//   addElement(`CTG: ${1 / Math.tan(angleInRad).toFixed(2)}`, myResult);
// });

// const classicCalcTypeEl = document.getElementById("classicCalcType");
// classicCalcTypeEl.addEventListener("change", () => {
//   const classicCalcContainerEl = document.getElementById(
//     "classicCalcContainer"
//   );
//   const trygCalcContainerEl = document.getElementById("triCalcContainer");

//   classicCalcContainerEl.classList.remove("hidden");
//   trygCalcContainerEl.classList.add("hidden");
// });

// const trygoCalcTypeEl = document.getElementById("trygoCalcType");
// trygoCalcTypeEl.addEventListener("change", () => {
//   const classicCalcContainerEl = document.getElementById(
//     "classicCalcContainer"
//   );
//   const trygCalcContainerEl = document.getElementById("triCalcContainer");

//   classicCalcContainerEl.classList.add("hidden");
//   trygCalcContainerEl.classList.remove("hidden");
// });

// fetch("https://reqres.in/api/users")
//   .then((res) => res.json())
//   .then((resData) => {
//     const app = document.getElementById("app");

//     for (let i = 0; i < resData.data.length; i++) {
//       const img = document.createElement("img");
//       const header = document.createElement("h4");
//       const card = document.createElement("div");
//       card.classList.add("card");

//       img.src = resData.data[i].avatar;
//       header.innerText = `${resData.data[i].first_name} ${resData.data[i].last_name}`;
//       card.appendChild(img);
//       card.appendChild(header);
//       app.appendChild(card);
//     }
//   });

function calculateRate() {
    fetch("https://api.nbp.pl/api/exchangerates/rates/a/eur/?format=json")
      .then((res) => res.json())
      .then((resData) => {
        const exchangeRate = resData.rates[0].mid;
        const conversionTypeEl = document.getElementById("conversionType");
        const conversionResultEl = document.getElementById("conversionResult");
        const amountEl = document.getElementById("amount");
        let result = 0;
  
        if (conversionTypeEl.selectedIndex === 0) {
          result = exchangeRate * amountEl.value;
        } else {
          result = amountEl.value / exchangeRate;
        }
        conversionResultEl.innerText = result;
      });
  }
  
  const amountEl = document.getElementById("amount");
  amountEl.addEventListener("change", calculateRate);
  
  const conversionTypeEl = document.getElementById("conversionType");
  conversionTypeEl.addEventListener("change", calculateRate);
  