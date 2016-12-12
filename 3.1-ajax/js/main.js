// [x] Once HTML set up, establish DOM.
// [x] Find API data from external source
// [x] Create variable for XHR
// [x] Open XHR ("GET")
// [x] Set up Event Listener
// [x] Change response from string to object

// Establishing DOM
document.addEventListener("DOMContentLoaded", function(){

  var moviesSectionElement = document.querySelector("[data-js='movies']");
  // creating xhr instance
  var xhr = new XMLHttpRequest();

  xhr.open("GET","http://www.omdbapi.com/?t=Wedding+Crashers&y=&plot=short&r=json");

  xhr.addEventListener("load", function(e){

  var xhrData = this.response;

  var movieData = JSON.parse(xhrData);

    var movieArticleHTML = "<article>";
          movieArticleHTML += "<h2>";
            movieArticleHTML += movieData.Title;
          movieArticleHTML += "</h2>";
          movieArticleHTML += "<img src='";
            movieArticleHTML += movieData.Poster;
          movieArticleHTML += "'/>";
        movieArticleHTML += "</article";
        moviesSectionElement.innerHTML += movieArticleHTML;

    console.log(movieArticleHTML);

  });

xhr.send();
});
