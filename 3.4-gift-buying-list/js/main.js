$(function(){

  var $body = $("body");

  var $textArea = $body.find("[data-js='textArea']");
  var $addButton = $body.find("[data-js='addButton']");
  var $listSection = $body.find("[data-js='listSection']");
  var $listArticle = $body.find("[data-js='listArticle']");
  var $totalPriceElement = $body.find("[data-js='totalPriceArticle']");

  $addButton.on("click", function(e){
    e.preventDefault();

    var $textAreaValue = $textArea.val();
    // Used this function to split the gift name and the price of gift...
    var $textAreaArray = $textAreaValue.split(",");
    var $giftName = $textAreaArray[0];
    var $giftPrice = $textAreaArray[1];

    var $checkButton = $("<button>")
      .attr({
        class:"check__button",
        type:"button",
        value:"line",
        "data-js": "checkButton"
      });

      // Here is element for gift item...
    var $giftName = $("<h2>")
      .attr({
        class: "h2__item",
        "data-js": "giftItem"
      })
      .text($giftName);

    var $priceElement = $("<h2>")
      .attr({
        class:"h2__price",
        "data-js": "priceArea"
      })
      .text("$" + ($giftPrice))

      // Whole gift item article with check button, price, and gift item tied in...
    var $articleHTML = $("<article>")
        .attr({
          class:"list__article1"
          })
      .append($checkButton)
      .append($giftName)
      .append($priceElement)
    $listSection.prepend($articleHTML);

    var totalPriceString = "";
    var totalPrice = "";
    $priceElement.each(function(priceElement){
      var priceElement = $(".priceElement");
      totalPriceString += priceElement.text();

      var priceInput = totalPriceString;
      var numbers = priceInput.split("$");
      var numberString = numbers.join("+");
      var totalOfEval = eval(numberString);
      totalPrice = totalOfEval;
    })
    $totalPriceElement.text(totalPrice);
  });
  $body.on("click", "[data-js='checkButton']", function(){
    var $this = $(this);
    $this.siblings().addClass("lineThrough");
    $this.html("&#10003");
  });
  $body.on("dblclick", "[data-js='giftItem']", function(){
    var $this = $(this);
    $this.get(0).contentEditable = "true";
  });
  $body.on("dblclick", "[data-js='priceArea']", function(){
    var $this = $(this);
    $this.get(0).contentEditable = "true";
  });
  $body.on("dblclick", "[data-js='totalAmount']", function(){
    var $this = $(this);
    $this.get(0).contentEditable = "true";
  });
});
