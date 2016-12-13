// Setting up DOM...
document.addEventListener("DOMContentLoaded", function(){

// Linking my JS to HTML document...
  var bodyElement = document.querySelector("[data-js='bodyElement']");

// Creating var (instance) to request Form information...
  var xhr = new XMLHttpRequest();

// Grabbed url for form data...
  xhr.open("GET", "http://json-data.herokuapp.com/forms");

// creating eventListener...
  xhr.addEventListener("load", function(e){

  var xhrData = this.response;

// Now I will parse JSON data...
  var JSONData = JSON.parse(xhrData);

  // This is a placeholder for loop item data...
  var formHTML ="";

  JSONData.forEach(function(inputData){

    var placeholderString = "";
    
    if (inputData.type === "text"){
      placeholderString += `<label> ${inputData.label} </label>`;
      placeholderString += `<input id="${inputData.id}" type="${inputData.type}"/>`;
    }



    formHTML += placeholderString

    })
  bodyElement.innerHTML += formHTML

  });
  xhr.send();
})
