// var $ = require("jquery");

$(function(){

  var $body = $("body");

  var $modalCloseBear = $body.find("[data-js='modal__close__bear']");
  var $modalCloseDeer = $body.find("[data-js='modal__close__deer']");
  var $modalCloseDog = $body.find("[data-js='modal__close__dog']");
  var $modalCloseDuck = $body.find("[data-js='modal__close__duck']");
  var $modalCloseFish = $body.find("[data-js='modal__close__fish']");
  var $modalCloseHorse = $body.find("[data-js='modal__close__horse']");
  var $mainElement = $body.find("[data-js='main']");

  var $fishImgElement = $body.find("[data-js='fishImage']");
  var $bearImgElement = $body.find("[data-js='bearImage']");
  var $deerImgElement = $body.find("[data-js='deerImage']");
  var $dogImgElement = $body.find("[data-js='dogImage']");
  var $duckImgElement = $body.find("[data-js='duckImage']");
  var $horseImgElement = $body.find("[data-js='horseImage']");

  var $backButton = $body.find("[data-js='backbutton]");
  var $albumHeading2 = $body.find("[data-js='albumHeading2']");

      $fishImgElement.on("click", function(e){
        $albumHeading2.addClass("remove__album__heading2");
        $mainElement.addClass("main__close");
        $modalCloseFish.removeClass("modal__close__fish");
        $modalCloseDuck.addClass("modal__close__duck");
        $modalCloseHorse.addClass("modal__close__horse");
        $modalCloseDeer.addClass("modal__close__deer");
        $modalCloseBear.addClass("modal__close__bear");
        $modalCloseDog.addClass("modal__close__dog");

    });

      $backButton.on("click", function(e){
        $albumHeading2.removeClass("remove__album__heading2");
        $mainElement.removeClass("main__close");
        $modalCloseFish.addClass("modal__close__fish");
        $modalCloseDuck.addClass("modal__close__duck");
        $modalCloseHorse.addClass("modal__close__horse");
        $modalCloseDeer.addClass("modal__close__deer");
        $modalCloseBear.addClass("modal__close__bear");
        $modalCloseDog.addClass("modal__close__dog");


      $bearImgElement.on("click", function(e){
        $albumHeading2.addClass("remove__album__heading2");
        $mainElement.addClass("main__close");
        $modalCloseBear.removeClass("modal__close__bear");
    });

      $backButton.on("click", function(e){
        $albumHeading2.removeClass("remove__album__heading2");
        $mainElement.removeClass("main__close");
        $modalCloseBear.addClass("modal__close__bear");
        $modalCloseDuck.addClass("modal__close__duck");
        $modalCloseHorse.addClass("modal__close__horse");
        $modalCloseDeer.addClass("modal__close__deer");
        $modalCloseFish.addClass("modal__close__fish");
        $modalCloseDog.addClass("modal__close__dog");
    });

      $dogImgElement.on("click", function(e){
        $albumHeading2.addClass("remove__album__heading2");
        $mainElement.addClass("main__close");
        $modalCloseDog.removeClass("modal__close__dog");
    });

      $backButton.on("click", function(e){
        $albumHeading2.removeClass("remove__album__heading2");
        $mainElement.removeClass("main__close");
        $modalCloseDog.addClass("modal__close__dog");
        $modalCloseDuck.addClass("modal__close__duck");
        $modalCloseHorse.addClass("modal__close__horse");
        $modalCloseDeer.addClass("modal__close__deer");
        $modalCloseFish.addClass("modal__close__fish");
        $modalCloseBear.addClass("modal__close__bear");
    });

    $deerImgElement.on("click", function(e){
      $albumHeading2.addClass("remove__album__heading2");
      $mainElement.addClass("main__close");
      $modalCloseDeer.removeClass("modal__close__deer");
    });

    $backButton.on("click", function(e){
      $albumHeading2.removeClass("remove__album__heading2");
      $mainElement.removeClass("main__close");
      $modalCloseDeer.addClass("modal__close__deer");
      $modalCloseDuck.addClass("modal__close__duck");
      $modalCloseHorse.addClass("modal__close__horse");
      $modalCloseFish.addClass("modal__close__fish");
      $modalCloseBear.addClass("modal__close__bear");
      $modalCloseDog.addClass("modal__close__dog");
    });

    $horseImgElement.on("click", function(e){
      $albumHeading2.addClass("remove__album__heading2");
      $mainElement.addClass("main__close");
      $modalCloseHorse.removeClass("modal__close__horse");
    });

    $backButton.on("click", function(e){
      $albumHeading2.removeClass("remove__album__heading2");
      $mainElement.removeClass("main__close");
      $modalCloseDuck.addClass("modal__close__duck");
      $modalCloseHorse.addClass("modal__close__horse");
      $modalCloseDeer.addClass("modal__close__deer");
      $modalCloseFish.addClass("modal__close__fish");
      $modalCloseBear.addClass("modal__close__bear");
      $modalCloseDog.addClass("modal__close__dog");
    });

    $duckImgElement.on("click", function(e){
      $albumHeading2.addClass("remove__album__heading2");
      $mainElement.addClass("main__close");
      $modalCloseDuck.removeClass("modal__close__duck");
    });

    $backButton.on("click", function(e){
      $albumHeading2.removeClass("remove__album__heading2");
      $mainElement.removeClass("main__close");
      $modalCloseDuck.addClass("modal__close__duck");
      $modalCloseHorse.addClass("modal__close__horse");
      $modalCloseDeer.addClass("modal__close__deer");
      $modalCloseFish.addClass("modal__close__fish");
      $modalCloseBear.addClass("modal__close__bear");
      $modalCloseDog.addClass("modal__close__dog");

    });

});
