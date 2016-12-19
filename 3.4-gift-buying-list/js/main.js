$(function(){

  var $body = $("body");

  var $itemInputArea = $body.find("[data-js='item__textArea']");
  var $addButton = $body.find("[data-js='form__addButton']");
  var $itemSection = $body.find("[data-js='item__section']");

  $addButton.on("click", function(e){
    e.preventDefault();

    var $inputValue = $itemInputArea.val();
    // Used this function to split the gift item and the dollar amount...
    var $inputString = $inputValue.split(",");
    var $price = $inputString[1];

      // Here i am attempting to create a function for check button element... did not work...
      $('check__button').click(function(){
          var total = 0;
          $('.check__button:checked').each(function(){
            total += parseInt($(this).val());
          });
          $('.check__button:not(:checked)').each(function(){

          });
          $('#total').html('$' + total);

        })
      // Here is element for gift item...
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
      // Whole gift item article with check button, price, and gift item tied in...
      var $articleHTML = $("<article>")
        .append($checkButtonElement)
        .append($listItemElement)
        .append($priceElement)
        .attr({
          class:"item__article2"
        })
      ;

      var $priceElement = $("<h2>")
        .attr({
          class:"h2__price"
        })

      $itemSection.prepend($articleHTML)
  });
});
