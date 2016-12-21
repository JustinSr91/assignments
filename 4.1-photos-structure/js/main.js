// var $ = require("jquery");

$(function(){

  var $body = $("body");

  var $modalClose = $body.find("[data-js='modal__close']");
  var $mainElement = $body.find("[data-js='main']");
  var $imgElement = $body.find("[data-js='image']");
  var $backButton = $body.find("[data-js='backbutton']");
  var $albumHeading2 = $body.find("[data-js='albumHeading2']");

    $imgElement.on("click", function(e){
      $albumHeading2.addClass("remove__album__heading2");
      $mainElement.addClass("main__close");
      $modalClose.removeClass("modal__close");
  });

    $backButton.on("click", function(e){
      $albumHeading2.removeClass("remove__album__heading2");
      $mainElement.removeClass("main__close");
      $modalClose.addClass("modal__close");
  });

});
