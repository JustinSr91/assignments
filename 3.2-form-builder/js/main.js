// Setting up DOM...
document.addEventListener("DOMContentLoaded", function(){

// Linking my JS to HTML document...
  var formElementArray = document.querySelector("[data-js='form']");

// Creating var (instance) to request Form information...
  var xhr = new XMLHttpRequest();

// Grabbed url for form data...
  xhr.open("GET", "http://json-data.herokuapp.com/forms");

// creating eventListener...
  xhr.addEventListener("load", function(e){

  var xhrData = this.response;

// Now I will parse JSON data...
  var JSONData = JSON.parse(xhrData);
  for (var i = 0; i < JSONData.length; i++){
    var dataArray = JSONData[i];
    console.log(dataArray);

  }

  });

  xhr.send();
})
