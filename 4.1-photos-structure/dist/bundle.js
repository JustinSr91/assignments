/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	var $ = require("jquery");

	$(function(){

	  var $body = $("body");

	  var $modalClose = $body.find("[data-js='modal__close']");
	  var $mainElement = $body.find("[data-js='main']");
	  var $imgElement = $body.find("[data-js='img']");
	  // var $imgElementHorse = $body.find("[data-js='modal__horse']");
	  // var $imgElementBear =
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


/***/ }
/******/ ]);
