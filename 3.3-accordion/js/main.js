// adding factory call in place of DOMContentLoaded...

$(function(){

// created a var to reference the positions elements in HTML...
  var $positionElements = $("[data-js='position']");

// here, I will give a listener that will look for the click of the element on the page.
  $positionElements.on("click", function(e){

// the keyword (this) will find and reference the clicked item
    var $clickedItem = $(this);

    $positionElements.filter(".paragraph__expand").removeClass("paragraph__expand");
  //
    $clickedItem.addClass("paragraph__expand");
  });

});
