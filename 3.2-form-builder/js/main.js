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
  var formDataHTML ="";

  JSONData.forEach(function(inputData){

    var inputPlaceholderString = "";

    if (inputData.type === "select"){
      inputPlaceholderString += `<select>`;

      // There is an error in this for each loop... I cannot figure out what is giving me the error or how to correct it... I am trying to make second loop so my if-else statement will store. I need help with this loop.
        inputData.select.forEach(function(selectData){
          inputPlaceholderString += `<select label="${selectData.label}" value= "${selectData.value}"</select>`;
        })

    }else {
      inputPlaceholderString += `<label> ${inputData.label} </label>`;
      inputPlaceholderString += `<input id="${inputData.id}" type="${inputData.type}"
      id="${inputData.id}" icon="${inputData.icon}">`;

    }
    formDataHTML += inputPlaceholderString;

    })
  bodyElement.innerHTML += formDataHTML

  });
  xhr.send();
})
