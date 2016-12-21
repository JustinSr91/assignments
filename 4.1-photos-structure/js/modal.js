var $ = require("jquery");

$(function(){

  var $body = $("body");

  var $modalClose = $body.find("[data-js='modal__close']");
  var $mainElement = $body.find("[data-js='main']");

  $modalClose.on("click", function(e){
    console.log("is this working");
    $mainElement.addClass("modal__close");
})
