
// [x] Create event listener in JQ
// [x] Find elements in JQ ($body.find)
// [x] Refactor equal button
// [x] Refactor Clear button

var $ = require("jquery");

$(function(){

  var $body = $("body");
  var $clearElement = $body.find("[data-js='Clear']");
  var $equalElement = $body.find("[data-js='Equals']");
  var $outputWindowElement = $body.find("[data-js='output__Window']");
  var $numberKeyElement = $body.find("[data-js='numberKey']");

    $numberKeyElement.on("click", function(e){
      var $clickedNumberString = $(this);
      var numberOutputString = $outputWindowElement.text();
      var numberString = $clickedNumberString.text();
      $outputWindowElement.text(numberOutputString + numberString);

      $equalElement.on("click", function(e){
       var total = eval($outputWindowElement.text());
       $outputWindowElement.text(total);
     });

     $clearElement.on("click", function(){
       var $this = $("this");
       $this = $outputWindowElement.text("");
     });
   });
});
