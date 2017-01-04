var $ = require("jquery");

$(function(){

  var $body = $("body__index");

  var $fishImgElement = $body.find("[data-js='fishImage']");
  // var $bearImgElement = $body.find("[data-js='bearImage']");
  // var $deerImgElement = $body.find("[data-js='deerImage']");
  // var $dogImgElement = $body.find("[data-js='dogImage']");
  // var $duckImgElement = $body.find("[data-js='duckImage']");
  // var $horseImgElement = $body.find("[data-js='horseImage']");
  var $mainElement = $body.find("[data-js='main']");
  var $modalClose = $body.find("[data-js='modal__close']");
  var $backButton = $body.find("[data-js='backbutton]");
  var $albumHeading2 = $body.find("[data-js='albumHeading2']");

      $fishImgElement.on("click", function(e){
        $albumHeading2.addClass("remove__album__heading2");
        $mainElement.addClass("main__close");
        $modalClose.removeClass("modal__close");
        // $modalCloseDuck.addClass("modal__close__duck");
        // $modalCloseHorse.addClass("modal__close__horse");
        // $modalCloseDeer.addClass("modal__close__deer");
        // $modalCloseBear.addClass("modal__close__bear");
        // $modalCloseDog.addClass("modal__close__dog");

      $backButton.on("click", function(e){
        $albumHeading2.removeClass("remove__album__heading2");
        $mainElement.removeClass("main__close");
        // $modalCloseFish.addClass("modal__close__fish");
        // $modalCloseDuck.addClass("modal__close__duck");
        // $modalCloseHorse.addClass("modal__close__horse");
        // $modalCloseDeer.addClass("modal__close__deer");
        // $modalCloseBear.addClass("modal__close__bear");
        // $modalCloseDog.addClass("modal__close__dog");

        console.log(is working);
    })
  })
})
