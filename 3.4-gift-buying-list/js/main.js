
$(function(){

  var $body = $("body");

  var $itemTextArea = $body.find("[data-js='item__textArea']");
  var $addButton = $body.find("[data-js='form__addButton']");
  var $itemSection = $body.find("[data-js='item__section']");

  $addButton.on("click", function(e){

    e.preventDefault();

    var $textAreaValue = $itemTextArea.val();
  })
})
