var refactor = require("./refactor")

// [] Will use JS to create event actions when each button in calculator is clicked
// [] 1. Create eventListener to allow calc to function once HTML loads.

document.addEventListener("DOMContentLoaded", function(){

CREATING VARIABLES FOR ALL CALCULATOR NUMBER KEY ELEMENTS/CLASSES IN HTML.
QUERY SELECTOR PULLS ELEMENTS OVER FROM HTML AND INSERTS INTO JS FUNCTION.
WILL EVENTUALLY TRY QUERY SELECTOR 'ALL' AND CREATE FOR-LOOP FOR NUMBER KEYS.

  // var numberKeyElementEqual = document.querySelector("[data-js='numberKeyEqual']");
  // var outputKeyElement = document.querySelector("[data-js='numberKeyEqual']");
  // numberKeyElementEqual.addEventListener("click", function(){
  // var answerOutput = eval(outputKeyElement.textContent);
  //   outputKeyElement.textContent = answerOutput;
  // });

  var numberKeyElementClear = document.querySelector("[data-js='numberKeyClear']");
  var outputKeyElement = document.querySelector("[data-js='output__Window']");
  numberKeyElementClear.addEventListener("click", function(){
    outputKeyElement.textContent = "";
  });

  var numberKeyElement7 = document.querySelector("[data-js='numberKey7']");
  var outputKeyElement = document.querySelector("[data-js='output__Window']");
  numberKeyElement7.addEventListener("click", function(){
    outputKeyElement.textContent += 7;
  });

  var numberKeyElement8 = document.querySelector("[data-js='numberKey8']");
  var outputKeyElement = document.querySelector("[data-js='output__Window']");
  numberKeyElement8.addEventListener("click", function(){
    outputKeyElement.textContent += 8;
  });

  var numberKeyElement9 = document.querySelector("[data-js='numberKey9']");
  var outputKeyElement = document.querySelector("[data-js='output__Window']");
  numberKeyElement9.addEventListener("click", function(){
    outputKeyElement.textContent += 9;
  });

  var numberKeyElementDivision = document.querySelector("[data-js='numberKeyDivision']");
  var outputKeyElement = document.querySelector("[data-js='output__Window']");
  numberKeyElementDivision.addEventListener("click", function(){
    outputKeyElement.textContent += "/";
  });

  var numberKeyElement4 = document.querySelector("[data-js='numberKey4']");
  var outputKeyElement = document.querySelector("[data-js='output__Window']");
  numberKeyElement4.addEventListener("click", function(){
    outputKeyElement.textContent += 4;
  });

  var numberKeyElement5 = document.querySelector("[data-js='numberKey5']");
  var outputKeyElement = document.querySelector("[data-js='output__Window']");
  numberKeyElement5.addEventListener("click", function(){
    outputKeyElement.textContent += 5;
  });

  var numberKeyElement6 = document.querySelector("[data-js='numberKey6']");
  var outputKeyElement = document.querySelector("[data-js='output__Window']");
  numberKeyElement6.addEventListener("click", function(){
    outputKeyElement.textContent += 6;
  });

  var numberKeyElementX = document.querySelector("[data-js='numberKeyX']");
  var outputKeyElement = document.querySelector("[data-js='output__Window']");
  numberKeyElementX.addEventListener("click", function(){
    outputKeyElement.textContent += "*";
  });

  var numberKeyElement1 = document.querySelector("[data-js='numberKey1']");
  var outputKeyElement = document.querySelector("[data-js='output__Window']");
  numberKeyElement1.addEventListener("click", function(){
    outputKeyElement.textContent += 1;
  });

  var numberKeyElement2 = document.querySelector("[data-js='numberKey2']");
  var outputKeyElement = document.querySelector("[data-js='output__Window']");
  numberKeyElement2.addEventListener("click", function(){
    outputKeyElement.textContent += 2;
  });

  var numberKeyElement3 = document.querySelector("[data-js='numberKey3']");
  var outputKeyElement = document.querySelector("[data-js='output__Window']");
  numberKeyElement3.addEventListener("click", function(){
    outputKeyElement.textContent += 3;
  });

  var numberKeyElementMinus = document.querySelector("[data-js='numberKeyMinus']");
  var outputKeyElement = document.querySelector("[data-js='output__Window']");
  numberKeyElementMinus.addEventListener("click", function(){
    outputKeyElement.textContent += "-";
  });

  var numberKeyElement0 = document.querySelector("[data-js='numberKey0']");
  var outputKeyElement = document.querySelector("[data-js='output__Window']");
  numberKeyElement0.addEventListener("click", function(){
    outputKeyElement.textContent += 0;
  });

  var numberKeyElementDecimal = document.querySelector("[data-js='numberKeyDecimal']");
  var outputKeyElement = document.querySelector("[data-js='output__Window']");
  numberKeyElementDecimal.addEventListener("click", function(){
    outputKeyElement.textContent += ".";
  });

  var numberKeyElementPlus = document.querySelector("[data-js='numberKeyPlus']");
  var outputKeyElement = document.querySelector("[data-js='output__Window']");
  numberKeyElementPlus.addEventListener("click", function(){
    outputKeyElement.textContent += "+";
  });

// HERE IS THE VARIABLE FOR THE OUTPUT WINDOW.



  //
  // numberKeyElement8.addEventListener("click", function(){
  //   outputKeyElement.textContent += 8;

  });

});
