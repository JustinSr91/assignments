$(function(){

  var $body = $("body");

  var $itemInputArea = $body.find("[data-js='item__textArea']");
  var $addButton = $body.find("[data-js='form__addButton']");
  var $itemSection = $body.find("[data-js='item__section']");

  $addButton.on("click", function(e){
    e.preventDefault();

    var $inputValue = $itemInputArea.val();

    var $inputString = $inputValue.split(",");
    var $price = $inputString[1];

      // Here i am attempting to create a function for comma and dollar value that will input dollar amount into $priceElement...
      $('check__button').click(function(){
          var total = 0;
          $('.check__button:checked').each(function(){
            total += parseInt($(this).val());
          });
          $('.check__button:not(:checked)').each(function(){

          });
          $('#total').html('$' + total);

        })
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
        .append($priceElement)
        .attr({
          class:"item__article2"
        })
      ;
      // add pricing functionality
      // make price element
      // add class; CSS
      // append to articleHTML
      var $priceElement = $("<h2>")
        .attr({
          class:"h2__price"
        })

      $itemSection.prepend($articleHTML)
  });
});
