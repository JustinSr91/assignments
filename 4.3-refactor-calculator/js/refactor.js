
// [x] Create event listener in JQ
// [] Find elements in JQ ($body.find)
// [] Refactor equal button

var $ = require("jquery");

$(function(){

  var $body = $(".calc__body");
  var $numberKeyElementClear = $body.find("[data-js='numberKeyClear']");
  var $numberKeyElementEqual = $body.find("[data-js='numberKeyEqual']");
  // var $outputKeyElement = $body.find("[data-js='numberKeyEqual']");
  var $outputWindowElement = $body.find("[data-js='output__Window']");

  $numberKeyElementEqual.on("click", function(e){
    var answerOutput = eval($outputWindowElement.html());
    $outputWindowElement.html(answerOutput);
  })





})

// THE CODE BELOW IS TRIAL AND ERROR FOR ALL CALC NUMBERS. PLACED ALL NUMBERS INTO ONE DATA-JS GROUP AND RAN THE CODE BELOW. COULD NOT GET THE CODE TO SHOW EXACT NUMBER CLICKED IN OUTPUT WINDOW. INSTEAD, TOTAL GROUP OF NUMBERS INSIDE DATA-JS GROUPING SHOWS IN WINDOW. CODE ABOVE WORKS FOR ALL NUMBERS AS THEY ARE PRESSED.

  // $numberKeyElement.on("click", function(e){
  //   var $clickedNumberString = $(this);
  //   var outputString = $outputWindowElement.text();
  //   var numberClicked = $numberKeyElement.text();
  //   $outputWindowElement.text(outputString + numberClicked);
  //   console.log($numberKeyElement.text());
  //   // $outputWindowElement.html(answerOutput);
  //
  // })
