
$(function(){

  var $body = $("body");

  var $itemInputArea = $body.find("[data-js='item__textArea']");
  var $addButton = $body.find("[data-js='form__addButton']");
  var $itemSection = $body.find("[data-js='item__section']");

  $addButton.on("click", function(e){

    e.preventDefault();

    var $inputValue = $itemInputArea.val();
    // Create template for item article
    // Create template for circle check button
    // Create template for item name h2
    // Need item to drop down into list

      var $listItemElement = $("<h2>")
        .attr({
          class:"h2__item"
        })
        .text($inputValue)
      ;

      var $checkButtonElement = $("<button>")
        .attr({
          class:"check__button"
        })
      ;

      var $articleHTML = $("<article>")
        .append($checkButtonElement)
        .append($listItemElement)
        .attr({
          class:"item__article2"
        })
      ;

      // add pricing functionality
      // make price element
      // add class; CSS
      // append to articleHTML



      $itemSection.prepend($articleHTML)
      console.log($articleHTML);
  });
});
