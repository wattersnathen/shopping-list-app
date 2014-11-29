$(document).ready(function() {
  
  var itemToAdd = $("#enter-item");

  $("#add-item-button").click(function() {
    addItemToList(itemToAdd);
  });

  $("#enter-item").keypress(function(event) {
    if (event.which === 13) {
      addItemToList(itemToAdd);
    }
  });

  $("#item-list ul").on("click", "button", function() {
    $(this).closest("li").remove(); // remove whole list item from DOM when delete is clicked
  });

  $("#item-list ul").on("click", "li", function() {
    $(this).find("input").toggleClass("purchased-item");
  });

  $(document).on("click", function() {
    $(this).find("#item-list").find("input").attr("disabled", true);
  });

  $("#item-list ul").on("dblclick", "li", function() {
    $(this).find("input").removeAttr("disabled");
  });

  function addItemToList(item) {
    var itemVal = item.val().trim();
    if (itemVal) {
      $("#error-message").hide();
      var html = "<li><input type='text' value='" + itemVal + "' disabled><button class='delete'>Delete</button></li>";
      $("#item-list ul").append(html);
      item.val("");
    } else {
      $("#error-message").show();
    }
    item.focus();
  }

});