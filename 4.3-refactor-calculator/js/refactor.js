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
